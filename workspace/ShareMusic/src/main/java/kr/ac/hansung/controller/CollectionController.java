package kr.ac.hansung.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import kr.ac.hansung.model.Collection;
import kr.ac.hansung.service.CollectionService;
import kr.ac.hansung.service.OCRService;

@Controller
public class CollectionController {
	private static final Logger logger = LoggerFactory.getLogger(CollectionController.class);

	@Autowired
	private OCRService ocrService;
	@Autowired
	private CollectionService collectionService;

	// xml에 설정된 리소스 참조
	// bean의 id가 uploadPath인 태그를 참조
	@Autowired
	@Qualifier("uploadPath")
	String uploadPath;

	@RequestMapping("/upload/uploadMusic")
	public String uploadMusic() {
		return "/upload/uploadMusic";
	}
	@RequestMapping(value = "/upload/uploadMusic", method = RequestMethod.POST)
	public String doUploadMusic(Collection collection) {
		collectionService.insertMusic(collection);
		return "home";
	}

	@RequestMapping(value = "/upload/uploadImage", method = RequestMethod.GET)
	public String uploadImage() {
		return "/upload/uploadImage";
	}

	@RequestMapping(value = "/upload/uploadImage", method = RequestMethod.POST)
	public ModelAndView doUploadImage(MultipartFile file, ModelAndView mav) throws Exception {
		List<String> collectionList = ocrService.getTesseract(file);
		collectionService.insertCollection(collectionList);

		logger.info("파일이름 :" + file.getOriginalFilename());
		logger.info("파일크기 :" + file.getSize());
		logger.info("컨텐트 타입 :" + file.getContentType());

		mav.setViewName("upload/uploadResult");
		mav.addObject("collectionList", collectionList);
		return mav; // uploadResult.jsp로 포워딩
	}

	@RequestMapping("/getCollection")
	public String goGetCollectionPage(Model model) {
		List<Collection> collection = collectionService.getCollection();
		model.addAttribute("collection", collection);

		return "getCollection";
	}

}
