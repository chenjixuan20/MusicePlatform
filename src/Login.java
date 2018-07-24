import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "Login")
public class Login extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /*
        接收一个表单（user_name,passward)
        user_name表里有没有接收user_name,有切密码正确则返回该user的信息
        有但是密码错误则返回密码错误的值
        没有则返回账户不存在
         */
        String account =request.getParameter("account");
        String password =request.getParameter("password");
        PrintWriter out = response.getWriter();
        String condition =String.format("account='%s'",account);
        JSONObject jsonObject1=new JSONObject();
        JSONObject jsonObject2=new JSONObject();
        jsonObject1.put("Status",1);//密码错误
        jsonObject2.put("Status",2);//账户不存在

        JSONArray jsonArray = new JSONArray();


        JSONArray string =DataBaseOperation.whereSearchTable("user","account",condition);
        JSONArray string2=DataBaseOperation.whereSearchTable("user","password",condition);
        if(string.size()==0 && string2.size()==0){
            out.write(jsonObject2.toString());
        }else if(string.size()==1 && password.equals(string2.getJSONObject(0).getString("password"))){
            jsonArray=DataBaseOperation.whereSearchTable("user","userId,account,email,photo,userName",condition);
            HttpSession session = request.getSession();
            session.setAttribute("User", account);
            out.write(jsonArray.toString());
        }else {
            out.write(jsonObject1.toString());
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
