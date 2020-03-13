package kr.ac.hansung.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Member {
	private String userId;
	private String userPw;
	private String userName;
	private String userEmail;
	private int enabled;
}
