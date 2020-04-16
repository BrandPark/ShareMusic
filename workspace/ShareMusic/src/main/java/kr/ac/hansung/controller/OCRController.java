package kr.ac.hansung.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import kr.ac.hansung.model.SongVO;
import kr.ac.hansung.service.OCRService;

@RestController
@RequestMapping("/ocr")
public class OCRController {
	
	@Autowired
	private OCRService ocrService;
	
	@PostMapping("/uploadImage")
	public ResponseEntity<List<SongVO>> doUploadImage(@RequestBody MultipartFile file) throws Exception {
		List<SongVO> songs = ocrService.getTesseract(file);
		
		if(songs.isEmpty()) {
			new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<>(songs, HttpStatus.OK);
		
	}
}
