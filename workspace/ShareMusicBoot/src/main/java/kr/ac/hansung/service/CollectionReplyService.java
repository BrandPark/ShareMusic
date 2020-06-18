package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.CollectionReplyDao;
import kr.ac.hansung.model.ReplyVO;

@Service
public class CollectionReplyService {
	@Autowired
	private CollectionReplyDao replyDao;

	public int insertCollectionReply(ReplyVO reply) {
		return replyDao.insertCollectionReply(reply);
	}

	public ReplyVO getCollectionReply(int rno) {
		return replyDao.getCollectionReply(rno);
	}

	public List<ReplyVO> getCollectionReplys(int cno) {
		return replyDao.getCollectionReplys(cno);
	}
	
	public int updateCollectionReply(ReplyVO reply) {
		return replyDao.updateCollectionReply(reply);
	}

	public int deleteCollectionReply(int rno) {
		return replyDao.deleteCollectionReply(rno);
	}

}
