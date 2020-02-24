package kr.ac.hansung.controller;

import java.io.File;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class UploadController {
	private static final Logger logger = LoggerFactory.getLogger(UploadController.class);
	
	//xml에 설정된 리소스 참조
	//bean의 id가 uploadPath인 태그를 참조
	@Autowired
	@Qualifier("uploadPath")
	String uploadPath;
	
	@RequestMapping(value="/upload/uploadForm", method=RequestMethod.GET)
	public String goUploadForm() {
		return "/upload/uploadForm";
	}

	//업로드 흐름 : 업로드 버튼 클릭 -> 임시디렉터리에 업로드 -> 지정된 디렉터리에 저장 -> 파일 정보가 file에 저장
	@RequestMapping(value="/upload/uploadForm", method=RequestMethod.POST)
	public ModelAndView uploadForm(MultipartFile file, ModelAndView mav) throws Exception{
		logger.info("파일이름 :" + file.getOriginalFilename());
		logger.info("파일크기 :" + file.getSize());
		logger.info("컨텐트 타입 :" + file.getContentType());
		
		String savedName = file.getOriginalFilename();
		
		File target = new File(uploadPath, savedName);
		//폴더가 없을 시 폴더 생성
//		if(!target.exists()) {
//			try {
//				target.mkdir();
//				System.out.println("폴더가 생성되었습니다.");
//				//임시 디렉터리에 저장된, 업로드된 파일을 지정된 디렉터리로 복사
//				//FileCopyUtils.copy(바이트 배열, 파일객체)
//				FileCopyUtils.copy(file.getBytes(), target);
//			}catch(Exception e) {
//				e.getStackTrace();
//			}
//		} else {
//			//임시 디렉터리에 저장된, 업로드된 파일을 지정된 디렉터리로 복사
//			//FileCopyUtils.copy(바이트 배열, 파일객체)
//			FileCopyUtils.copy(file.getBytes(), target);
//		}
		
		//임시 디렉터리에 저장된, 업로드된 파일을 지정된 디렉터리로 복사
		//FileCopyUtils.copy(바이트 배열, 파일객체)
		FileCopyUtils.copy(file.getBytes(), target);
		
		mav.setViewName("upload/uploadResult");
		mav.addObject("savedName", savedName);
		
		return mav;	//uploadResult.jsp로 포워딩
	}
}
