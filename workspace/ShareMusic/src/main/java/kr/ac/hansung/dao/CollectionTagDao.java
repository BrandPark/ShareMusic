package kr.ac.hansung.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import kr.ac.hansung.model.TagVO;

@Repository
public class CollectionTagDao {

	private JdbcTemplate jdbcTemplate;

	@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	// C
	public int insertCollectionTag(TagVO tag) {
		String stmt = "insert into tb_collection_tag(tag,cno) values(?,?)";

		return jdbcTemplate.update(stmt, new Object[] { tag.getTag(), tag.getCno() });
	}

	// R
	public TagVO getCollectionTag(int tno) {
		String stmt = "select * from tb_collection_tag where tno=?";
		return jdbcTemplate.queryForObject(stmt, new Object[] { tno }, new RowMapper<TagVO>() {

			@Override
			public TagVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				TagVO tag = new TagVO();
				
				tag.setTno(rs.getInt("tno"));
				tag.setCno(rs.getInt("cno"));
				tag.setTag(rs.getString("tag"));

				return tag;
			}

		});
	}

	public List<TagVO> getCollectionTags(int cno) {
		String stmt = "select * from tb_collection_tag where cno = '" + cno + "'";

		return jdbcTemplate.query(stmt, new RowMapper<TagVO>() {

			@Override
			public TagVO mapRow(ResultSet rs, int rowNum) throws SQLException {
				TagVO tag = new TagVO();
				
				tag.setTno(rs.getInt("tno"));
				tag.setCno(rs.getInt("cno"));
				tag.setTag(rs.getString("tag"));
				
				return tag;
			}
		});
	}

	// U
	public int updateCollectionTag(TagVO tag) {
		String stmt = "update tb_collection_tag set tag=? where tno=?";

		return jdbcTemplate.update(stmt, new Object[] { tag.getTag(), tag.getTno() });
	}

	// D
	public int deleteCollectionTag(int tno) {
		String stmt = "delete from tb_collection_tag where tno=?";

		return jdbcTemplate.update(stmt, new Object[] { tno });
	}

}
