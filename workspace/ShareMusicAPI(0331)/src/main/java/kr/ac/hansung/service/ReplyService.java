package kr.ac.hansung.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.ReplyDao;
import kr.ac.hansung.model.ReplyDTO;

@Service
public class ReplyService {
	@Autowired
	private ReplyDao replyDao;


	// insert
	public int insertCollectionReply(ReplyDTO collectionReplyDTO) {
		return replyDao.insertCollectionReply(collectionReplyDTO);
	}

	// select
	public ReplyDTO selectCollectionReply(int rno, int cno) {
		return replyDao.selectCollectionReply(rno, cno);
	}

	// update
	public int updateCollectionReply(ReplyDTO collectionReplyDTO) {
		return replyDao.updateCollectionReply(collectionReplyDTO);
	}

	// delete
	public int deleteCollectionReply(int rno, int cno) {
		return replyDao.deleteCollectionReply(rno, cno);
	}

	
}
