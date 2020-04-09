package kr.ac.hansung.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.TagDao;
import kr.ac.hansung.model.TagDTO;

@Service
public class TagService {
	@Autowired
	private TagDao tagDao;
	// insert
	public int insertCollectionTag(TagDTO collectionTagDTO) {
		return tagDao.insertCollectionTag(collectionTagDTO);
	}

	// select
	public TagDTO selectCollectionTag(int cno, int tno) {
		return tagDao.selectCollectionTag(cno, tno);
	}

	// update
	public int updateCollectionTag(TagDTO collectionTagDTO) {
		return tagDao.updateCollectionTag(collectionTagDTO);
	}

	// delete
	public int deleteCollectionTag(int tno, int cno) {
		return tagDao.deleteCollectionTag(tno, cno);
	}
}
