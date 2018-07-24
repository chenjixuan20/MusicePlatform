import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "singer_id")
public class singer_id extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        int sg_id = Integer.parseInt(request.getParameter("sg_id"));

        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");



        JSONArray string = new JSONArray();

        /*
        根据接收到到sg_id查询singer中的所有信息
         */

        String condition=(String.format("singerId= %d",sg_id));

        string = DataBaseOperation.whereSearchTable("singer","singerName,photo,birthday,song_count,mv_count,introduction,big_photo",condition);



        PrintWriter out =response.getWriter();
        out.write(string.toString());

    }
}
