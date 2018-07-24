import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "search")
public class search extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String wd = request.getParameter("wd");
        String type = request.getParameter("type");
        int limit = Integer.parseInt(request.getParameter("limit"));
        int offset = Integer.parseInt(request.getParameter("offset"));

        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");

        JSONArray string = new JSONArray();
        JSONObject jsonObject = new JSONObject();

        JSONArray jsonArray=new JSONArray();


        /*
        根据接收到wd字段搜索歌曲，歌手。
         */

        if (type.equals("song")) {
            String conditon = String.format("song.songName like '%%%s%%' AND song.singerName = singer.singerName AND song.album_id = album.albumId", wd);
            string = DataBaseOperation.whereSearchTable("song,singer,album", "song.songId,song.songName,singer.singerId,singer.singerName,album.albumId,album.albumName", conditon);
            jsonArray=DataBaseOperation.whereSearchTableWithOffset(string,limit,offset);
            int size = string.size();
            jsonObject.put("song_total", size);
            jsonObject.put("songs", jsonArray);
        } else if (type.equals("singer")) {
            String conditon = String.format("singer.singerName like '%%%s%%'", wd);
            string = DataBaseOperation.whereSearchTable("singer", "singerId,singerName,photo", conditon);
            jsonArray=DataBaseOperation.whereSearchTableWithOffset(string,limit,offset);
            int size = string.size();
            jsonObject.put("singer_total", size);
            jsonObject.put("singers", jsonArray);
        } else if (type.equals("album")) {
            String conditon = String.format("albumName like '%%%s%%' AND album.singer_id=singer.singerId", wd);
            string = DataBaseOperation.whereSearchTable("album,singer", "albumName,albumId,album.photo,singerId,singerName", conditon);
            jsonArray=DataBaseOperation.whereSearchTableWithOffset(string,limit,offset);
            int size = string.size();
            jsonObject.put("album_total", size);
            jsonObject.put("albums", jsonArray);
        } else if (type.equals("playlist")) {
            String conditon = String.format("playlistName like '%%%s%%' AND creator_id=user.userId", wd);
            string = DataBaseOperation.whereSearchTable("play_list,user", "playlistName,playlistId,play_list.photo,num,play_list.creat_time,play_list.song_count,userId,userName", conditon);
            jsonArray=DataBaseOperation.whereSearchTableWithOffset(string,limit,offset);
            int size = string.size();
            jsonObject.put("playlist_total", size);
            jsonObject.put("playlists", jsonArray);
        }

        PrintWriter out = response.getWriter();
        out.write(jsonObject.toString());
    }
}
