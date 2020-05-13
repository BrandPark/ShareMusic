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

import kr.ac.hansung.model.MemberVO;
import kr.ac.hansung.service.MemberSerivce;

@RestController
@CrossOrigin
@RequestMapping("/member")
public class MemberController {
	@Autowired
	private MemberSerivce memberService;

	// 사용자 정보 등록
	@PostMapping("/new")
	public ResponseEntity<String> insertMember(@RequestBody MemberVO memberVO) {

		return memberService.insertMember(memberVO) ?
				new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	// 사용자 정보 조회
	@GetMapping("/{userId}")
	public ResponseEntity<MemberVO> getMember(@PathVariable("userId") String userId) {
		MemberVO member = memberService.getMember(userId);
		return new ResponseEntity<>(member, HttpStatus.OK);
	}

	// 사용자 정보 수정
	@PutMapping("/")
	public ResponseEntity<String> updateUser(@RequestBody MemberVO memberVO) {
		return memberService.updateMember(memberVO) ?
				new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	// 회원 삭제
	@DeleteMapping(value = "/{userId}")
	public ResponseEntity<String> removeMember(@PathVariable("userId") String userId) {

		return memberService.deleteMember(userId) ?
				new ResponseEntity<String>("success", HttpStatus.OK)
				: new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	// 아이디 중복 검사
	@GetMapping("/check/{userId}")
	public ResponseEntity<String> checkUserId(@PathVariable("userId") String userId) {

		return memberService.checkUserId(userId) == 1 ?
				new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR)
				: new ResponseEntity<String>("success", HttpStatus.OK);
	}

	//로그인 검사
	@PostMapping("/doLogin")
	public ResponseEntity<String> doLogin(@RequestBody MemberVO memberVO){
	
		if(memberService.checkUserId(memberVO.getUserId()) > 0){ // 일치하는 아이디가 존재할 때
			
			MemberVO member = memberService.getAuthentication(memberVO);
			
			if(member.getUserPw().equals(memberVO.getUserPw())) { // 일치하는 아이디와 패스워드가 존재할 때
				
				List<String> auths = memberService.getAuthorities(memberVO);
				
				if(auths.contains("ROLE_USER") || auths.contains("ROLE_ADMIN")){
					return new ResponseEntity<String>("success", HttpStatus.OK);
				}else{ // 권한이 없을 때
					return new ResponseEntity<String>("NotExistAuthority", HttpStatus.OK);
				}

			}else{ // 패스워드가 존재하지 않을 때
				return new ResponseEntity<String>("NotExistPassword", HttpStatus.OK);
			}

		}else{ // 일치하는 아이디가 없을 때
			return new ResponseEntity<String>("NotExistUserId", HttpStatus.OK);
		}
		
		
	}

}
