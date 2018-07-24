import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "Register	")
public class Register extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /*
        接收一个表单（user_name，passwrod)
        在user表里创建一个新对象存放
         */
        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");
        String account = request.getParameter("account");
        String password = request.getParameter("password");

        String userName=request.getParameter("account");
        String insertWhat = String.format("'%s','%s','%s'", account, password,userName);

        String condition = String.format("account='%s'", account);

        PrintWriter out = response.getWriter();

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("Status", 0);

        JSONObject jsonObject1 = new JSONObject();
        jsonObject1.put("Status", 1);


        JSONArray string = DataBaseOperation.whereSearchTable("user", "account", condition);

        if(string.size()==0){
            DataBaseOperation.insertTable("user(account,password,userName)", insertWhat);
            out.write(jsonObject1.toString());
        }else{
            out.write(jsonObject.toString());
        }

    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
