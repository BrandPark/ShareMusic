package kr.ac.hansung.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import kr.ac.hansung.exception.CollectionException;
import kr.ac.hansung.exception.UserException;
import kr.ac.hansung.model.CollectionDTO;
import kr.ac.hansung.model.CollectionVO;
import kr.ac.hansung.model.Criteria;
import kr.ac.hansung.model.LikeVO;
import kr.ac.hansung.model.ReplyVO;
import kr.ac.hansung.model.SongVO;
import kr.ac.hansung.model.TagVO;
import kr.ac.hansung.service.AWSService;
import kr.ac.hansung.service.CollectionLikeService;
import kr.ac.hansung.service.CollectionReplyService;
import kr.ac.hansung.service.CollectionService;
import kr.ac.hansung.service.CollectionSongService;
import kr.ac.hansung.service.CollectionTagService;
import kr.ac.hansung.service.MemberFollowerSerivce;
import kr.ac.hansung.service.MemberSerivce;
import kr.ac.hansung.service.YoutubeService;

@RestController
@CrossOrigin
@RequestMapping("/collections")
public class CollectionController {

	@Autowired
	private CollectionService collectionService;
	@Autowired
	private CollectionSongService collectionSongService;
	@Autowired
	private YoutubeService youtubeService;
	@Autowired
	private CollectionTagService collectionTagService;
	@Autowired
	private CollectionLikeService collectionLikeService;
	@Autowired
	private CollectionReplyService collectionReplyService;
	@Autowired
	private AWSService awsService;
	@Autowired
	private MemberSerivce memberService;
	@Autowired
	private MemberFollowerSerivce followerService;

	// 컬렉션 삽입
	@Transactional(rollbackFor = Exception.class)
	@PostMapping("/new")
	public ResponseEntity<String> insertCollection(CollectionDTO collectionDTO,
			@RequestParam(required = false) MultipartFile file) {
		

		CollectionVO collection = collectionDTO.getCollection();

		int cno = collectionService.insertCollection(collection);

		List<SongVO> songs = collectionDTO.getSongs();
		if (!songs.isEmpty()) {
			for (SongVO song : collectionDTO.getSongs()) {
				
				song.setCno(cno);
				
				try {
					String videoId = youtubeService.searchSong(song.getMusicName(), song.getSinger());
					song.setVideoId(videoId);
				} catch (Exception e) { e.printStackTrace(); }
				
				collectionSongService.insertCollectionSong(song);
			}
		}

		List<TagVO> tags = collectionDTO.getTags();
		if (!tags.isEmpty()) {
			for (TagVO tag : tags) {
				tag.setCno(cno);
				collectionTagService.insertCollectionTag(tag);
			}
		}
		
		//admin 폴더에 cno-collectionName.png 형태로 저장
		if(file != null) {
			awsService.doUploadFile(file,collection.getUserId(), cno + "-" + collection.getCollectionName());
		}

		return new ResponseEntity<>("success", HttpStatus.OK);
	}

	// 사용자에 대한 모든 컬렉션들 조회
	@GetMapping("/userid/{userId}")
	public ResponseEntity<List<CollectionDTO>> getCollections(@PathVariable("userId") String userId, Criteria cri)
			throws UserException, CollectionException {

		System.out.println(cri);
		if (memberService.checkUserId(userId) == 0) {
			throw new UserException("NotExistUser");
		}

		List<CollectionDTO> collectionDTOs = new ArrayList<CollectionDTO>();
		List<CollectionVO> collections = collectionService.getCollections(userId, cri);

		for (CollectionVO collection : collections) {
			int cno = collection.getCno();
			CollectionDTO collectionDTO = getCollectionDTOByCno(cno);
			collectionDTOs.add(collectionDTO);
		}

		return new ResponseEntity<>(collectionDTOs, HttpStatus.OK);
	}

	// 특정 컬렉션 조회
	@GetMapping("/cno/{cno}")
	public ResponseEntity<CollectionDTO> getCollection(@PathVariable("cno") int cno, Criteria cri)
			throws CollectionException {

		CollectionDTO collectionDTO = getCollectionDTOByCno(cno);
		return new ResponseEntity<>(collectionDTO, HttpStatus.OK);
	}

	// 사용자 컬렉션 정보 수정
	@Transactional(rollbackFor = Exception.class)
	@PutMapping("/")
	public ResponseEntity<String> updateCollection(CollectionDTO collectionDTO,
			@RequestParam(required = false) MultipartFile file) {

		CollectionVO collection = collectionDTO.getCollection();
		int cno = collection.getCno();

		collectionService.updateCollection(collection);

		List<SongVO> songs = collectionDTO.getSongs();
		if (!songs.isEmpty()) {
			for (SongVO song : collectionDTO.getSongs()) {
				song.setCno(cno);

				try {
					String videoId = youtubeService.searchSong(song.getMusicName(), song.getSinger());
					song.setVideoId(videoId);
				} catch (Exception e) {
					e.printStackTrace();
				}
				collectionSongService.updateCollectionSong(song);

			}
		}

		List<TagVO> tags = collectionDTO.getTags();
		if (!tags.isEmpty()) {
			for (TagVO tag : collectionDTO.getTags()) {
				tag.setCno(cno);
				collectionTagService.updateCollectionTag(tag);
			}
		}
		
		if(file != null) {
			awsService.deleteFile(collection.getUserId(),  cno + "-" + collection.getCollectionName());
			awsService.doUploadFile(file, collection.getUserId(), cno + "-" + collection.getCollectionName());
		}

		return new ResponseEntity<>("success", HttpStatus.OK);
	}

	// 특정 컬렉션 삭제
	@DeleteMapping("/{cno}")
	public ResponseEntity<String> deleteCollection(@PathVariable("cno") int cno) {
		return collectionService.deleteCollection(cno) != 0 ? new ResponseEntity<String>("success", HttpStatus.OK)
				: new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	// 팔로워들의 최근 업데이트 컬렉션 목록 조회
	@GetMapping("/recent/followers/{userId}")
	public ResponseEntity<List<CollectionDTO>> getRecentCollectionsWithFollower(@PathVariable("userId") String userId,
			Criteria cri) throws CollectionException {

		List<CollectionDTO> collectionDTOs = new ArrayList<CollectionDTO>();

		List<String> followers = followerService.getMemberAllFollowers(userId);
		List<CollectionVO> collections = collectionService.getRecentCollectionsWithFollower(followers, cri);

		for (CollectionVO collection : collections) {
			CollectionDTO collectionDTO = getCollectionDTOByCno(collection.getCno());
			collectionDTOs.add(collectionDTO);
		}

		return new ResponseEntity<>(collectionDTOs, HttpStatus.OK);
	}

	public CollectionDTO getCollectionDTOByCno(int cno) throws CollectionException {
		CollectionVO collection = collectionService.getCollection(cno);

		if (collection == null) {
			throw new CollectionException("NotExistCollection");
		}
		
		Criteria cri = new Criteria();

		CollectionDTO collectionDTO = new CollectionDTO();
		collectionDTO.setCollection(collection);

		List<SongVO> songs = collectionSongService.getCollectionSongs(cno);
		collectionDTO.setSongs(songs);

		List<TagVO> tags = collectionTagService.getCollectionTags(cno);
		collectionDTO.setTags(tags);

		List<LikeVO> likes = collectionLikeService.getColletionLikes(cno, cri);
		collectionDTO.setLikes(likes);

		List<ReplyVO> replys = collectionReplyService.getCollectionReplys(cno, cri);
		collectionDTO.setReplys(replys);

		return collectionDTO;
	}
}