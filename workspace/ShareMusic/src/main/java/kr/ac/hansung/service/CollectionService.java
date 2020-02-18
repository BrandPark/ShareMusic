package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.CollectionDao;
import kr.ac.hansung.model.Collection;

@Service
public class CollectionService {
	@Autowired
	private CollectionDao collectionDao;
	
	public List<Collection> getCollection(){
		return collectionDao.getCollection();
	}
	
	public void setMusic(Collection collection) {
		collectionDao.setMusic(collection);
	}
}
