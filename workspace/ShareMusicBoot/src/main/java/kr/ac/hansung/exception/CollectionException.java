package kr.ac.hansung.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CollectionException extends Exception{
	private static final long serialVersionUID = -4597825603402570080L;
	
	private String content;
}
