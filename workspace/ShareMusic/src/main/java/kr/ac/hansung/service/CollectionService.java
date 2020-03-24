package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.CollectionDao;
import kr.ac.hansung.model.Collection;
import kr.ac.hansung.model.Criteria;
import kr.ac.hansung.model.Song;

@Service
public class CollectionService {
	@Autowired
	private CollectionDao collectionDao;

	public List<Collection> getCollectionAll(Criteria cri) {
		return collectionDao.getCollectionAll(cri);
	}
	
	public List<String> getCollectionName(Criteria cri) {
		return collectionDao.getCollectionName(cri);
	}
	
	public List<Song> getMusic(Criteria cri) {
		return collectionDao.getCollectionSong(cri);
	}

	public void insertMusic(Collection collection) {
//		collectionDao.insertMusic(collection);
	}

	public void insertCollection(Collection collection) {
		collectionDao.insertCollection(collection);
	}

}
