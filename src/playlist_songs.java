import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "playlist_songs")
public class playlist_songs extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        int p_id = Integer.parseInt(request.getParameter("p_id"));
        //int limit = Integer.parseInt(request.getParameter("limit"));
        //int offset = Integer.parseInt(request.getParameter("offset"));

        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");


        JSONArray string = new JSONArray();
        JSONArray jsonArray=new JSONArray();

        String playlistId=(String.format("%d",p_id));
        String condition=(String.format("play_list_id = playlistId and song.singerName=singer.singerName and song.album_id =album.albumId and playlistId=%s",playlistId));
          /*
        根据接收到到p_id limit offset查询playlist中的某一个song的函数
         */
        string =DataBaseOperation.whereSearchTable("song,album,singer,play_list","song.songId,song.songName,song.song_url,album.albumId,album.albumName,singer.singerId,singer.singerName",condition);

        //jsonArray=DataBaseOperation.searchTableWithOffset(string,limit,offset);

        PrintWriter out =response.getWriter();
        out.write(string.toString());





    }
}
