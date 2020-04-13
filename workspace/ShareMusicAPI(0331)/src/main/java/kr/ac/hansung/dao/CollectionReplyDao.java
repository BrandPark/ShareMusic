package kr.ac.hansung.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.ac.hansung.model.ReplyVO;
import kr.ac.hansung.model.SongVO;

@Repository
public class CollectionReplyDao {
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	//C
	public int insertCollectionReply(ReplyVO reply) {
		int cno = reply.getCno();
		String fromUserId = reply.getFromUserId();
		String content = reply.getContent();
		
		String stmt = "insert into tb_collection_reply(cno, from_user_id, content) values(?,?,?)";
		
		return jdbcTemplate.update(stmt, new Object[] {cno, fromUserId,content}); 
	}
	
	//R
	public ReplyVO getCollectionReply(int rno) {
		String stmt = "select * from tb_collection_reply where rno = ?";
		
		return jdbcTemplate.queryForObject(stmt, new Object[] {rno}, new RowMapper<ReplyVO>() {

			@Override
			public ReplyVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				ReplyVO reply= new ReplyVO();
				reply.setRno(rs.getInt("rno"));
				reply.setCno(rs.getInt("cno"));
				reply.setFromUserId(rs.getString("from_user_id"));
				reply.setContent(rs.getString("content"));
					
				return reply;
			}
			
		});
	}
	
	public List<ReplyVO> getCollectionReplys(int cno) {
	String stmt = "select * from tb_collection_reply where cno = '" + cno + "'";
		
		return jdbcTemplate.query(stmt, new RowMapper<ReplyVO>() {

			@Override
			public ReplyVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				ReplyVO reply = new ReplyVO();
				reply.setRno(rs.getInt("rno"));
				reply.setCno(rs.getInt("cno"));
				reply.setFromUserId(rs.getString("from_user_id"));
				reply.setContent(rs.getString("content"));
				
				return reply;
			}
		});
	}
	
	//U
	public int updateCollectionReply(ReplyVO reply) {
		String stmt = "update tb_collection_reply set content=? where rno='";
		
		return jdbcTemplate.update(stmt, new Object[] {reply.getContent(),reply.getRno()}); //update된 레코드갯수가 리턴됨
	}
	
	//D
	public int deleteCollectionReply(int rno) {
		
		String stmt = "delete from tb_collection_reply where rno=?";
		
		return jdbcTemplate.update(stmt,new Object [] {rno});
	}


	

}
