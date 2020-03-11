package kr.ac.hansung.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

import kr.ac.hansung.model.Collection;
import kr.ac.hansung.service.CollectionService;
import kr.ac.hansung.service.OCRService;

@Controller
public class CollectionController {


	@Autowired
	private OCRService ocrService;
	@Autowired
	private CollectionService collectionService;

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
	public String doUploadImage(MultipartFile file, Model model) throws Exception {
		List<String> collectionList = ocrService.getTesseract(file);
		collectionService.insertCollection(collectionList);

		model.addAttribute("collectionList", collectionList);
		return "upload/uploadResult"; // uploadResult.jsp로 포워딩
	}

	@RequestMapping("/getCollection")
	public String goGetCollectionPage(Model model) {
		List<Collection> collection = collectionService.getCollection();
		model.addAttribute("collection", collection);

		return "getCollection";
	}

}
