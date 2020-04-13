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

import kr.ac.hansung.model.CollectionVO;
import kr.ac.hansung.service.CollectionService;
import kr.ac.hansung.service.MemberFollowerSerivce;

@RestController
@RequestMapping("/collection")
public class CollectionController {

	@Autowired
	private CollectionService collectionService;
	@Autowired
	private MemberFollowerSerivce followerService;

	// 컬렉션 삽입
	@PostMapping("/new")
	public ResponseEntity<String> insertCollection(@RequestBody CollectionVO collection) {

		return collectionService.insertCollection(collection) == 1 ?
				new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	// 사용자에 대한 모든 컬렉션 조회
	@GetMapping("/{userId}")
	public ResponseEntity<List<CollectionVO>> getCollections(@PathVariable("userId") String userId) {
		List<CollectionVO> collections = collectionService.getCollections(userId);
		return new ResponseEntity<>(collections, HttpStatus.OK);
	}

	// 사용자 컬렉션 정보 수정
	@PutMapping("/")
	public ResponseEntity<String> updateCollection(@RequestBody CollectionVO collection) {

		return collectionService.updateCollection(collection) == 1 ?
				new ResponseEntity<String>("success", HttpStatus.OK)
				: new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	// 해당 컬렉션 삭제
	@DeleteMapping(value = "/{cno}")
	public ResponseEntity<String> deleteCollection(@PathVariable("cno") int cno) {
		return collectionService.deleteCollection(cno) != 0 ?
				new ResponseEntity<String>("success", HttpStatus.OK)
				: new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	// 팔로워들의 최근 업데이트 컬렉션
	@GetMapping("/recent/follower/{userId}")
	public ResponseEntity<List<CollectionVO>> getRecentCollectionsWithFollower(@PathVariable("userId") String userId) {
		List<String> followers = followerService.getMemberFollower(userId);

		List<CollectionVO> collections = collectionService.getRecentCollectionsWithFollower(followers);

		return new ResponseEntity<>(collections, HttpStatus.OK);
	}
}
