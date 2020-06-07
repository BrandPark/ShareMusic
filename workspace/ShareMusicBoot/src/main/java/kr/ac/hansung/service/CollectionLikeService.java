package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.CollectionLikeDao;
import kr.ac.hansung.model.LikeVO;

@Service
public class CollectionLikeService {

	@Autowired
	private CollectionLikeDao likeDao;

	public int insertColletionLike(LikeVO like) {
		return likeDao.insertColletionLike(like);
	}

	public List<LikeVO> getColletionLikes(int cno) {
		return likeDao.getColletionLikes(cno);
	}

	public int getColletionLikeCount(int cno) {
		return likeDao.getColletionLikeCount(cno);
	}

	public int deleteColletionLike(int cno, String fromUserId) {
		return likeDao.deleteColletionLike(cno, fromUserId);
	}

}
