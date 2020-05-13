package kr.ac.hansung.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/login")
public class MemberLoginController {

	@PostMapping("/doLogin")
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
}
