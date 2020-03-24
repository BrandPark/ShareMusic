package kr.ac.hansung.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
import kr.ac.hansung.model.Song;
import kr.ac.hansung.service.CollectionService;
import lombok.extern.log4j.Log4j;

@RestController
@RequestMapping("/collection")
@Log4j
public class CollectionController {
	
	@Autowired
	private CollectionService collectionService;
		
	@PostMapping("/new")
	public ResponseEntity<String> insertCollection(@RequestBody CollectionVO collection) {
		
		int insertCount = collectionService.insertCollection(collection);
		
//		log.info("Reply INSERT COUNT : " + insertCount);
		
		return insertCount == 1 ? 
				new ResponseEntity<>("success",HttpStatus.OK) :
				new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping("/all/{userId}")
	public ResponseEntity<List<CollectionVO>> getCollectionAll(@PathVariable("userId") String userId) {
		List<CollectionVO> collections = collectionService.getCollectionAll(userId);
		return new ResponseEntity<>(collections,HttpStatus.OK);
	}
	
	@GetMapping("/name/{userId}")
	public ResponseEntity<List<String>> getCollectionName(@PathVariable("userId") String userId) {
		List<String> collectionNames = collectionService.getCollectionName(userId);
		return new ResponseEntity<>(collectionNames,HttpStatus.OK);
	}
	
	@GetMapping("/song/{userId}/{collectionName}")
	public ResponseEntity<List<Song>> getCollectionSong(
			@PathVariable("userId") String userId,
			@PathVariable("collectionName") String collectionName) {
		List<Song> collectionSongs = collectionService.getCollectionSong(userId,collectionName);
		return new ResponseEntity<>(collectionSongs,HttpStatus.OK);
	}
	
	@DeleteMapping(value="/{userId}/{collectionName}")
	public ResponseEntity<String> remove(@PathVariable("userId") String userId,
			@PathVariable("collectionName") String collectionName)
	{
		return collectionService.removeCollection(userId,collectionName) != 0
				? new ResponseEntity<String>("success",HttpStatus.OK) :
				  new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	/*
	@RequestMapping(method = {RequestMethod.PUT, RequestMethod.PATCH},
			value="/{userId}/{collectionName}",
			consumes = "application/json",
			produces = {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> modify(
			@RequestBody CollectionVO collection,
			@PathVariable("userId") String userId,
			@PathVariable("collectionName") String collectionName){
		
		
			vo.setRno(rno);
			
			log.info("rno: " + rno);
			log.info("modify" + vo);
			
			return service.modify(vo) == 1 ?
					new ResponseEntity<String>("success",HttpStatus.OK):
					new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
	 */

	
}
