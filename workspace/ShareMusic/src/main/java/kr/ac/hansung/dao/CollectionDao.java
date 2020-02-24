package kr.ac.hansung.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.ac.hansung.model.Collection;

@Repository
public class CollectionDao {
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	public List<Collection> getCollection(){
		String stmt = "select * from tb_collection_1";
		
		return jdbcTemplate.query(stmt, new RowMapper<Collection>() {

			@Override
			public Collection mapRow(ResultSet rs, int rowNum) throws SQLException {
				Collection collection = new Collection();
				collection.setMusicName(rs.getString("music_name"));
				collection.setMusicNo(rs.getInt("music_no"));
				collection.setSinger(rs.getString("singer"));
				
				return collection;
			}
		});
	}
	
	public void insertMusic(Collection collection) {
		String userId = "userid";
		String musicName = collection.getMusicName();
		String singer = collection.getSinger();
		
		String stmt = "insert into tb_collection_1(user_id,music_name, singer) values(?,?,?)";
		
		jdbcTemplate.update(stmt, new Object[] {userId,musicName,singer});
	}
	
	
}
