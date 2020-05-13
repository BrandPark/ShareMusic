package kr.ac.hansung.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.ac.hansung.model.MemberVO;

@Repository
public class MemberDao {
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	//C
	public Boolean insertMember(MemberVO member) {
		String userId = member.getUserId();
		String userPw = "{noop}" + member.getUserPw();
		String userName = member.getUserName();
		String userEmail = member.getUserEmail();
		String userBirthDate = Integer.toString(member.getUserBirthYear()) + "-" +Integer.toString(member.getUserBirthMonth()) + "-" +Integer.toString(member.getUserBirthDay());
		
		String userStmt = "insert into tb_user(user_id,user_password,user_name,user_email,user_birth_date) values(?,?,?,?,?)";
		String authoritieStmt = "insert into tb_authorities(user_id) values(?)";
		
		return (jdbcTemplate.update(userStmt, new Object[] {userId,userPw,userName,userEmail,userBirthDate}) ==1) && 
		( jdbcTemplate.update(authoritieStmt,new Object[] {userId})==1 );
	}
	
	//R
	public MemberVO getMember(String userId){
		String stmt = "select * from tb_user where user_id = ?";
		
		return jdbcTemplate.queryForObject(stmt,new Object[] {userId} ,new RowMapper<MemberVO>() {

			@Override
			public MemberVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				MemberVO member = new MemberVO();
				member.setUserId(rs.getString("user_id"));
				member.setUserPw(rs.getString("user_password"));
				member.setUserName(rs.getString("user_name"));
				member.setUserEmail(rs.getString("user_email"));
				
				String userBirthDate = rs.getString("user_birth_date");
				String[] birthArray = userBirthDate.split("-");
			
				member.setUserBirthYear(Integer.parseInt(birthArray[0]));
				member.setUserBirthMonth(Integer.parseInt(birthArray[1]));
				member.setUserBirthDay(Integer.parseInt(birthArray[2]));
				
				return member;
			}
		});
	}
	

	//U
	public boolean updateMember(MemberVO member) {
		String userId = member.getUserId();
		String userPw = "{noop}" + member.getUserPw();
		String userName = member.getUserName();
		String userEmail = member.getUserEmail();
		String userBirthDate = Integer.toString(member.getUserBirthYear()) + "-" +Integer.toString(member.getUserBirthMonth()) + "-" +Integer.toString(member.getUserBirthDay());
		
		String sqlStatement = "update tb_user set user_password=?, user_name=?, user_email=?, user_birth_date=? where user_id=?";
			
		return (jdbcTemplate.update(sqlStatement, new Object[] {userPw, userName,userEmail, userBirthDate,userId}) == 1); //update된 레코드갯수가 리턴됨
	}
	
	
	//D
	public boolean deleteMember(String userId) {
		String stmt = "delete from tb_user where user_id = ?";
		return (jdbcTemplate.update(stmt, new Object[] {userId}) == 1); //update된 레코드갯수가 리턴됨
	}

	//사용자 아이디 중복 검사
	public int checkUserId(String userId) {
		String stmt = "select count(*) from tb_user where user_id = '" + userId + "'";
		return jdbcTemplate.queryForObject(stmt, Integer.class);
	}

	//사용자 아이디와 패스워드에 맞는 객체 조회
	public MemberVO getAuthentication(MemberVO memberVO) {
		String stmt = "select * from tb_user where user_id = ?";
		
		return jdbcTemplate.queryForObject(stmt,new Object[] {memberVO.getUserId()} ,new RowMapper<MemberVO>() {

			@Override
			public MemberVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				MemberVO member = new MemberVO();
				member.setUserId(rs.getString("user_id"));
				member.setUserPw(rs.getString("user_password"));
				member.setUserName(rs.getString("user_name"));
				member.setUserEmail(rs.getString("user_email"));
				
				String userBirthDate = rs.getString("user_birth_date");
				String[] birthArray = userBirthDate.split("-");
			
				member.setUserBirthYear(Integer.parseInt(birthArray[0]));
				member.setUserBirthMonth(Integer.parseInt(birthArray[1]));
				member.setUserBirthDay(Integer.parseInt(birthArray[2]));
				
				return member;
			}
		});
	}

	// 해당 유저에 일치하는 권한들 조회
	public List<String> getAuthorities(MemberVO memberVO) {
		String stmt = "SELECT a.authority FROM tb_user u, tb_authorities a where u.user_id = a.user_id and u.user_id = '"
							+ memberVO.getUserId() + "'";

		return jdbcTemplate.query(stmt, new RowMapper<String>() {

								@Override
								public String mapRow(ResultSet rs, int rowNum) throws SQLException {
									
									String auth = rs.getString("a.authority");
									return auth;
								}
							});
	}


	

	
	
}
