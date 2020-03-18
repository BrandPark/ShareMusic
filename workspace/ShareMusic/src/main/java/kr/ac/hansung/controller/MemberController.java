package kr.ac.hansung.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import kr.ac.hansung.dao.MemberDao;
import kr.ac.hansung.model.Member;


@Controller
@RequestMapping("/member")
public class MemberController {
	
	@Autowired
	private MemberDao memberDao;
	
	@RequestMapping(value="/login", method=RequestMethod.GET)
	public String  doLogin(@RequestParam(value="error", required=false) String error,
						   @RequestParam(value="logout", required=false)String logout,
						   Model model) {
		if(error != null) {
			model.addAttribute("errorMsg", "login_error");
		}
		if(logout != null) {
			model.addAttribute("logoutMsg","logout_successfully");
		}
		
		return "/member/mem_login_form";
	}
	
	@RequestMapping(value="/showRegMember", method=RequestMethod.GET)
	public String showMemberRegisterForm() {
		return "/member/mem_register_form";
	}
	
	@RequestMapping(value="/doRegMember", method=RequestMethod.POST)
	public String doRegMember(Member member) {
		if(memberDao.checkId(member.getUserId()) == 0) {
			memberDao.insertMember(member);
			return "/member/mem_register_result";
		}else {
			return "/member/mem_register_form";
		}
	}
	
	@RequestMapping(value="/showUpdateMember", method=RequestMethod.GET)
	public String showUpdateMember() {
		return "/member/mem_update_form";
	}
	
}
