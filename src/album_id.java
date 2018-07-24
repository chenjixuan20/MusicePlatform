import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "album_id")

public class album_id extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        int a_id = Integer.parseInt(request.getParameter("a_id"));

        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");

        JSONArray string = new JSONArray();

        /*
        根据接收到到a_id查询album中的name的函数
         */
        String condition=(String.format("albumId= %d and singer_id=singerId",a_id));

        string = DataBaseOperation.whereSearchTable("album,singer","albumName,album.photo,publish_time,album.song_count,album.introduction,singer_id,singerName",condition);

        PrintWriter out =response.getWriter();
        out.write(string.toString());

   }
}
