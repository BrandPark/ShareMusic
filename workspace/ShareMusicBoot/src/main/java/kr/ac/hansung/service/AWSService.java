package kr.ac.hansung.service;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.transfer.TransferManager;
import com.amazonaws.services.s3.transfer.TransferManagerBuilder;
import com.amazonaws.services.s3.transfer.Upload;

@Service
public class AWSService {
	
	private AmazonS3 amazonS3;
	private String bucket = "sharemusic-bucket";
	private String accessKey = "AKIAIARWRVYX5FV7KLZA";
	private String secretKey = "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";
	
	public void doUploadFile(MultipartFile file, String folderName, String fileName) {
		amazonS3 = AmazonS3ClientBuilder.standard()
				.withCredentials(new AWSStaticCredentialsProvider(
						new BasicAWSCredentials(accessKey, secretKey)
						))
				.withRegion(Regions.AP_NORTHEAST_2).build();
		
		TransferManager tm = TransferManagerBuilder.standard().withS3Client(amazonS3).build();

		PutObjectRequest request;
		try{
			ObjectMetadata metadata = new ObjectMetadata();
			metadata.setCacheControl("604800"); // 60*60*24*7 일주일
			metadata.setContentType("image/png");
			metadata.setContentLength(file.getBytes().length);
			
			request = new PutObjectRequest(bucket + "/" + folderName, fileName + ".png", file.getInputStream(), metadata)
					.withCannedAcl(CannedAccessControlList.PublicRead);
			// amazonS3.putObject(request);
			Upload upload = tm.upload(request);

			upload.waitForCompletion();
		}catch(IOException e){
			e.printStackTrace();
		}catch(AmazonServiceException e){
			e.printStackTrace();
		}catch(AmazonClientException e)
		{
			e.printStackTrace();
		}catch(InterruptedException e)
		{
			e.printStackTrace();
		}
		
	}
	
	// 파일 삭제
	public void deleteFile(String folderName, String fileName) {
		
		amazonS3 = AmazonS3ClientBuilder.standard()
				.withCredentials(new AWSStaticCredentialsProvider(
						new BasicAWSCredentials(accessKey, secretKey)
						))
				.withRegion(Regions.AP_NORTHEAST_2).build();
		
		fileName = (fileName).replace(File.separatorChar, '/');
		amazonS3.deleteObject(bucket + "/" + folderName, fileName + ".png");
	}
	
	// 폴더 생성 (폴더는 파일명 뒤에 "/"를 붙여야한다.)
	public void createFolder(String folderName) {
		amazonS3 = AmazonS3ClientBuilder.standard()
				.withCredentials(new AWSStaticCredentialsProvider(
						new BasicAWSCredentials(accessKey, secretKey)
						))
				.withRegion(Regions.AP_NORTHEAST_2).build();
		
		amazonS3.putObject(bucket, folderName + "/", new ByteArrayInputStream(new byte[0]), new ObjectMetadata());
	}
	
	// 폴더 삭제 (폴더는 파일명 뒤에 "/"를 붙여야한다.)
	public void deleteFolder(String folder) {
		
		amazonS3 = AmazonS3ClientBuilder.standard()
				.withCredentials(new AWSStaticCredentialsProvider(
						new BasicAWSCredentials(accessKey, secretKey)
						))
				.withRegion(Regions.AP_NORTHEAST_2).build();
		
//		ObjectListing objects = amazonS3.listObjects(bucket,fileName);
//		for(S3ObjectSummary objectSummary : objects.getObjectSummaries()) {
//			System.out.println("summary Key" + objectSummary.getKey());
//			amazonS3.deleteObject(bucket,objectSummary.getKey());
//		}
		
		folder = (folder).replace(File.separatorChar, '/');
		amazonS3.deleteObject(bucket, folder+"/");
	}
	
}
