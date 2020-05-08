package kr.ac.hansung.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import kr.ac.hansung.service.OCRService;

@RestController
@RequestMapping("/ocr")
public class OCRController {
	
	@Autowired
	private OCRService ocrService;
	
	@PostMapping("/uploadImage")
	public ResponseEntity<String> doUploadImage(@RequestBody MultipartFile file) throws Exception {
		String text = ocrService.getTesseract(file);
		
		if(text.equals("")) {
			new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<>(text, HttpStatus.OK);
		
	}
}
