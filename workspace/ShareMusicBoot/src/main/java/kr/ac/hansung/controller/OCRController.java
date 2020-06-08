package kr.ac.hansung.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import kr.ac.hansung.model.SongVO;
import kr.ac.hansung.service.OCRService;

@RestController
@CrossOrigin
@RequestMapping("/ocr")
public class OCRController {
	
	@Autowired
	private OCRService ocrService;
	
	@PostMapping("/")
	public ResponseEntity<List<SongVO>> doOCR(@RequestBody MultipartFile file) throws Exception {
		List<SongVO> songs = ocrService.doOCR(file);

//		if(songs == null) {
//			new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
		
		return new ResponseEntity<>(songs, HttpStatus.OK);
	}

}
