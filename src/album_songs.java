import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "album_songs")
public class album_songs extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        int a_id = Integer.parseInt(request.getParameter("a_id"));
        //int limit = Integer.parseInt(request.getParameter("limit"));
        //int offset = Integer.parseInt(request.getParameter("offset"));

        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");


        JSONArray string = new JSONArray();
        JSONArray jsonArray=new JSONArray();

        String albumId=(String.format("%d",a_id));
        String condition=(String.format("album_id = album.albumId and song.singerName=singer.singerName and album.albumId=%s",albumId));
          /*
        根据接收到到a_id limit offset查询album中的某一个song的函数
         */

        string =DataBaseOperation.whereSearchTable("song,album,singer","song.songId,song.songName,song.song_url,album.albumId,album.albumName,singer.singerId,singer.singerName",condition);

        //jsonArray=DataBaseOperation.searchTableWithOffset(string,limit,offset);

        PrintWriter out =response.getWriter();
        out.write(string.toString());



    }
}
