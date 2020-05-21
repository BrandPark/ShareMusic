package kr.ac.hansung.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.ac.hansung.model.SongVO;

@Repository
public class CollectionSongDao {
	
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	public int insertCollectionSong(SongVO song) {
		int cno = song.getCno();
		String musicName = song.getMusicName();
		String singer = song.getSinger();
		String videoId = song.getVideoId();
		String stmt = "insert into tb_collection_song(cno,music_name,singer,video_id) values(?,?,?,?)";
		
		return jdbcTemplate.update(stmt, new Object[] {cno,musicName,singer,videoId}); //update된 레코드갯수가 리턴됨
	}
	
	//사용자id와 컬렉션명으로 곡리스트 조회
	public List<SongVO> getCollectionSongs(int cno){
		String stmt = "select * from tb_collection_song where cno = '" + cno + "'";
		
		return jdbcTemplate.query(stmt, new RowMapper<SongVO>() {

			@Override
			public SongVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				SongVO song = new SongVO();
				song.setSno(rs.getInt("sno"));
				song.setCno(rs.getInt("cno"));
				song.setMusicName(rs.getString("music_name"));
				song.setSinger(rs.getString("singer"));
				song.setVideoId(rs.getString("video_id"));
				
				return song;
			}
		});
	}
	
	//특정 컬렉션 조회
	public SongVO getCollectionSong(int sno) {
		String stmt = "select * from tb_collection_song where sno = ?";
		
		return jdbcTemplate.queryForObject(stmt, new Object[] {sno}, new RowMapper<SongVO>() {

			@Override
			public SongVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				SongVO song = new SongVO();
				song.setSno(rs.getInt("sno"));
				song.setCno(rs.getInt("cno"));
				song.setMusicName(rs.getString("music_name"));
				song.setSinger(rs.getString("singer"));
				song.setVideoId(rs.getString("video_id"));
				
				return song;
			}
			
		});
	}
	
	//컬렉션 이름 변경
	public int updateCollectionSong(SongVO song) {
		String stmt = "update tb_collection_song set music_name =? , singer = ? where sno = ?" ;
		return jdbcTemplate.update(stmt, new Object[] {song.getMusicName(),song.getSinger(),song.getSno()}); //update된 레코드갯수가 리턴됨
	}
	
	//앨범 삭제
	public int deleteCollectionSong(int sno) {
		String stmt = "delete from tb_collection_song where sno = ?";
		return jdbcTemplate.update(stmt, new Object[] {sno}); //update된 레코드갯수가 리턴됨
	}

}
