package kr.ac.hansung.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.ac.hansung.model.ReplyDTO;

@Repository
public class ReplyDao {
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	//insert
	public int insertCollectionReply(ReplyDTO collectionReplyDTO) {
		int cno = collectionReplyDTO.getCno();
		String fromUserId = collectionReplyDTO.getFromUserId();
		String content = collectionReplyDTO.getContent();
		
		String stmt = "insert into tb_collection_reply(cno, from_user_id, content) values(?,?,?)";
		
		return jdbcTemplate.update(stmt, new Object[] {cno, fromUserId,content}); 
	}
	//select
	//특정 댓글을 조희
	public ReplyDTO selectCollectionReply(int rno, int cno) {
		String stmt = "select * from tb_collection_reply where rno = ? and cno = ?";
		
		return jdbcTemplate.queryForObject(stmt, new Object[] {rno,cno}, new RowMapper<ReplyDTO>() {

			@Override
			public ReplyDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
				ReplyDTO collectionReplyDTO= new ReplyDTO();
				collectionReplyDTO.setContent(rs.getString("content"));
				collectionReplyDTO.setCno(rs.getInt("cno"));
				collectionReplyDTO.setRno(rs.getInt("rno"));
				collectionReplyDTO.setFromUserId(rs.getString("from_user_id"));
					
				return collectionReplyDTO;
			}
			
		});
	}

	
	//update
	public int updateCollectionReply(ReplyDTO collectionReplyDTO) {
		
		String content = collectionReplyDTO.getContent();
		int rno = collectionReplyDTO.getRno();
		int cno = collectionReplyDTO.getCno();
		String stmt = "update tb_collection_reply set content='" + content + "' where rno='" + rno + "' and cno='" + cno + "'";
		
		return  jdbcTemplate.update(stmt);
	}
	//delete
	public int deleteCollectionReply(int rno, int cno) {
		
		String stmt = "delete from tb_collection_reply where rno=? and cno=?";
		
		return jdbcTemplate.update(stmt,new Object [] {rno, cno});
	}
	

}
