package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.CollectionTagDao;
import kr.ac.hansung.model.TagVO;

@Service
public class CollectionTagService {
	@Autowired
	private CollectionTagDao tagDao;

	public int insertCollectionTag(TagVO tag) {
		return tagDao.insertCollectionTag(tag);
	}

	public TagVO getCollectionTag(int tno) {
		return tagDao.getCollectionTag(tno);
	}
	
	public List<TagVO> getCollectionTags(int cno) {
		return tagDao.getCollectionTags(cno);
	}

	public int updateCollectionTag(TagVO tag) {
		return tagDao.updateCollectionTag(tag);
	}

	public int deleteCollectionTag(int tno) {
		return tagDao.deleteCollectionTag(tno);
	}

	
}
