package kr.ac.hansung.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor

public class Text {
	private int id;
	private String writer;
	private String title;
	private String contents;
	private String modifiedDate;
	private String modifiedTime;
	private int viewNumber;
}
