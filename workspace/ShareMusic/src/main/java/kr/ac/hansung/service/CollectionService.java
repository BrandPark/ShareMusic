package kr.ac.hansung.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import kr.ac.hansung.dao.CollectionDao;
import kr.ac.hansung.model.Collection;

@Service
public class CollectionService {
	@Autowired
	private CollectionDao collectionDao;

	public List<Collection> getCollection() {
		return collectionDao.getCollection();
	}

	public void insertMusic(Collection collection) {
		collectionDao.insertMusic(collection);
	}

	public void insertCollection(List<String> collectionList) {
		Iterator<String> it = collectionList.iterator();

		while (it.hasNext()) {
			String musicName = it.next();
			String singer = it.next();
			String userId = "test";
			Collection collection = new Collection();
			collection.setMusicName(musicName);
			collection.setSinger(singer);
			collection.setUserId(userId);
			

			collectionDao.insertMusic(collection);
		}
	}

}
