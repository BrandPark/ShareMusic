package kr.ac.hansung.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.ac.hansung.model.ReplyVO;
import kr.ac.hansung.service.CollectionReplyService;

@RestController
@RequestMapping("/collection//reply")
public class CollectionReplyController {
	@Autowired
	private CollectionReplyService replyService;
	
	//특정 컬렉션에 reply insert
	@PostMapping("/new")
	public ResponseEntity<String> insertColletionReply(
			@RequestBody ReplyVO reply) {

		return replyService.insertCollectionReply(reply) == 1?
				new ResponseEntity<>("success",HttpStatus.OK) :
					new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	//특정 컬렉션의 특정 댓글 조회
	@GetMapping("/{rno}")
	public ResponseEntity<ReplyVO> getColletionReply(@PathVariable("rno") int rno){
		
		ReplyVO reply = replyService.getCollectionReply(rno);

//		if(reply != null)
//			return new ResponseEntity<>(reply,HttpStatus.OK);
//		else
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		return new ResponseEntity<>(reply,HttpStatus.OK);
	}
	
	//특정 컬렉션의 모든 댓글들 조회
	@GetMapping("/all/{cno}")
	public ResponseEntity<List<ReplyVO>> getColletionReplys(@PathVariable("cno") int cno){
		
		List<ReplyVO> replys = replyService.getCollectionReplys(cno);

		return new ResponseEntity<>(replys,HttpStatus.OK);
	}
	
	
	//특정 태그 수정
	@PutMapping("/")
	public ResponseEntity<String> updateColletionReply(@RequestBody ReplyVO reply){
		return replyService.updateCollectionReply(reply) == 1?
				new ResponseEntity<>("success",HttpStatus.OK) :
					new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	//특정 태그 삭제
	@DeleteMapping("/{rno}")
	public ResponseEntity<String> deleteColletionReply(
			@PathVariable("rno") int rno){
	
		
		return replyService.deleteCollectionReply(rno) == 1?
				new ResponseEntity<>("success",HttpStatus.OK) :
					new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); 
	}

}
