package kr.ac.hansung.controller;

import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.transfer.TransferManager;
import com.amazonaws.services.s3.transfer.TransferManagerBuilder;
import com.amazonaws.services.s3.transfer.Upload;

@Controller
public class HomeController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model) {
		return "home";
	}
	
	@PostMapping("/action")
	public String action(MultipartFile file) {

		String bucket = "sharemusic-bucket";
		String accessKey = "AKIAIARWRVYX5FV7KLZA";
		String secretKey = "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";

		AmazonS3 amazonS3 = AmazonS3ClientBuilder.standard()
				.withCredentials(new AWSStaticCredentialsProvider
						(new BasicAWSCredentials(accessKey, secretKey)))
				.withRegion(Regions.AP_NORTHEAST_2).build();
		TransferManager tm = TransferManagerBuilder.standard().withS3Client(amazonS3).build();

		PutObjectRequest request;
		try {

			ObjectMetadata metadata = new ObjectMetadata();
			metadata.setCacheControl("604800"); // 60*60*24*7 일주일
			metadata.setContentType("image/png");
			request = new PutObjectRequest(bucket, file.getOriginalFilename(), file.getInputStream(), metadata)
					.withCannedAcl(CannedAccessControlList.PublicRead);
			// amazonS3.putObject(request);
			Upload upload = tm.upload(request);

			upload.waitForCompletion();
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (AmazonServiceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (AmazonClientException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "redirect:action";
		
	}
}
