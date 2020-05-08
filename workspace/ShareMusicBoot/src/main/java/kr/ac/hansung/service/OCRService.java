package kr.ac.hansung.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gcp.vision.CloudVisionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class OCRService {

	@Autowired
	private CloudVisionTemplate cloudVisionTemplate;

	public String getTesseract(MultipartFile file) {

		
			
		String text = cloudVisionTemplate.extractTextFromImage(file.getResource());

		return text;
	}

	// 들어온 문자열이 한글의 유니코드(0xAC00 - 0xD743)범위에 들어오는지 판단

	private static boolean checkHan(char cValue) {

		if (cValue >= 0xAC00 && cValue <= 0xD743) {
			return true;
			// 한글 OK!

		} else if (cValue >= 0x61 && cValue <= 0x7A) {
			return true;
			// 영문(소문자) OK!

		} else if (cValue >= 0x41 && cValue <= 0x5A) {
			return true;
			// 영문(대문자) OK!

		} else if (cValue >= 0x30 && cValue <= 0x39) {
			return true;
			// 숫자 OK!

		} else if (cValue == 0x2E || cValue == 0x26 || cValue == 0x28 || cValue == 0x29 || cValue == 0x21

				|| cValue == 0x20) {
			return true;
			// . & ( ) ! OK!
			// http://mwultong.blogspot.com/2006/10/java-ascii-table-generator.html

		} else {
			return false;

		}
	}

	private String getHangul(String str) {

		if (str.startsWith(".")) {
			str = str.substring(1);
		}

		StringBuffer hangul = new StringBuffer();

		for (int i = 0; i < str.length(); i++) {
			if (checkHan(str.charAt(i))) {
				hangul.append(str.charAt(i));
			}
		}

		return hangul.toString();

	}
}
