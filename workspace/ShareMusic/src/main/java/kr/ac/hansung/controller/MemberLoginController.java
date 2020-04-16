package kr.ac.hansung.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MemberLoginController {

	@GetMapping("/member/login")
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
