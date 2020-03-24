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

import kr.ac.hansung.model.FollowerVO;
import kr.ac.hansung.service.FollowerSerivce;
import lombok.extern.log4j.Log4j;

@Log4j
@RestController
@RequestMapping("/follow")
public class FollowerController {
	
	@Autowired
	private FollowerSerivce followerService;
	
	@PostMapping("/new")
	public ResponseEntity<String> insertCollection(@RequestBody FollowerVO followerVO) {
		
		int insertCount = followerService.insert(followerVO);
		
//		log.info("Reply INSERT COUNT : " + insertCount);
		
		return insertCount == 1 ? 
				new ResponseEntity<>("success",HttpStatus.OK) :
				new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping("/follower/{userId}")
	public ResponseEntity<List<String>> getFollower(@PathVariable("userId") String userId) {
		List<String> followers = followerService.getFollower(userId);
		return new ResponseEntity<>(followers,HttpStatus.OK);
	}
	
	@GetMapping("/following/{userId}")
	public ResponseEntity<List<String>> getFollowing(@PathVariable("userId") String userId) {
		List<String> followings = followerService.getFollowing(userId);
		return new ResponseEntity<>(followings,HttpStatus.OK);
	}
	
	@DeleteMapping(value="/{fromUserId}/{toUserId}")
	public ResponseEntity<String> remove(@PathVariable("fromUserId") String fromUserId,
			@PathVariable("toUserId") String toUserId)
	{
		return followerService.remove(fromUserId,toUserId) != 0
				? new ResponseEntity<String>("success",HttpStatus.OK) :
				  new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	

	
	
}
