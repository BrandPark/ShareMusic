package kr.ac.hansung.model;


import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
public class Collection {
	private String userId;
	private String collectionName;

	private List<Song> songs;
}
