package kr.ac.hansung.controller;

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

import kr.ac.hansung.model.ReplyDTO;
import kr.ac.hansung.model.TagDTO;
import kr.ac.hansung.service.ReplyService;

@RestController
@RequestMapping("/collections")
public class ReplyController {
	@Autowired
	private ReplyService replyService;
	
////////////////////////////	Reply CRUD
	//특정 컬렉션에 reply insert
	@PostMapping("/{cno}/replys")
	public ResponseEntity<String> insertReply(
			@RequestBody ReplyDTO collectionReplyDTO,
			@PathVariable("cno")int cno
			) {
		collectionReplyDTO.setCno(cno);
		return replyService.insertCollectionReply(collectionReplyDTO) == 1?
				new ResponseEntity<>("success",HttpStatus.OK) :
					new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	//특정 컬렉션의 특정 댓글 가져오기
	@GetMapping("/{cno}/replys/{rno}")
	public ResponseEntity<ReplyDTO> selectReply(
			@PathVariable("cno") int cno,
			@PathVariable("rno") int rno){
		
		ReplyDTO collectionReplyDTO = replyService.selectCollectionReply(rno,cno);

		if(collectionReplyDTO != null)
			return new ResponseEntity<>(collectionReplyDTO,HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	//특정 reply update
	@PutMapping("/{cno}/replys/{rno}")
	public ResponseEntity<String> updateReply(
			@RequestBody ReplyDTO collectionReplyDTO,
			@PathVariable("cno") int cno,
			@PathVariable("rno") int rno){
		
		collectionReplyDTO.setCno(cno);
		collectionReplyDTO.setRno(rno);
		
		return replyService.updateCollectionReply(collectionReplyDTO) == 1?
				new ResponseEntity<>("success",HttpStatus.OK) :
					new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	//특정 reply delete
	@DeleteMapping("/{cno}/replys/{rno}")
	public ResponseEntity<String> deleteReply(
			@PathVariable("cno") int cno,
			@PathVariable("rno") int rno){
	
		
		return replyService.deleteCollectionReply(rno,cno) == 1?
				new ResponseEntity<>("success",HttpStatus.OK) :
					new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); 
	}

}
