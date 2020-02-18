package kr.ac.hansung.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import kr.ac.hansung.model.Collection;
import kr.ac.hansung.service.CollectionService;

@Controller
public class CollectionController {
	@Autowired
	private CollectionService cService;
	
	@RequestMapping("/insertMusic")
	public String goInsertSongPage() {
		return "insertMusic";
	}
	
	@RequestMapping("/getCollection")
	public String goGetCollectionPage(Model model) {
		List<Collection> collection = cService.getCollection();
		model.addAttribute("collection",collection);
		
		return "getCollection";
	}
	
	@RequestMapping(value="/doInsertMusic", method=RequestMethod.POST)
	public String doInsertMusic(Collection collection) {
		cService.setMusic(collection);
		return "home";
	}
}
