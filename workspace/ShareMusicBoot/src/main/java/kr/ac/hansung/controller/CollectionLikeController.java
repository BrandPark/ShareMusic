package kr.ac.hansung.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.ac.hansung.model.Criteria;
import kr.ac.hansung.model.LikeVO;
import kr.ac.hansung.service.CollectionLikeService;

@RestController
@CrossOrigin
@RequestMapping("/collections/likes")
public class CollectionLikeController {
	@Autowired
	private CollectionLikeService likeService;
	
	//해당 컬렉션에 대한 좋아요 삽입
	@PostMapping("/")
	public ResponseEntity<String> insertColletionLike(@RequestBody LikeVO like) {
		return likeService.insertColletionLike(like) == 1 ? 
				new ResponseEntity<>("success",HttpStatus.OK) :
				new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	//해당 컬렉션에 대한 좋아요 유저아이디 리스트 조회
	@GetMapping("/{cno}")
	public ResponseEntity<List<LikeVO>> getColletionLikeMembers(@PathVariable("cno") int cno,
			Criteria cri) {
		List<LikeVO> likes = likeService.getColletionLikes(cno, cri);
		return new ResponseEntity<>(likes,HttpStatus.OK);
	}
	
	//좋아요 수 조회
	@GetMapping("/count/{cno}")
	public ResponseEntity<Integer> getColletionLikeCount(@PathVariable("cno") int cno){
		int likeCount = likeService.getColletionLikeCount(cno);
		return new ResponseEntity<>(likeCount,HttpStatus.OK);
	}
	
	//좋아요 취소
	@DeleteMapping(value="/{cno}/{fromUserId}")
	public ResponseEntity<String> deleteColletionLike(@PathVariable("cno") int cno,
			@PathVariable("fromUserId") String fromUserId) {
		
		return likeService.deleteColletionLike(cno,fromUserId) != 0
				? new ResponseEntity<String>("success",HttpStatus.OK) :
				  new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
