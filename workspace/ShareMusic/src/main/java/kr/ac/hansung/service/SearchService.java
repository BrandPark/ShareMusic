package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.SearchDao;
import kr.ac.hansung.model.CollectionVO;
import kr.ac.hansung.model.MemberVO;

@Service
public class SearchService {

	@Autowired
	private SearchDao searchDao;
	
	public List<CollectionVO> searchCollectionWithTag(String content) {
		return searchDao.searchCollectionWithTag(content);
	}

	public List<CollectionVO> searchCollectionWithName(String content) {
		return searchDao.searchCollectionWithName(content);
	}

	public List<CollectionVO> searchCollectionWithMusicName(String content) {
		return searchDao.searchCollectionWithMusicName(content);
	}

	public List<MemberVO> searchMemberWithUserId(String content) {
		return searchDao.searchMemberWithUserId(content);
	}
}
