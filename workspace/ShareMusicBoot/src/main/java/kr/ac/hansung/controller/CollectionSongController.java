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

import kr.ac.hansung.model.SongVO;
import kr.ac.hansung.service.CollectionSongService;

@RestController
@CrossOrigin
@RequestMapping("/collection/song")
public class CollectionSongController {

	@Autowired
	private CollectionSongService songService;

	// 컬렉션에 대한 곡 삽입
	@PostMapping("/new")
	public ResponseEntity<String> insertCollectionSong(@RequestBody SongVO song) {
		return songService.insertCollectionSong(song) == 1 ? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	// 컬렉션에 대한 곡 리스트 조회
	@GetMapping("/all/{cno}")
	public ResponseEntity<List<SongVO>> getCollectionSongs(@PathVariable("cno") int cno) {
		List<SongVO> songs = songService.getCollectionSongs(cno);
		return new ResponseEntity<>(songs, HttpStatus.OK);
	}
	
	// 곡 정보 조회
	@GetMapping("/{sno}")
	public ResponseEntity<SongVO> getCollectionSong(@PathVariable("sno") int sno) {
		SongVO song = songService.getCollectionSong(sno);
		return new ResponseEntity<>(song, HttpStatus.OK);
	}

	// 곡 수정
	@PutMapping("/")
	public ResponseEntity<String> updateCollectionSong(@RequestBody SongVO song) {

		return songService.updateCollectionSong(song) == 1 ?
				new ResponseEntity<String>("success", HttpStatus.OK)
				: new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	// 해당 곡 삭제
	@DeleteMapping(value = "/{sno}")
	public ResponseEntity<String> deleteCollectionSong(@PathVariable("sno") int sno) {
		return songService.deleteCollectionSong(sno) != 0 ?
				new ResponseEntity<String>("success", HttpStatus.OK)
				: new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
