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

@Repository
public class CollectionDao {
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	//컬렉션 추가
	public int insertCollection(CollectionVO collection) {
		
		String userId = collection.getUserId();
		String collectionName = collection.getCollectionName();
		String stmt = "insert into tb_collection(user_id,col_name) values(?,?)";
		
		return jdbcTemplate.update(stmt, new Object[] {userId,collectionName}); //update된 레코드갯수가 리턴됨
	}
	
	//사용자id로 모든 컬렉션 정보 조회 , 최근에 등록된 순으로 정렬
	public List<CollectionVO> getCollections(String userId){
		
		String stmt = "select * from tb_collection where user_id = '" + userId + "' order by reg_date desc";
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
	
	//컬렉션 이름 변경
	public int updateCollection(CollectionVO collection) {
		
		String stmt = "update tb_collection set col_name = ? where cno = ?" ;
		return jdbcTemplate.update(stmt, new Object[] {collection.getCollectionName(),collection.getCno()}); //update된 레코드갯수가 리턴됨
	}
	
	//컬렉션번호로 컬렉션 삭제
	public int deleteCollection(int cno) {
	
		String stmt = "delete from tb_collection where cno = ?";
		return jdbcTemplate.update(stmt, new Object[] {cno}); //update된 레코드갯수가 리턴됨
	}

	//팔로워들의 최근 업데이트 컬력센 리스트 조회
	public List<CollectionVO> getRecentCollectionsWithFollower(List<String> followers) {
		
		String stmt = "select * from tb_collection where" ;
		int cnt = 0;
		
		for(String user:followers) {
			cnt+=1;
			stmt += " user_id = '" + user + "'";
			if(cnt != followers.size()) {
				stmt += " or";
			}
		}
		System.out.println(stmt);
		stmt += " order by reg_date desc";
		
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
		
}
