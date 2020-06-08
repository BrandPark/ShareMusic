package kr.ac.hansung.model;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class CollectionDTO {
	private CollectionVO collection;
	private List<SongVO> songs;
	private List<TagVO> tags;
	private List<LikeVO> likes;
	private List<ReplyVO> replys;
	
}
