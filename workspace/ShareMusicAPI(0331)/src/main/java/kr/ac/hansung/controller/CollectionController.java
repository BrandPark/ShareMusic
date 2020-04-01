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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import kr.ac.hansung.model.CollectionVO;
import kr.ac.hansung.service.CollectionService;
import lombok.extern.log4j.Log4j;

@RestController
@RequestMapping("/collection")
@Log4j
public class CollectionController {
	
	@Autowired
	private CollectionService collectionService;
		
	//컬렉션 삽입
	@PostMapping("/new")
	public ResponseEntity<String> insertCollection(@RequestBody CollectionVO collection) {
		
		int insertCount = collectionService.insertCollection(collection);
//		log.info("Reply INSERT COUNT : " + insertCount);
		
		return insertCount == 1 ? 
				new ResponseEntity<>("success",HttpStatus.OK) :
				new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	//사용자에 대한 모든 컬렉션 조회
	@GetMapping("/{userId}")
	public ResponseEntity<List<CollectionVO>> getCollections(@PathVariable("userId") String userId) {
		List<CollectionVO> collections = collectionService.getCollections(userId);
		return new ResponseEntity<>(collections,HttpStatus.OK);
	}
	
	@RequestMapping(method = {RequestMethod.PUT, RequestMethod.PATCH},
			value="/")
	public ResponseEntity<String> modify(
			@RequestBody CollectionVO collection){
		
//			log.info("modify" + collection);
			
			return collectionService.modify(collection) == 1 ?
					new ResponseEntity<String>("success",HttpStatus.OK):
					new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	//해당 컬렉션 삭제
	@DeleteMapping(value="/{cno}")
	public ResponseEntity<String> remove(@PathVariable("cno") int cno) {
		return collectionService.removeCollection(cno) != 0
				? new ResponseEntity<String>("success",HttpStatus.OK) :
				  new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	
	

	 

	
}
