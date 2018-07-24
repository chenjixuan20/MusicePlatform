import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "hot_Album")
public class hot_Album extends HttpServlet2 {


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {




    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        int limit = Integer.parseInt(request.getParameter("limit"));

        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");

        JSONArray string = new JSONArray();
        JSONArray jsonArray = new JSONArray();

        String conditon ="album.singer_id=singer.singerId ";
        String order="album.fire DESC";

        string = DataBaseOperation.whereSearchTableOrder("album,singer","albumId,albumName,album.photo,publish_time,album.song_count,album.introduction,singerId,singerName",conditon,order);

        jsonArray=DataBaseOperation.searchTableWithLimit(string,limit);

        PrintWriter out =response.getWriter();

        out.write(jsonArray.toString());



    }
}
