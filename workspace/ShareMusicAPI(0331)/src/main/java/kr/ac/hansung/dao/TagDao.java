package kr.ac.hansung.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.ac.hansung.model.TagDTO;

@Repository
public class TagDao {
	
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

//insert
	public int insertCollectionTag(TagDTO collectionTagDTO) {
		String tag = collectionTagDTO.getTag();
		int cno = collectionTagDTO.getCno();
		String stmt = "insert into tb_collection_tag(tag,cno) values(?,?)";

		return jdbcTemplate.update(stmt, new Object[] { tag, cno });
	}

//select
//특정 컬렉션의 태그를 조회
	public TagDTO selectCollectionTag(int cno, int tno) {
		String stmt = "select * from tb_collection_tag where tno=? and cno=?";
		return jdbcTemplate.queryForObject(stmt, new Object[] { tno, cno }, new RowMapper<TagDTO>() {

			@Override
			public TagDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
				TagDTO collectionTagDTO = new TagDTO();
				collectionTagDTO.setTag(rs.getString("tag"));
				collectionTagDTO.setCno(rs.getInt("cno"));
				collectionTagDTO.setTno(rs.getInt("tno"));

				return collectionTagDTO;
			}

		});
	}

//update
	public int updateCollectionTag(TagDTO collectionTagDTO) {
		String tag = collectionTagDTO.getTag();
		int tno = collectionTagDTO.getTno();
		int cno = collectionTagDTO.getCno();
		String stmt = "update tb_collection_tag set tag=? where tno=? and cno=?";

		return jdbcTemplate.update(stmt, new Object[] { tag, tno, cno });
	}

//delete
	public int deleteCollectionTag(int tno, int cno) {
		String stmt = "delete from tb_collection_tag where tno=? and cno=?";

		return jdbcTemplate.update(stmt, new Object[] { tno, cno });
	}
}
