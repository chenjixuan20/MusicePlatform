import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet(name = "HttpServlet2")
public class HttpServlet2 extends HttpServlet {
    @Override
    public void init() {
        try {
            DataBaseOperation.open();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    @Override
    public void destroy() {
        try {
            DataBaseOperation.closeLink();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
