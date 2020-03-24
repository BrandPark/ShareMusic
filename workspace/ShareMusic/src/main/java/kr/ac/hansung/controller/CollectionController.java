package kr.ac.hansung.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

import kr.ac.hansung.model.Collection;
import kr.ac.hansung.model.Criteria;
import kr.ac.hansung.model.Song;
import kr.ac.hansung.service.CollectionService;
import kr.ac.hansung.service.OCRService;

@Controller
@RequestMapping(value="/upload")
public class CollectionController {


	@Autowired
	private OCRService ocrService;
	@Autowired
	private CollectionService collectionService;

	@RequestMapping(value="/showUploadMusic", method=RequestMethod.POST)
	public String showUploadMusic(Model model,Criteria cri) {
		return "/upload/col_upload_music";
	}
	
	@RequestMapping(value = "/doUploadMusic", method = RequestMethod.POST)
	public String doUploadMusic(Collection collection) {
		collectionService.insertCollection(collection);
		return "home";
	}

	@RequestMapping(value = "/showUploadImage", method = RequestMethod.POST)
	public String showUploadImage() {
		return "/upload/col_upload_image";
	}

	@RequestMapping(value = "/doUploadImage", method = RequestMethod.POST)
	public String doUploadImage(MultipartFile file,Collection collection,Model model) throws Exception {
		List<Song> songs = ocrService.getTesseract(file);
		collection.setSongs(songs);
		collectionService.insertCollection(collection);
		return "home"; // uploadResult.jsp로 포워딩
	}

	
	@RequestMapping(value = "/showCollection", method = RequestMethod.POST)
	public String showCollection(Model model,Criteria cri,Principal principal) {
//		System.out.println(principal.getName() + " <---- Users name");
		List<String> collectionNames = collectionService.getCollectionName(cri);
		model.addAttribute("collectionList",collectionNames);
		return "upload/col_show_collection";
	}

}
