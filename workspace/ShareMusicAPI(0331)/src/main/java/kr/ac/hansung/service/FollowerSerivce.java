package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.FollowerDao;
import kr.ac.hansung.model.FollowerVO;

@Service
public class FollowerSerivce {
	
	@Autowired
	private FollowerDao followerDao;
	
	public int insert(FollowerVO followerVO) {
		return followerDao.insert(followerVO);
	}
	
	public List<String> getFollower(String userId){
		List<String> followers = followerDao.getFollower(userId);
		return followers;
	}
	
	public List<String> getFollowing(String userId){
		List<String> followings = followerDao.getFollowing(userId);
		return followings;
	}
	
	public int remove(String fromUserId,String toUserId) {
		return followerDao.remove(fromUserId, toUserId);
	}
	
}
