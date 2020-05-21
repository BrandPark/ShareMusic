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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.ac.hansung.model.TagVO;
import kr.ac.hansung.service.CollectionTagService;

@RestController
@CrossOrigin
@RequestMapping("/collections/tags")
public class CollectionTagController {

	@Autowired
	private CollectionTagService tagService;

	//특정 컬렉션에 태그 추가
	@PostMapping("/")
	public ResponseEntity<String> insertTag(@RequestBody TagVO tag) {

		return tagService.insertCollectionTag(tag) == 1 ? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	//특정 컬렉션의 특정 태그 조회
	@GetMapping("/{tno}")
	public ResponseEntity<TagVO> getCollectionTag(@PathVariable("tno") int tno) {
		TagVO tag = tagService.getCollectionTag(tno);
		
//		if (tag != null)
//			return new ResponseEntity<>(tag, HttpStatus.OK);
//		else
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		return new ResponseEntity<>(tag, HttpStatus.OK);
	}
	
	//특정 컬렉션의 모든 태그들 조회
	@GetMapping("/all/{cno}")
	public ResponseEntity<List<TagVO>> getCollectionTags(@PathVariable("cno") int cno) {
		List<TagVO> tags = tagService.getCollectionTags(cno);
		return new ResponseEntity<>(tags, HttpStatus.OK);
	}

	//특정 컬렉션의 특정 태그 수정
	@PutMapping("/")
	public ResponseEntity<String> updateCollectionTag(@RequestBody TagVO tag) {

		return tagService.updateCollectionTag(tag) == 1 ? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	//특정 컬렉션의 특정 태그 delete
	@DeleteMapping("/{tno}")
	public ResponseEntity<String> deleteTag(@PathVariable("tno") int tno) {
	
		return tagService.deleteCollectionTag(tno) == 1 ? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
