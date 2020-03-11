package kr.ac.hansung.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;


import org.bytedeco.javacpp.BytePointer;
import org.bytedeco.javacpp.lept;
import org.bytedeco.javacpp.lept.PIX;
import org.bytedeco.javacpp.tesseract;
import org.bytedeco.javacpp.tesseract.TessBaseAPI;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class OCRService {
	private TessBaseAPI instance;
	
	public OCRService() {
		instance = tesseract.TessBaseAPICreate();
		instance.Init("/Users/jeon-yongho/Desktop/ShareMusic/tessdata", "eng+kor");
//		instance.Init("/usr/local/share/tessdata", "eng+kor");
//		instance.Init("/usr/CapstoneD/tessdata", "eng+kor");
//		instance.Init("C:\\CapstoneD\\tessdata", "eng+kor");
		
	}
	
	public List<String> getTesseract(MultipartFile file) {
		
		byte[] imageBytes = null;
		try {
			imageBytes = file.getBytes();

		} catch (IOException e) {
			e.printStackTrace();
		}

		PIX image = lept.pixReadMem(imageBytes,imageBytes.length);
		instance.SetImage(image);

		BytePointer bytePointer = instance.GetUTF8Text();

		String output = bytePointer.getString();

		String[] outputArray = output.split("\n");
		

		// 빈 문자열 인덱스 제거 하여 문자열 배열정리

		for (int i = 0; i < outputArray.length; i++) {
			outputArray[i] = getHangul(outputArray[i]).trim();
		}

		List<String> list = new ArrayList<String>(Arrays.asList(outputArray));

		Iterator<String> iter = list.iterator();

		while (iter.hasNext()) {
			String s = iter.next();

			if (s.equals("")) {
				iter.remove();
			}
		}
		return list;
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
