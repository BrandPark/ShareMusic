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
public class CollectionLikeDao {
	
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	public int insertColletionLike(LikeVO like) {
		int cno = like.getCno();
		String fromUserId = like.getFromUserId();
		String stmt = "insert into tb_collection_like(cno,from_user_id) values(?,?)";
		
		return jdbcTemplate.update(stmt, new Object[] {cno,fromUserId}); //update된 레코드갯수가 리턴됨
	}
	
	public List<LikeVO> getColletionLikes(int cno){
		String stmt = "select from_user_id from tb_collection_like where cno = '" + cno + "'";
		
		return jdbcTemplate.query(stmt, new RowMapper<LikeVO>() {

			@Override
			public LikeVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				LikeVO like = new LikeVO();
				
				like.setCno(cno);
				String likeUser = rs.getString("from_user_id");
				like.setFromUserId(likeUser);
				
				
				return like;
			}
		});
	}
	
	public int getColletionLikeCount(int cno){
		String stmt = "select count(from_user_id) from tb_collection_like where cno = '" + cno + "'";
		
		return jdbcTemplate.queryForObject(stmt,int.class);

	}

	public int deleteColletionLike(int cno, String fromUserId) {
			String stmt = "delete from tb_collection_like where cno = ? and from_user_id = ?";
			return jdbcTemplate.update(stmt, new Object[] {cno,fromUserId}); //update된 레코드갯수가 리턴됨
	}
	
	

}
