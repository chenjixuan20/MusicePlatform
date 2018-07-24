import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "playlist_id")
public class playlist_id extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        int p_id = Integer.parseInt(request.getParameter("p_id"));

        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");



        JSONArray string = new JSONArray();

        /*
        根据接收到到p_id查询playlist中的name的函数
         */
        String condition=(String.format("playlistId= %d",p_id));

        string = DataBaseOperation.whereSearchTable("play_list","playlistName,photo,creat_time,song_count,introduction,creator_id,num,fire",condition);


        PrintWriter out =response.getWriter();
        out.write(string.toString());

    }
}
