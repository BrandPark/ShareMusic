package kr.ac.hansung.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.MemberDao;
import kr.ac.hansung.model.MemberVO;

@Service
public class MemberSerivce {

	@Autowired
	private MemberDao memberDao;
	
	//C
	public Boolean insertMember(MemberVO memberVO) {
		return memberDao.insertMember(memberVO);
	}

	//R
	public MemberVO getMember(String userId) {
		return memberDao.getMember(userId);
	}
	//U
	public boolean updateMember(MemberVO memberVO) {
		return memberDao.updateMember(memberVO);
	}
	
	//D
	public boolean deleteMember(String userId) {
		return memberDao.deleteMember(userId);
	}
	
	public int checkUserId(String userId) {
		return memberDao.checkUserId(userId);
	}

}
