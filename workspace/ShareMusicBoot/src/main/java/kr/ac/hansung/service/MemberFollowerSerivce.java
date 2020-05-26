package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.MemberFollowerDao;
import kr.ac.hansung.model.Criteria;
import kr.ac.hansung.model.FollowerVO;

@Service
public class MemberFollowerSerivce {
	
	@Autowired
	private MemberFollowerDao followerDao;
	
	public int insertMemberFollower(FollowerVO followerVO) {
		return followerDao.insertMemberFollower(followerVO);
	}
	
	public List<String> getMemberAllFollowers(String userId){
		List<String> followers = followerDao.getMemberAllFollowers(userId);
		return followers;
	}
	
	public List<String> getMemberFollowers(String userId, Criteria cri){
		List<String> followers = followerDao.getMemberFollowers(userId, cri);
		return followers;
	}
	
	public List<String> getMemberFollowings(String userId, Criteria cri){
		List<String> followings = followerDao.getMemberFollowings(userId, cri);
		return followings;
	}
	
	public int deleteMemberFollower(String fromUserId,String toUserId) {
		return followerDao.deleteMemberFollower(fromUserId, toUserId);
	}


}
