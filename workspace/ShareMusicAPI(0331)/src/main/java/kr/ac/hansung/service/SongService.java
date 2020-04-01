package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.SongDao;
import kr.ac.hansung.model.SongVO;

@Service
public class SongService {
	
	@Autowired
	private SongDao songDao;
	
	public int insertSong(SongVO song) {
		return songDao.insertSong(song);
	}
	
	public List<SongVO> getSongs(int cno) {
		return songDao.getSongs(cno);
	}
	
	public int modify(SongVO song) {
		return songDao.modify(song);
	}

	public int removeSong(int sno) {
		return songDao.removeSong(sno);
	}






}
