import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "hot_Playlist")
public class hot_Playlist extends HttpServlet2 {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int limit = Integer.parseInt(request.getParameter("limit"));
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int limit = Integer.parseInt(request.getParameter("limit"));

        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");





        String order="fire desc";
        JSONArray string = new JSONArray();
        JSONArray jsonArray = new JSONArray();

        try {
            string = DataBaseOperation.searchTable("play_list","playlistId,playlistName,photo,creat_time,song_count,introduction,creator_id,num,fire",order);
        } catch (SQLException e) {
            e.printStackTrace();
        }


        jsonArray=DataBaseOperation.searchTableWithLimit(string,limit);


        PrintWriter out =response.getWriter();

        out.write(jsonArray.toString());


    }
}
