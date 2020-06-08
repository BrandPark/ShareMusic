package kr.ac.hansung.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.ac.hansung.model.CollectionVO;
import kr.ac.hansung.model.Criteria;
import kr.ac.hansung.model.MemberVO;

@Repository
public class SearchDao {

	private JdbcTemplate jdbcTemplate;

	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	// tag로 컬렉션들 검색
	public List<CollectionVO> searchCollectionWithTag(String content, Criteria cri) {
		String stmt = "select c.cno cno, c.user_id user_id, c.col_name col_name, c.reg_date reg_date, c.mod_date mod_date"
				+ " from tb_collection_tag t, tb_collection c where "
				+ "t.cno = c.cno and t.tag like '%" + content + "%' order by c.reg_date desc"
				+ " limit "+cri.getPageStart() + ", " + cri.getAmount();
		
		return jdbcTemplate.query(stmt, new RowMapper<CollectionVO>() {

			@Override
			public CollectionVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				CollectionVO collection = new CollectionVO();
				collection.setCno(rs.getInt("cno"));
				collection.setUserId(rs.getString("user_id"));
				collection.setCollectionName(rs.getString("col_name"));
				collection.setRegTime(rs.getTimestamp("reg_date"));
				collection.setModTime(rs.getTimestamp("mod_date"));
				
				return collection;
	
			}
		});
	}
	
	// 컬렉션이름으로 컬렉션들 검색
	public List<CollectionVO> searchCollectionWithName(String content, Criteria cri) {
		String stmt = "select * from tb_collection where col_name like '%" 
				+ content + "%' order by reg_date desc" 
				+ " limit "+cri.getPageStart() + ", " + cri.getAmount();
		return jdbcTemplate.query(stmt, new RowMapper<CollectionVO>() {

			@Override
			public CollectionVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				CollectionVO collection = new CollectionVO();
				collection.setCno(rs.getInt("cno"));
				collection.setUserId(rs.getString("user_id"));
				collection.setCollectionName(rs.getString("col_name"));
				collection.setRegTime(rs.getTimestamp("reg_date"));
				collection.setModTime(rs.getTimestamp("mod_date"));
				
				return collection;
			}
		});
	}

	// 곡 제목으로 컬렉션 검색
	public List<CollectionVO> searchCollectionWithMusicName(String content, Criteria cri) {
		String stmt = "select c.cno cno, c.user_id user_id, c.col_name col_name, c.reg_date reg_date, c.mod_date mod_date"
				+ " from tb_collection_song s, tb_collection c where "
				+ "s.cno = c.cno and s.music_name like '%" + content 
				+ "%' order by c.reg_date desc"
				+ " limit "+cri.getPageStart() + ", " + cri.getAmount();
		
		return jdbcTemplate.query(stmt, new RowMapper<CollectionVO>() {

			@Override
			public CollectionVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				CollectionVO collection = new CollectionVO();
				collection.setCno(rs.getInt("cno"));
				collection.setUserId(rs.getString("user_id"));
				collection.setCollectionName(rs.getString("col_name"));
				collection.setRegTime(rs.getTimestamp("reg_date"));
				collection.setModTime(rs.getTimestamp("mod_date"));
				
				return collection;
			}
		});
	}
	
	// 유저 아이디로 유저 검색
	public List<MemberVO> searchMemberWithUserId(String content, Criteria cri) {
		String stmt = "select * from tb_user where user_id like '%" + content + "%'"
				+ " limit "+cri.getPageStart() + ", " + cri.getAmount();
	
		return jdbcTemplate.query(stmt, new RowMapper<MemberVO>() {

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

}
