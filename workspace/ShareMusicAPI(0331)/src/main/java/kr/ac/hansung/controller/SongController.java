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

import kr.ac.hansung.model.SongVO;
import kr.ac.hansung.service.SongService;
import lombok.extern.log4j.Log4j;

@RestController
@RequestMapping("/song")
@Log4j
public class SongController {
	
	@Autowired
	private SongService songService;
	
	//컬렉션에 대한 곡 삽입
	@PostMapping("/new")
	public ResponseEntity<String> insertCollection(@RequestBody SongVO song) {
		
		int insertCount = songService.insertSong(song);
//		log.info("Reply INSERT COUNT : " + insertCount);
		
		return insertCount == 1 ? 
				new ResponseEntity<>("success",HttpStatus.OK) :
				new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	//컬렉션에 대한 곡 리스트 조회
	@GetMapping("/{cno}")
	public ResponseEntity<List<SongVO>> getCollectionSong(
			@PathVariable("cno") int cno) {
		List<SongVO> collectionSongs = songService.getSongs(cno);
		return new ResponseEntity<>(collectionSongs,HttpStatus.OK);
	}
	
	//해당 곡 삭제
	@DeleteMapping(value="/{sno}")
	public ResponseEntity<String> remove(@PathVariable("sno") int sno) {
		return songService.removeSong(sno) != 0
				? new ResponseEntity<String>("success",HttpStatus.OK) :
				  new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	
}
