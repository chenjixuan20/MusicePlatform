import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.sql.SQLException;
import java.text.SimpleDateFormat;

@WebServlet(name = "song_comments")
public class song_comments extends HttpServlet2 {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");
        request.setCharacterEncoding("UTF-8");

        int s_id = Integer.parseInt(request.getParameter("s_id"));
        int u_id = Integer.parseInt(request.getParameter("u_id"));
        String content=request.getParameter("content");
        JSONObject jsonObject=new JSONObject();
        jsonObject.put("Status",1);

        java.util.Date date= new java.util.Date();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date2=(df.format(date));

        String insertWhat=String.format("'%d','%d','%s','%s'",s_id,u_id,content,date2);

        DataBaseOperation.insertTable("comment(music_id,username_id,comment,date)",insertWhat);

        PrintWriter out =response.getWriter();
        out.write(jsonObject.toString());
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");


        int s_id = Integer.parseInt(request.getParameter("s_id"));
        //int limit = Integer.parseInt(request.getParameter("limit"));
        //int offset = Integer.parseInt(request.getParameter("offset"));


        JSONArray string = new JSONArray();

        /*
        根据接收到到s_id查询评论的函数
         */
        String condition=(String.format("music_id= %d AND username_id=userId",s_id));


        string = DataBaseOperation.whereSearchTable("comment,user","userId,userName,photo,comment,date",condition);





        PrintWriter out =response.getWriter();
        out.write(string.toString());



    }
}
