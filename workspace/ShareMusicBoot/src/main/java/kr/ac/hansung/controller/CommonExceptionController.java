package kr.ac.hansung.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import kr.ac.hansung.exception.CollectionException;
import kr.ac.hansung.exception.UserException;

@ControllerAdvice
public class CommonExceptionController {
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> except(Exception exception) {
		return new ResponseEntity<String>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	// 유저와 관련된 Exception처리
	@ExceptionHandler(UserException.class)
	public ResponseEntity<String> handleUserException(UserException ex){
		return new ResponseEntity<String>(ex.getContent(),HttpStatus.INTERNAL_SERVER_ERROR);
	};
	
	// 컬렉션과 관련된 Exception처리
	@ExceptionHandler(CollectionException.class)
	public ResponseEntity<String> handleCollectionException(CollectionException ex){
		return new ResponseEntity<String>(ex.getContent(),HttpStatus.INTERNAL_SERVER_ERROR);
	};
	

	
}
