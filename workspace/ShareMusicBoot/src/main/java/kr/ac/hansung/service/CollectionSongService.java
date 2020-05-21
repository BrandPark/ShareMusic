package kr.ac.hansung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.hansung.dao.CollectionSongDao;
import kr.ac.hansung.model.SongVO;

@Service
public class CollectionSongService {
	
	@Autowired
	private CollectionSongDao songDao;
	
	public int insertCollectionSong(SongVO song) {
		return songDao.insertCollectionSong(song);
	}
	
	public List<SongVO> getCollectionSongs(int cno) {
		return songDao.getCollectionSongs(cno);
	}
	
	public SongVO getCollectionSong(int sno) {
		return songDao.getCollectionSong(sno);
	}
	
	public int updateCollectionSong(SongVO song) {
		return songDao.updateCollectionSong(song);
	}

	public int deleteCollectionSong(int sno) {
		return songDao.deleteCollectionSong(sno);
	}






}
