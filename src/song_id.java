import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "song_id")
public class song_id extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        {


            int s_id = Integer.parseInt(request.getParameter("s_id"));

            response.setContentType("text/html;charset=utf-8");
            response.setCharacterEncoding("utf-8");




            JSONArray string = new JSONArray();

            /*
              根据接收到到s_id查询album中的name的函数
            */

            String condition=(String.format("song.album_id=album.albumId and song.songId=%d",s_id)) ;

            string = DataBaseOperation.whereSearchTable("song,album","song.songName,song.singerName,song.punish_time,song_url,play_list_id,album.albumName,album.albumId,song.fire,song.photo,lyric",condition);



            PrintWriter out =response.getWriter();
            out.write(string.toString());


        }
    }
}
