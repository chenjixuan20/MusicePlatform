import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import java.security.Signer;
import java.sql.*;
/**
 * @author theDogKnight
 * @date : 2018.06.30 09:26
 * @email: 1123706238@qq.com
 */
public class DataBaseOperation {
    private static final String DRIVER_NAME = "com.mysql.jdbc.Driver";
    private static final String URL_FORMER = "jdbc:mysql://localhost:3306/dai_music";
    public static Connection connection = null;
    public static Statement statement = null;


    public static void open() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER_NAME);
        connection = DriverManager.getConnection(URL_FORMER, "root", "00000000");
    }

    /**
     * 查找表内字段
     *
     * @param tableName 要操作的表的名称
     * @param valueName 要操作的字段的名称
     */
    public static JSONArray searchTable(String tableName, String valueName,String order) throws SQLException {
        JSONArray array = new JSONArray();
        try {
            statement = connection.createStatement();
            String sql = "SELECT " + valueName + " FROM " + tableName+" ORDER BY "+order;
            ResultSet resultSet = statement.executeQuery(sql);
//            CachedRowSetImpl rowset=new CachedRowSetImpl();
//            rowset.populate(resultSet);

            ResultSetMetaData resultSetMetaData = resultSet.getMetaData();
            int columnCount = resultSetMetaData.getColumnCount();
            search(array, resultSet, resultSetMetaData, columnCount);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return array;
    }

    public static JSONArray searchTableWithLimit(JSONArray jsonArray,int limit){
        JSONArray array=new JSONArray();
        for(int i=0;i<limit;i++){
            array.add(jsonArray.getJSONObject(i));
        }
        return array;
    }

    private static JSONArray getJsonArray(JSONArray jsonArray, int limit, int offset){
        JSONArray array = new JSONArray();
        int i = offset - 1;
        int k = limit + offset - 1;
        if(k>jsonArray.size())
            k=jsonArray.size();
        for (; i < k; i++) {
            array.add(jsonArray.getJSONObject(i));
        }
        return array;
    }

    public static JSONArray searchTableWithOffset(JSONArray jsonArray,int limit,int offset){
        return getJsonArray(jsonArray, limit, offset);
    }

    /*
    根据条件取表里字段
     */
    public static JSONArray whereSearchTable(String tableNmae,String valueName,String condition) {
        JSONArray array = new JSONArray();
        try {
            statement = connection.createStatement();
            String sql = "SELECT " + valueName + " FROM " + tableNmae +
                    " WHERE " + condition;
            ResultSet resultSet = statement.executeQuery(sql);
            ResultSetMetaData resultSetMetaData = resultSet.getMetaData();
            int columnCount = resultSetMetaData.getColumnCount();
            search(array, resultSet, resultSetMetaData, columnCount);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return array;
    }

    public static JSONArray whereSearchTableWithLimit(JSONArray jsonArray,int limit){
        JSONArray array=new JSONArray();
        for(int i=0;i<limit;i++){
            array.add(jsonArray.getJSONObject(i));
        }
        return array;

    }

    public static JSONArray whereSearchTableWithOffset(JSONArray jsonArray,int limit,int offset){
        return getJsonArray(jsonArray, limit, offset);
    }

    public static JSONArray whereSearchTableOrder(String tableNmae, String valueName, String condition, String order) {
        JSONArray array = new JSONArray();
        try {
            statement = connection.createStatement();
            String sql = "SELECT " + valueName + " FROM " + tableNmae +
                    " WHERE " + condition + " ORDER BY "+order;
            ResultSet resultSet = statement.executeQuery(sql);
            ResultSetMetaData resultSetMetaData = resultSet.getMetaData();
            int columnCount = resultSetMetaData.getColumnCount();
            search(array, resultSet, resultSetMetaData, columnCount);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return array;
    }
    /*
    关闭数据库连接
     */
    public static void closeLink() throws SQLException {
        if (connection!=null){
            connection.close();

        }
    }

    public static void insertTable(String tableName,String insertWhat){
        try {
            statement = connection.createStatement();
            String sql = "INSERT INTO " + tableName +" VALUE (" + insertWhat + ")" ;
            statement.executeUpdate(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void search(JSONArray array, ResultSet resultSet, ResultSetMetaData resultSetMetaData, int columnCount) throws SQLException {
        while (resultSet.next()) {
            JSONObject jsonObject = new JSONObject();
            for (int i = 1; i <= columnCount; i++) {
                String columnName = resultSetMetaData.getColumnLabel(i);
                String word_value = resultSet.getString(columnName);
                jsonObject.put(columnName, word_value);
            }
            array.add(jsonObject);
        }
    }
}