package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.CollectionDao;
import kr.ac.hansung.model.CollectionVO;

@Service
public class CollectionService {
	@Autowired
	private CollectionDao collectionDao;

	public int insertCollection(CollectionVO collection) {
		return collectionDao.insertCollection(collection);
	}
	
	public List<CollectionVO> getCollections(String userId) {
		return collectionDao.getCollections(userId);
	}
	
	public int updateCollection(CollectionVO collection) {
		return collectionDao.updateCollection(collection);
	}
	
	public int deleteCollection(int cno) {
		return collectionDao.deleteCollection(cno);
	}

	public List<CollectionVO> getRecentCollectionsWithFollower(List<String> followers) {
		return collectionDao.getRecentCollectionsWithFollower(followers);
	}
	





}
