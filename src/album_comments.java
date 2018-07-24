import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "album_comments")
public class album_comments extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        int a_id = Integer.parseInt(request.getParameter("a_id"));
        int limit = Integer.parseInt(request.getParameter("limit"));
        int offset = Integer.parseInt(request.getParameter("offset"));

        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");


        JSONArray string = new JSONArray();

        /*
        根据接收到到a_id查询评论的函数
         */


        PrintWriter out =response.getWriter();
        out.write(string.toString());


    }
}
