package exam;

import java.awt.image.BufferedImage;
import java.awt.image.RenderedImage;
import java.io.File;

import javax.imageio.ImageIO;

import net.sourceforge.tess4j.Tesseract;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ImageIO.scanForPlugins();
        File file= new File("/Users/jeon-yongho/Desktop/testsample/test11.png");  //이미지 파일 경로 
      
		String result = null;
		try {
			Tesseract instance = new Tesseract(); // JNA Interface Mapping
			instance.setDatapath("/Users/jeon-yongho/Desktop/ShareMusic/tessdata");
			instance.setLanguage("eng+kor");
			result = instance.doOCR(file);
			System.out.println(result);

		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
	}
}
