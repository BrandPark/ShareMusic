package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.CollectionDao;
import kr.ac.hansung.model.CollectionVO;
import kr.ac.hansung.model.Song;

@Service
public class CollectionService {
	@Autowired
	private CollectionDao collectionDao;

	public int insertCollection(CollectionVO collection) {
		return collectionDao.insertCollection(collection);
	}
	
	public List<CollectionVO> getCollectionAll(String userId) {
		return collectionDao.getCollectionAll(userId);
	}
	
	public List<String> getCollectionName(String userId) {
		return collectionDao.getCollectionName(userId);
	}
	
	public List<Song> getCollectionSong(String userId,String collectionName) {
		return collectionDao.getCollectionSong(userId,collectionName);
	}
	
	public int removeCollection(String userId,String collectionName) {
		return collectionDao.removeCollection(userId, collectionName);
	}



}
