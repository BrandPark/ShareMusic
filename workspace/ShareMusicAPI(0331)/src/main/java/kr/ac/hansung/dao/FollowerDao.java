package kr.ac.hansung.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.ac.hansung.model.FollowerVO;

@Repository
public class FollowerDao {
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	public int insert(FollowerVO followerVO) {
		String fromUserId = followerVO.getFromUserId();
		String toUserId = followerVO.getToUserId();
		
		String stmt = "insert into tb_follow(from_user_id,to_user_id) values(?,?)";
		
		return jdbcTemplate.update(stmt,new Object[] {fromUserId,toUserId});
	}
	
	public List<String> getFollowing(String userId){
	
		String stmt = "select from_user_id from_user_id from tb_follow where to_user_id = '" + userId + "'";
		
		return jdbcTemplate.query(stmt,new RowMapper<String>() {

			@Override
			public String mapRow(ResultSet rs, int rowNum) throws SQLException {
				String follower = rs.getString("from_user_id");
				return follower;
			}
		});
	}
	
	public List<String> getFollower(String userId){
		
		String stmt = "select to_user_id from tb_follow where from_user_id = '" + userId + "'";
		
		return jdbcTemplate.query(stmt,new RowMapper<String>() {

			@Override
			public String mapRow(ResultSet rs, int rowNum) throws SQLException {
				String follower = rs.getString("to_user_id");
				return follower;
			}
		});
	}
	
	public int remove(String fromUserId,String toUserId) {
		String stmt = "delete from tb_follow where from_user_id = ? and to_user_id =?";
		return jdbcTemplate.update(stmt, new Object[] {fromUserId,toUserId}); //update된 레코드갯수가 리턴됨
	}
	
	
	
}
