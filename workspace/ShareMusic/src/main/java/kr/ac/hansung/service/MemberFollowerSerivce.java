package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.MemberFollowerDao;
import kr.ac.hansung.model.FollowerVO;

@Service
public class MemberFollowerSerivce {
	
	@Autowired
	private MemberFollowerDao followerDao;
	
	public int insertMemberFollower(FollowerVO followerVO) {
		return followerDao.insertMemberFollower(followerVO);
	}
	
	public List<String> getMemberFollower(String userId){
		List<String> followers = followerDao.getMemberFollower(userId);
		return followers;
	}
	
	public List<String> getMemberFollowing(String userId){
		List<String> followings = followerDao.getMemberFollowing(userId);
		return followings;
	}
	
	public int deleteMemberFollower(String fromUserId,String toUserId) {
		return followerDao.deleteMemberFollower(fromUserId, toUserId);
	}


}
