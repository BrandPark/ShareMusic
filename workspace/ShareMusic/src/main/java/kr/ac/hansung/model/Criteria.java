package kr.ac.hansung.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Criteria {
	private String userId;
	private int pageNum;
	private int amount;

	public Criteria() {
		this.pageNum = 1;
		this.amount = 10;
	}
	
	public Criteria(String userId) {
		this.userId = userId;
		this.pageNum = 1;
		this.amount = 10;
	}
	
	public Criteria(String userId,int pageNum) {
		this.userId = userId;
		this.pageNum = pageNum;
		this.amount = 10;
	}

}
