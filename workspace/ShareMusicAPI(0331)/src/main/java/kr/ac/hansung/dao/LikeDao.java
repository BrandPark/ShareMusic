package kr.ac.hansung.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.ac.hansung.model.LikeVO;

@Repository
public class LikeDao {
	
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	public int insertLike(LikeVO like) {
		int cno = like.getCno();
		String fromUserId = like.getFromUserId();
		String stmt = "insert into tb_collection_like(cno,from_user_id) values(?,?)";
		
		return jdbcTemplate.update(stmt, new Object[] {cno,fromUserId}); //update된 레코드갯수가 리턴됨
	}
	
	public List<String> getLikes(int cno){
		String stmt = "select from_user_id from tb_collection_like where cno = '" + cno + "'";
		
		return jdbcTemplate.query(stmt, new RowMapper<String>() {

			@Override
			public String mapRow(ResultSet rs, int rowNum) throws SQLException {
				String like = rs.getString("from_user_id");
				
				return like;
			}
		});
	}
	
	public int getLikeCount(int cno){
		String stmt = "select count(from_user_id) from tb_collection_like where cno = '" + cno + "'";
		
		return jdbcTemplate.queryForObject(stmt,int.class);

	}

	public int removeLike(int cno, String fromUserId) {
			String stmt = "delete from tb_collection_like where cno = ? and from_user_id = ?";
			return jdbcTemplate.update(stmt, new Object[] {cno,fromUserId}); //update된 레코드갯수가 리턴됨
	}
	
	

}
