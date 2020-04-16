package kr.ac.hansung.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class SongVO {
	private int sno;
	private int cno;
	private String musicName;
	private String singer;
}
