package kr.ac.hansung.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.ac.hansung.model.CollectionVO;
import kr.ac.hansung.model.MemberVO;
import kr.ac.hansung.service.SearchService;

@RestController
@CrossOrigin
@RequestMapping("/search")
public class SearchController {
	
	@Autowired
	public SearchService searchService;
	
	// 검색
	@GetMapping("/{type}/{content}")
	public ResponseEntity<Object> search(@PathVariable("type") String type,@PathVariable("content") String content) {
		
		
		// 태그명으로 컬렉션들 검색
		if(type.equals("tag")) {
			List<CollectionVO> collections = searchService.searchCollectionWithTag(content);
			return new ResponseEntity<>(collections,HttpStatus.OK);
		}
		// 컬렉션이름으로 컬렉션들 검색
		else if(type.equals("collectionname")) {
			List<CollectionVO> collections = searchService.searchCollectionWithName(content);
			return new ResponseEntity<>(collections,HttpStatus.OK);
		}
		// 곡 제목으로 컬렉션들 검색
		else if(type.equals("musicname")) {
			List<CollectionVO> collections = searchService.searchCollectionWithMusicName(content);
			return new ResponseEntity<>(collections,HttpStatus.OK);
		}
		// 유저id로 유저 검색
		else if(type.equals("userid")) {
			List<MemberVO> users = searchService.searchMemberWithUserId(content);
			return new ResponseEntity<>(users,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
	}
	
}
