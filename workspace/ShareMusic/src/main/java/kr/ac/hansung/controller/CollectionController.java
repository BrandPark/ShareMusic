package kr.ac.hansung.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import kr.ac.hansung.model.Collection;
import kr.ac.hansung.service.CollectionService;
import kr.ac.hansung.service.OCRService;

@Controller
@RequestMapping(value="/upload")
public class CollectionController {


	@Autowired
	private OCRService ocrService;
	@Autowired
	private CollectionService collectionService;

	@RequestMapping(value="/showUploadMusic", method=RequestMethod.GET)
	public String showUploadMusic() {
		return "/upload/col_upload_music";
	}
	@RequestMapping(value = "/doUploadMusic", method = RequestMethod.POST)
	public String doUploadMusic(Collection collection) {
		collectionService.insertMusic(collection);
		return "home";
	}

	@RequestMapping(value = "/showUploadImage", method = RequestMethod.GET)
	public String showUploadImage() {
		return "/upload/col_upload_image";
	}

	@RequestMapping(value = "/doUploadImage", method = RequestMethod.POST)
	public String doUploadImage(MultipartFile file, Model model) throws Exception {
		List<String> collectionList = ocrService.getTesseract(file);
		collectionService.insertCollection(collectionList);

		model.addAttribute("collectionList", collectionList);
		return "upload/col_upload_result"; // uploadResult.jsp로 포워딩
	}

	@RequestMapping("/showCollection")
	public String showCollection(Model model,
			@RequestParam(value="userId", required=true)String userId) {
		List<Collection> collection = collectionService.getCollection(userId);
		model.addAttribute("collection", collection);

		return "upload/col_show_collection";
	}

}
