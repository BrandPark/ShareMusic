package exam2;

import java.awt.image.BufferedImage;
import java.awt.image.RenderedImage;
import java.io.File;

import javax.imageio.ImageIO;

import net.sourceforge.tess4j.Tesseract;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ImageIO.scanForPlugins();
        File file= new File("C:\\test\\images\\song.png");  //이미지 파일 경로 
      
        BufferedImage m = null;         
        try {   
               m = ImageIO.read(file); //이미지 파일을 읽어와서 BufferedImage 에 넣음
        }
        catch(Exception e) {}
//		String extractedString = extractTextFromImage(m);
        extractTextFromImage(m);
	}

	public static void extractTextFromImage(BufferedImage image) {
		RenderedImage img = image;

		String result = null;
		try {
			File outputfile = new File("saved.png");
			ImageIO.write(img, "png", outputfile);
//			System.out.println(outputfile.toString());
			Tesseract instance = new Tesseract(); // JNA Interface Mapping
			instance.setDatapath("C:\\CapstoneD\\tessdata");
			instance.setLanguage("eng+kor");
			result = instance.doOCR(outputfile);

			System.out.println(result);

		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
	}
}
