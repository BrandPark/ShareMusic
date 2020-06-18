package kr.ac.hansung.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MemberVO {
	private String userId;
	private String userPw;
	private String userName;
	private String userEmail;
	private int userBirthYear;
	private int userBirthMonth;
	private int userBirthDay;
}
