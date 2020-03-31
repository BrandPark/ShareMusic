package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.LikeDao;
import kr.ac.hansung.model.LikeVO;

@Service
public class LikeService {
	
	@Autowired
	private LikeDao likeDao;
	
	public int insertLike(LikeVO like) {
		return likeDao.insertLike(like);
	}
	
	public List<String> getLikes(int cno) {
		return likeDao.getLikes(cno);
	}
	
	public int getLikeCount(int cno) {
		return likeDao.getLikeCount(cno);
	}

	public int removeLike(int cno,String fromUserId) {
		return likeDao.removeLike(cno,fromUserId);
	}




}
