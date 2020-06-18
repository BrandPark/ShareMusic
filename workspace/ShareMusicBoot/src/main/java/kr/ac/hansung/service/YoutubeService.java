package kr.ac.hansung.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import org.springframework.stereotype.Service;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

@Service
public class YoutubeService {

	public String searchSong(String musicName, String singer) throws Exception{
		String apiurl = "https://www.googleapis.com/youtube/v3/search";
		apiurl += "?key=AIzaSyCVRuQ7C3wOyz2IZu8DJm-vClvJAGa0eL8";
		apiurl += "&part=snippet&type=video&maxResults=1&videoEmbeddable=true";
		apiurl += "&videoSyndicated=true";
		
		apiurl += "&q=" + URLEncoder.encode("[MV]" + musicName + singer, "UTF-8");

		URL url = new URL(apiurl);
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setRequestMethod("GET");

		BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
		String inputLine;
		StringBuffer response = new StringBuffer();
		while ((inputLine = br.readLine()) != null) {
//			System.out.println(inputLine);
			response.append(inputLine);
		}
		
		JsonElement jelement = com.google.gson.JsonParser.parseString(response.toString());
		JsonObject  jobject = jelement.getAsJsonObject();
		JsonArray jarray = jobject.getAsJsonArray("items");
		
		jobject = jarray.get(0).getAsJsonObject().get("id").getAsJsonObject();
		
		String videoId = jobject.get("videoId").getAsString();
		
		return videoId;
	}
}