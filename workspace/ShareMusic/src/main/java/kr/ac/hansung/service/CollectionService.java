package kr.ac.hansung.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import kr.ac.hansung.dao.CollectionDao;
import kr.ac.hansung.model.Collection;
import kr.ac.hansung.model.Criteria;

@Service
public class CollectionService {
	@Autowired
	private CollectionDao collectionDao;

	public List<Collection> getCollection(Criteria cri) {
		return collectionDao.getCollection(cri);
	}
	
	public List<Collection> getMusic(Criteria cri) {
		return collectionDao.getMusicList(cri);
	}

	public void insertMusic(Collection collection) {
//		collectionDao.insertMusic(collection);
	}

	public void insertCollection(Collection collection) {
		
		collectionDao.insertCollection(collection);
		
	}

}
