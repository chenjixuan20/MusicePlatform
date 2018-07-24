import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "user_id")
public class user_id extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        int u_id = Integer.parseInt(request.getParameter("u_id"));

        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");



        JSONArray string = new JSONArray();

        /*
        根据接收到到u_id查询user中的所有信息
         */

        String condition=(String.format("userId= %d",u_id));

        string = DataBaseOperation.whereSearchTable("user","account,email,photo,register_time,userName,location",condition);



        PrintWriter out =response.getWriter();
        out.write(string.toString());


    }
}

