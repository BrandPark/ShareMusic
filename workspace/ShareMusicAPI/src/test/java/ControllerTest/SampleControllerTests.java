package ControllerTest;

import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@Log4j
@ContextConfiguration({ "file:src/main/webapp/WEB-INF/spring/appServlet/servlet-context.xml",
	"file:src/main/webapp/WEB-INF/spring/appServlet/service-context.xml",
	"file:src/main/webapp/WEB-INF/spring/appServlet/dao-context.xml",
	"file:src/main/webapp/WEB-INF/spring/appServlet/security-context.xml"
})
public class SampleControllerTests {

	@Setter(onMethod_ = { @Autowired })
	private WebApplicationContext ctx;

	private MockMvc mockMvc;

	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(ctx).build();
	}

//	@Test
//	public void testConvert() throws Exception {
//		Ticket ticket = new Ticket();
//		ticket.setTno(123);
//		ticket.setOwner("Admin");
//		ticket.setGrade("AAA");
//
//		String jsonStr = new Gson().toJson(ticket);
//
//		log.info(jsonStr);
//
//		this.mockMvc.perform(
//				MockMvcRequestBuilders.post("/sample/ticket").contentType(MediaType.APPLICATION_JSON).content(jsonStr))
//				.andExpect(MockMvcResultMatchers.status().is(200));
//	}
	
//	@Test
//	public void test2() throws Exception {
//		Criteria cri = new Criteria("admin");
//
//		String jsonStr = new Gson().toJson(cri);
//
//		log.info(jsonStr);
//
//		this.mockMvc.perform(
//				MockMvcRequestBuilders.post("/uploadrest/getCollection").contentType(MediaType.APPLICATION_JSON).content(jsonStr))
//				.andExpect(MockMvcResultMatchers.status().is(200));
//	}
}
