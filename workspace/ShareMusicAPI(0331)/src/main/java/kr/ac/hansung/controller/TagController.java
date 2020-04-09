package kr.ac.hansung.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.ac.hansung.model.TagDTO;
import kr.ac.hansung.service.TagService;

@RestController
@RequestMapping("/collections")
public class TagController {
	
	@Autowired
	private TagService tagService;
//특정 컬렉션에 태그 추가
	@PostMapping("/{cno}/tags")
	public ResponseEntity<String> insertTag(@RequestBody TagDTO collectionTagDTO,
			@PathVariable("cno") int cno) {

		collectionTagDTO.setCno(cno);

		return tagService.insertCollectionTag(collectionTagDTO) == 1 ? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

//특정 컬렉션의 특정 태그 select
	@GetMapping("/{cno}/tags/{tno}")
	public ResponseEntity<TagDTO> selectTag(@PathVariable("cno") int cno, @PathVariable("tno") int tno) {
		TagDTO collectionTagDTO = tagService.selectCollectionTag(cno, tno);
		if (collectionTagDTO != null)
			return new ResponseEntity<>(collectionTagDTO, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

//특정 컬렉션의 특정 태그 수정
	@PutMapping("/{cno}/tags/{tno}")
	public ResponseEntity<String> updateTag(@RequestBody TagDTO collectionTagDTO,
			@PathVariable("cno") int cno, @PathVariable("tno") int tno) {

		collectionTagDTO.setCno(cno);
		collectionTagDTO.setTno(tno);

		return tagService.updateCollectionTag(collectionTagDTO) == 1 ? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

//특정 컬렉션의 특정 태그 delete
	@DeleteMapping("/{cno}/tags/{tno}")
	public ResponseEntity<String> deleteTag(@PathVariable("cno") int cno, @PathVariable("tno") int tno) {
		return tagService.deleteCollectionTag(tno, cno) == 1 ? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
