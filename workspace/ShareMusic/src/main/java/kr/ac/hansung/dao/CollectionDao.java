package kr.ac.hansung.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.ac.hansung.model.Collection;
import kr.ac.hansung.model.Criteria;
import kr.ac.hansung.model.Song;

@Repository
public class CollectionDao {
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	public List<Collection> getCollection(Criteria cri){
		String stmt = "select * from tb_collection where user_id = '" + cri.getUserId() + "'";
		return jdbcTemplate.query(stmt, new RowMapper<Collection>() {

			@Override
			public Collection mapRow(ResultSet rs, int rowNum) throws SQLException {
				Collection collection = new Collection();
				collection.setUserId(rs.getString("user_id"));
				collection.setCollectionName(rs.getString("col_name"));
				
				List<Song> song = new ArrayList<Song>();
				song.add(new Song(rs.getString("music_name"),rs.getString("singer")));
				
				collection.setSongList(song);
				return collection;
			}
		});
		
	}
	
	public List<Collection> getMusicList(Criteria cri){
		String stmt = "select * from tb_collection where user_id = '" + cri.getUserId() + "'";
		
		return jdbcTemplate.query(stmt, new RowMapper<Collection>() {

			@Override
			public Collection mapRow(ResultSet rs, int rowNum) throws SQLException {
				Collection collection = new Collection();
				collection.setUserId(rs.getString("user_id"));
				collection.setCollectionName(rs.getString("col_name"));
//				collection.setSong(n);
				
				return collection;
			}
		});
	}
	
	public void insertCollection(Collection collection) {
		String userId = collection.getUserId();
		String collectionName = collection.getCollectionName();
		
		for(Song song:collection.getSongList()) {
			String musicName = song.getMusicName();
			String singer = song.getSinger();
			
			String stmt = "insert into tb_collection(user_id,col_name,music_name, singer) values(?,?,?,?)";
			jdbcTemplate.update(stmt, new Object[] {userId,collectionName,musicName,singer});
		}
		
	}
	
}
