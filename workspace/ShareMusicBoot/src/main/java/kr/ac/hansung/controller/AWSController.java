package kr.ac.hansung.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import kr.ac.hansung.service.AWSService;

@RestController
@RequestMapping("/aws")
public class AWSController {
	@Autowired
	private AWSService awsService;
	
	@PostMapping("/s3/{foldername}/{filename}")
	public ResponseEntity<String> insertImage(
			@PathVariable("foldername") String folderName,
			@PathVariable("filename") String fileName,
			@RequestParam(required = false) MultipartFile file){
		
		awsService.doUploadFile(file, folderName, fileName);
		
		return new ResponseEntity<String>("success",HttpStatus.OK);
	}
	
	@DeleteMapping("/s3/{foldername}/{filename}")
	public ResponseEntity<String> deleteImage(
			@PathVariable("foldername") String folderName,
			@PathVariable("filename") String fileName){
		
		awsService.deleteFile(folderName,fileName);
		
		return new ResponseEntity<String>("success",HttpStatus.OK);
	}
	
}
