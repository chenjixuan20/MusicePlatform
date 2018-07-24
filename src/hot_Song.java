import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "hot_Song")
public class hot_Song extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {



    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int limit = Integer.parseInt(request.getParameter("limit"));


        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");


        JSONArray string = new JSONArray();
        JSONArray jsonArray = new JSONArray();
        String order="song.fire desc";
        try {
            string=DataBaseOperation.searchTable("song","songId,songName,singerName,punish_time,song_url,play_list_id,album_id,photo,fire",order);
        } catch (SQLException e) {
            e.printStackTrace();
        }


        jsonArray=DataBaseOperation.searchTableWithLimit(string,limit);


        PrintWriter out =response.getWriter();

        out.write(jsonArray.toString());



    }
}
