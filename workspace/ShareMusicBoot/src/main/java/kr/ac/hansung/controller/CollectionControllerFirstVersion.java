//package kr.ac.hansung.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.transaction.annotation.Transactional;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import kr.ac.hansung.model.CollectionDTO;
//import kr.ac.hansung.model.CollectionVO;
//import kr.ac.hansung.model.SongVO;
//import kr.ac.hansung.model.TagVO;
//import kr.ac.hansung.service.CollectionService;
//import kr.ac.hansung.service.CollectionSongService;
//import kr.ac.hansung.service.CollectionTagService;
//import kr.ac.hansung.service.MemberFollowerSerivce;
//import kr.ac.hansung.service.YoutubeService;
//
//@RestController
//@CrossOrigin
//@RequestMapping("/collections")
//public class CollectionControllerFirstVersion {
//
//	@Autowired
//	private CollectionService collectionService;
//	@Autowired
//	private MemberFollowerSerivce followerService;
//
//	// 컬렉션 삽입
//	@PostMapping("/")
//	public ResponseEntity<String> insertCollection(@RequestBody CollectionVO collection) {
//
//		return collectionService.insertCollection(collection) >= 0 ? new ResponseEntity<>("success", HttpStatus.OK)
//				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//	}
//
//	// 사용자에 대한 모든 컬렉션들 조회
//	@GetMapping("/userid/{userId}")
//	public ResponseEntity<List<CollectionVO>> getCollections(@PathVariable("userId") String userId) {
//		List<CollectionVO> collections = collectionService.getCollections(userId);
//		return new ResponseEntity<>(collections, HttpStatus.OK);
//	}
//
//	// 사용자의 특정 컬렉션들 조회
//	@GetMapping("/cno/{cno}")
//	public ResponseEntity<CollectionVO> getCollection(@PathVariable("cno") int cno) {
//		CollectionVO collection = collectionService.getCollection(cno);
//		return new ResponseEntity<>(collection, HttpStatus.OK);
//	}
//
//	// 사용자 컬렉션 정보 수정
//	@PutMapping("/")
//	public ResponseEntity<String> updateCollection(@RequestBody CollectionVO collection) {
//
//		return collectionService.updateCollection(collection) == 1
//				? new ResponseEntity<String>("success", HttpStatus.OK)
//				: new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
//	}
//
//	// 특정 컬렉션 삭제
//	@DeleteMapping("/{cno}")
//	public ResponseEntity<String> deleteCollection(@PathVariable("cno") int cno) {
//		return collectionService.deleteCollection(cno) != 0 ? new ResponseEntity<String>("success", HttpStatus.OK)
//				: new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
//	}
//
//	// 팔로워들의 최근 업데이트 컬렉션 목록 조회
//	@GetMapping("/recent/follower/{userId}")
//	public ResponseEntity<List<CollectionVO>> getRecentCollectionsWithFollower(@PathVariable("userId") String userId) {
//		List<String> followers = followerService.getMemberFollower(userId);
//
//		List<CollectionVO> collections = collectionService.getRecentCollectionsWithFollower(followers);
//
//		return new ResponseEntity<>(collections, HttpStatus.OK);
//	}
//}
