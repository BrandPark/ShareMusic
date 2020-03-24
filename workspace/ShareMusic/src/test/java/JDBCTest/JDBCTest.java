package JDBCTest;
import javax.sql.DataSource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import lombok.extern.log4j.Log4j;


@Log4j
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({ "file:src/main/webapp/WEB-INF/spring/appServlet/servlet-context.xml",
	"file:src/main/webapp/WEB-INF/spring/appServlet/service-context.xml",
	"file:src/main/webapp/WEB-INF/spring/appServlet/dao-context.xml",
	"file:src/main/webapp/WEB-INF/spring/appServlet/security-context.xml",
	"file:src/main/webapp/WEB-INF/props/jdbc.properties"
})
public class JDBCTest {
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	@Test
	public void insertTable() {
		log.info("asdf");
	}
}
