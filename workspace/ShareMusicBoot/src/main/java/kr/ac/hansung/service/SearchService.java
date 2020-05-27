package kr.ac.hansung.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.controller.CollectionController;
import kr.ac.hansung.dao.SearchDao;
import kr.ac.hansung.exception.CollectionException;
import kr.ac.hansung.model.CollectionDTO;
import kr.ac.hansung.model.CollectionVO;
import kr.ac.hansung.model.Criteria;
import kr.ac.hansung.model.MemberVO;

@Service
public class SearchService {

	@Autowired
	private SearchDao searchDao;
	@Autowired
	private CollectionController collectionController;

	public List<CollectionDTO> searchCollectionWithTag(String content, Criteria cri) throws CollectionException {
		List<CollectionVO> collections = searchDao.searchCollectionWithTag(content, cri);

		List<CollectionDTO> collectionDTOs = new ArrayList<CollectionDTO>();

		for (CollectionVO collection : collections) {
			int cno = collection.getCno();
			CollectionDTO collectionDTO = collectionController.getCollectionDTOByCno(cno);
			collectionDTOs.add(collectionDTO);
		}

		return collectionDTOs;
	}

	public List<CollectionDTO> searchCollectionWithName(String content, Criteria cri) throws CollectionException {
		List<CollectionVO> collections = searchDao.searchCollectionWithName(content, cri);

		List<CollectionDTO> collectionDTOs = new ArrayList<CollectionDTO>();

		for (CollectionVO collection : collections) {
			int cno = collection.getCno();
			CollectionDTO collectionDTO = collectionController.getCollectionDTOByCno(cno);
			collectionDTOs.add(collectionDTO);
		}

		return collectionDTOs;
	}

	public List<CollectionDTO> searchCollectionWithMusicName(String content, Criteria cri) throws CollectionException {
		List<CollectionVO> collections = searchDao.searchCollectionWithMusicName(content, cri);
		
		List<CollectionDTO> collectionDTOs = new ArrayList<CollectionDTO>();

		for (CollectionVO collection : collections) {
			int cno = collection.getCno();
			CollectionDTO collectionDTO = collectionController.getCollectionDTOByCno(cno);
			collectionDTOs.add(collectionDTO);
		}

		return collectionDTOs;

	}

	public List<MemberVO> searchMemberWithUserId(String content, Criteria cri) {
		return searchDao.searchMemberWithUserId(content, cri);
	}
}
