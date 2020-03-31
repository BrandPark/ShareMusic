package kr.ac.hansung.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class CollectionDTO {
	
	private String collectionName;
	private List<CollectionVO> list;	
	private Criteria cri;


}
