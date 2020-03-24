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
import kr.ac.hansung.model.Song;

@Repository
public class CollectionDao {
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	public int insertCollection(CollectionVO collection) {
		String userId = collection.getUserId();
		String collectionName = collection.getCollectionName();
		String musicName = collection.getSong().getMusicName();
		String singer = collection.getSong().getSinger();
		
		String stmt = "insert into tb_collection(user_id,col_name,music_name, singer) values(?,?,?,?)";
		
		return jdbcTemplate.update(stmt, new Object[] {userId,collectionName,musicName,singer}); //update된 레코드갯수가 리턴됨
	}
	
	//사용자id로 모든 컬렉션 정보 조회
	public List<CollectionVO> getCollectionAll(String userId){
		String stmt = "select * from tb_collection where user_id = '" + userId + "'";
		return jdbcTemplate.query(stmt, new RowMapper<CollectionVO>() {

			@Override
			public CollectionVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				CollectionVO collection = new CollectionVO();
				collection.setUserId(rs.getString("user_id"));
				collection.setCollectionName(rs.getString("col_name"));
				Song song = new Song(rs.getString("music_name"),rs.getString("singer"));
				collection.setSong(song);
				
				collection.setRegTime(rs.getTimestamp("reg_date"));
				collection.setModTime(rs.getTimestamp("mod_date"));
				
				System.out.println("*********************");
				System.out.println(collection.getRegTime());
				System.out.println(collection.getModTime());
				return collection;
			}
		});
	}
	
	//사용자id로 모든 컬렉션명 조회
	public List<String> getCollectionName(String userId){
		String stmt = "select distinct col_name from tb_collection where user_id = '" + userId + "'";
		return jdbcTemplate.query(stmt, new RowMapper<String>() {

			@Override
			public String mapRow(ResultSet rs, int rowNum) throws SQLException {
				String collectionName = rs.getString("col_name");
				return collectionName;
			}
		});
	}
	
	//사용자id와 컬렉션명으로 곡리스트 조회
	public List<Song> getCollectionSong(String userId,String collectionName){
		String stmt = "select music_name,singer from tb_collection where user_id = '" + userId + "' and col_name = '"
				+ collectionName + "'";
		
		return jdbcTemplate.query(stmt, new RowMapper<Song>() {

			@Override
			public Song mapRow(ResultSet rs, int rowNum) throws SQLException {
				String musicName = rs.getString("music_name");
				String singer = rs.getString("singer");
				
				return new Song(musicName,singer);
			}
		});
	}
	
	
	//사용자id와 컬렉션명으로 컬렉션 삭제
	public int removeCollection(String userId,String collectionName) {
		String stmt = "delete from tb_collection where user_id = ? and col_name =?";
		return jdbcTemplate.update(stmt, new Object[] {userId,collectionName}); //update된 레코드갯수가 리턴됨
	}
	

		
}
