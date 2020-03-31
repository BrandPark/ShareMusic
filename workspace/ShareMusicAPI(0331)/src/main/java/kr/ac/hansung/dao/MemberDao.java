package kr.ac.hansung.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.ac.hansung.model.Member;

@Repository
public class MemberDao {
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	public List<Member> getMember(){
		String stmt = "select * from tb_user";
		
		return jdbcTemplate.query(stmt, new RowMapper<Member>() {

			@Override
			public Member mapRow(ResultSet rs, int rowNum) throws SQLException {
				Member member = new Member();
				member.setUserId(rs.getString("user_id"));
				member.setUserPw(rs.getString("user_password"));
				member.setUserEmail(rs.getString("user_email"));
				
				return member;
			}
		});
	}
	
	public boolean insertMember(Member member) {
		String userId = member.getUserId();
		String userPw = "{noop}" + member.getUserPw();
		String userName = member.getUserEmail();
		String userEmail = member.getUserEmail();
		System.out.println(member.toString());
		String userBirthDate = Integer.toString(member.getUserBirthYear()) + "-" +Integer.toString(member.getUserBirthMonth()) + "-" +Integer.toString(member.getUserBirthDay());
		
		String userStmt = "insert into tb_user(user_id,user_password,user_name,user_email,user_birth_date) values(?,?,?,?,?)";
		String authoritieStmt = "insert into tb_authorities(user_id) values(?)";
		
		return (jdbcTemplate.update(userStmt, new Object[] {userId,userPw,userName,userEmail,userBirthDate}) ==1) && 
		( jdbcTemplate.update(authoritieStmt,new Object[] {userId})==1 );
	}
	
	public boolean updateMember(Member member) {
			
			String userId = member.getUserId();
			String userPw = "{noop}" + member.getUserPw();
			String userEmail = member.getUserEmail();
			
			String sqlStatement = "update offers set user_pw=?, user_email=? where user_id=?";
			
			return (jdbcTemplate.update(sqlStatement, new Object[] {userPw,userEmail,userId}) == 1); //update된 레코드갯수가 리턴됨
		}
	
	public int checkId(String userId) {
		String stmt = "select count(*) from tb_user where user_id = '" + userId + "'";
		return jdbcTemplate.queryForObject(stmt, Integer.class);
	}
	

	
	
}
