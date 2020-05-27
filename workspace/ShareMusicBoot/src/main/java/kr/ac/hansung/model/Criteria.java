package kr.ac.hansung.model;

import lombok.ToString;

@ToString
public class Criteria {
	private int page;
	private int amount; // 한 페이지당 보여줄 게시글의 갯수

	public int getPageStart() {
		return (this.page - 1) * amount;
	}

	public Criteria() {
		this.page = 1;
		this.amount = 5;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		if (page <= 0) {
			this.page = 1;
		} else {
			this.page = page;
		}
	}

	public int getAmount() {
		return amount;
	}

	public void setamount(int amount) {
		/*
		int cnt = this.amount;
		if (pageCount != cnt) {
			this.amount = cnt;
		} else {
			this.amount = amount;
		}
		*/
		
		this.amount = amount;
	}

}
