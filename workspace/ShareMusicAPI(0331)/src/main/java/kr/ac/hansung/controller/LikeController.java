package kr.ac.hansung.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.ac.hansung.model.LikeVO;
import kr.ac.hansung.service.LikeService;
import lombok.extern.log4j.Log4j;

@RestController
@RequestMapping("/like")
@Log4j
public class LikeController {
	@Autowired
	private LikeService likeService;
	
	//해당 컬렉션에 대한 좋아요 삽입
	@PostMapping("/new")
	public ResponseEntity<String> insertLike(@RequestBody LikeVO like) {
		
		int insertCount = likeService.insertLike(like);
//		log.info("Reply INSERT COUNT : " + insertCount);
		
		return insertCount == 1 ? 
				new ResponseEntity<>("success",HttpStatus.OK) :
				new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	//해당 컬렉션에 대한 좋아요 유저아이디 리스트 조회
	@GetMapping("/{cno}")
	public ResponseEntity<List<String>> getLikesMember(
			@PathVariable("cno") int cno) {
		List<String> likes = likeService.getLikes(cno);
		
		return new ResponseEntity<>(likes,HttpStatus.OK);
	}
	
	//좋아요 수 조회
	@GetMapping("/count/{cno}")
	public ResponseEntity<Integer> getLikeCount(@PathVariable("cno") int cno){
		
		int likeCount = likeService.getLikeCount(cno);
		
		return new ResponseEntity<>(likeCount,HttpStatus.OK);
	}
	
	//좋아효 취소
	@DeleteMapping(value="/{cno}/{fromUserId}")
	public ResponseEntity<String> remove(@PathVariable("cno") int cno,
			@PathVariable("fromUserId") String fromUserId) {
		return likeService.removeLike(cno,fromUserId) != 0
				? new ResponseEntity<String>("success",HttpStatus.OK) :
				  new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
