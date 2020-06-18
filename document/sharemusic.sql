CREATE DATABASE  IF NOT EXISTS `sharemusic` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sharemusic`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: sharemusic
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_authorities`
--

DROP TABLE IF EXISTS `tb_authorities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_authorities` (
  `user_id` varchar(20) NOT NULL,
  `authority` varchar(20) NOT NULL DEFAULT 'ROLE_USER',
  PRIMARY KEY (`user_id`,`authority`),
  CONSTRAINT `tb_authorities_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tb_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_authorities`
--

LOCK TABLES `tb_authorities` WRITE;
/*!40000 ALTER TABLE `tb_authorities` DISABLE KEYS */;
INSERT INTO `tb_authorities` VALUES ('admin','ROLE_ADMIN'),('admin','ROLE_USER'),('admin2','ROLE_USER'),('admin3','ROLE_USER'),('amine','ROLE_USER'),('candy','ROLE_USER'),('cosmicboy','ROLE_USER'),('crush92','ROLE_USER'),('faker','ROLE_USER'),('giriboy91','ROLE_USER'),('gudtnzz','ROLE_USER'),('haein12','ROLE_USER'),('hs950823','ROLE_USER'),('hwamin','ROLE_USER'),('hyoungsoo','ROLE_USER'),('introuble','ROLE_USER'),('jeremy','ROLE_USER'),('jpark','ROLE_USER'),('jupiter0830','ROLE_USER'),('jyh2','ROLE_USER'),('kej111','ROLE_USER'),('lazyguy','ROLE_USER'),('lck0823','ROLE_USER'),('lec888','ROLE_USER'),('lilpump','ROLE_USER'),('lpl0777','ROLE_USER'),('mingon','ROLE_USER'),('minji00','ROLE_USER'),('minsoo','ROLE_USER'),('minwoo','ROLE_USER'),('moon12','ROLE_USER'),('nana123','ROLE_USER'),('nayeon','ROLE_USER'),('nykim','ROLE_USER'),('ph1','ROLE_USER'),('ruddl2','ROLE_USER'),('trump12','ROLE_USER'),('yeeun1203','ROLE_USER'),('yongho','ROLE_USER');
/*!40000 ALTER TABLE `tb_authorities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_collection`
--

DROP TABLE IF EXISTS `tb_collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_collection` (
  `cno` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(20) NOT NULL,
  `col_name` varchar(100) NOT NULL,
  `reg_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `mod_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cno`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tb_collection_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tb_user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_collection`
--

LOCK TABLES `tb_collection` WRITE;
/*!40000 ALTER TABLE `tb_collection` DISABLE KEYS */;
INSERT INTO `tb_collection` VALUES (104,'gudtnzz','love collection','2020-06-07 19:19:34','2020-06-07 19:23:04'),(123,'gudtnzz','midnight collection','2020-06-14 23:13:09','2020-06-14 23:13:09'),(124,'yongho','At The Sea','2020-06-15 01:07:37','2020-06-15 01:07:37'),(125,'yongho','just lazy day','2020-06-15 01:09:37','2020-06-15 01:09:37'),(126,'yongho','Classic Collection','2020-06-15 01:10:59','2020-06-15 01:10:59'),(127,'yongho','Study Collection','2020-06-15 01:11:58','2020-06-15 01:11:58'),(128,'yongho','Party Collection','2020-06-15 01:13:39','2020-06-15 01:13:39'),(129,'yongho','My Favorite','2020-06-15 01:18:33','2020-06-15 01:18:33'),(130,'yongho','Camping','2020-06-15 01:30:41','2020-06-15 01:30:41'),(133,'yongho','Drive Collection','2020-06-15 01:34:55','2020-06-15 01:34:55'),(134,'yongho','Coffee','2020-06-15 01:36:48','2020-06-15 01:36:48'),(135,'yongho','Holiday','2020-06-15 01:36:48','2020-06-15 01:36:48'),(136,'gudtnzz','Shower','2020-06-15 01:48:06','2020-06-15 01:48:06'),(137,'gudtnzz','Drive','2020-06-15 01:48:06','2020-06-15 01:48:06'),(138,'gudtnzz','Study','2020-06-15 01:48:06','2020-06-15 01:48:06'),(139,'gudtnzz','hiphop','2020-06-15 01:48:06','2020-06-15 01:48:06'),(140,'gudtnzz','holiday','2020-06-15 01:48:06','2020-06-15 01:48:06'),(141,'gudtnzz','Cafe','2020-06-15 01:48:06','2020-06-15 01:48:06'),(142,'gudtnzz','Drive2','2020-06-15 01:48:06','2020-06-15 01:48:06'),(143,'gudtnzz','Jazz Collection','2020-06-15 01:48:06','2020-06-15 01:48:06'),(144,'gudtnzz','blue','2020-06-15 01:48:06','2020-06-15 01:48:06'),(145,'gudtnzz','soul','2020-06-15 01:48:06','2020-06-15 01:58:37'),(146,'gudtnzz','sad','2020-06-15 01:49:27','2020-06-15 01:58:37'),(147,'cosmicboy','confidence','2020-06-15 02:44:27','2020-06-15 02:44:27'),(148,'cosmicboy','space trip','2020-06-15 02:44:57','2020-06-15 02:44:57'),(149,'amine','drive collection','2020-06-15 02:45:28','2020-06-15 02:45:28'),(150,'jpark','dance collection','2020-06-15 02:46:11','2020-06-15 02:46:11'),(151,'mingon','My Favorite','2020-06-15 02:46:32','2020-06-15 02:46:32'),(152,'admin','Jazz Collection','2020-06-15 02:48:51','2020-06-15 02:48:51'),(153,'minwoo','Study Collection','2020-06-15 02:49:30','2020-06-15 02:49:30'),(154,'giriboy91','space trip','2020-06-15 02:51:52','2020-06-15 02:51:52'),(156,'yongho','Trot Collection','2020-06-15 05:03:10','2020-06-15 05:03:10');
/*!40000 ALTER TABLE `tb_collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_collection_like`
--

DROP TABLE IF EXISTS `tb_collection_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_collection_like` (
  `cno` int(11) NOT NULL,
  `from_user_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`cno`,`from_user_id`),
  CONSTRAINT `fk_tb_collection_like_cno` FOREIGN KEY (`cno`) REFERENCES `tb_collection` (`cno`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_collection_like`
--

LOCK TABLES `tb_collection_like` WRITE;
/*!40000 ALTER TABLE `tb_collection_like` DISABLE KEYS */;
INSERT INTO `tb_collection_like` VALUES (104,'admin'),(104,'gudtnzz'),(104,'yongho'),(123,'admin'),(123,'gudtnzz'),(123,'yongho'),(124,'yongho'),(125,'yongho'),(126,'yongho'),(127,'yongho'),(147,'admin'),(147,'amine'),(147,'faker'),(147,'giriboy91'),(147,'gudtnzz'),(147,'hwamin'),(147,'introuble'),(147,'jpark'),(147,'jyh2'),(147,'kej111'),(147,'lazyguy'),(147,'lck0823'),(147,'lec888'),(147,'lpl0777'),(147,'mingon'),(147,'minwoo'),(147,'moon12'),(147,'nana123'),(147,'nayeon'),(147,'nykim'),(147,'ph1'),(147,'ruddl2'),(147,'trump12'),(147,'yeeun1203'),(147,'yongho'),(148,'admin'),(148,'faker'),(148,'gudtnzz'),(148,'introuble'),(148,'jpark'),(148,'jyh2'),(148,'kej111'),(148,'lazyguy'),(148,'lck0823'),(148,'lec888'),(148,'moon12'),(148,'nana123'),(148,'nayeon'),(148,'nykim'),(148,'ph1'),(148,'ruddl2'),(148,'trump12'),(148,'yeeun1203'),(149,'admin2'),(149,'admin3'),(149,'faker'),(149,'introuble'),(149,'jpark'),(149,'jyh2'),(149,'kej111'),(149,'lazyguy'),(149,'lck0823'),(149,'lec888'),(149,'lilpump'),(149,'moon12'),(149,'nana123'),(149,'nayeon'),(149,'nykim'),(149,'ph1'),(149,'ruddl2'),(149,'trump12'),(149,'yeeun1203'),(150,'admin2'),(150,'admin3'),(150,'faker'),(150,'introuble'),(150,'jpark'),(150,'jyh2'),(150,'kej111'),(150,'lazyguy'),(150,'lck0823'),(150,'lec888'),(150,'lilpump'),(150,'moon12'),(150,'nana123'),(150,'nayeon'),(150,'nykim'),(150,'ph1'),(150,'ruddl2'),(150,'trump12'),(150,'yeeun1203'),(151,'admin2'),(151,'faker'),(151,'gudtnzz'),(151,'introuble'),(151,'jpark'),(151,'jyh2'),(151,'kej111'),(151,'lazyguy'),(151,'lck0823'),(151,'lec888'),(151,'moon12'),(151,'nana123'),(151,'nayeon'),(151,'nykim'),(151,'ph1'),(151,'ruddl2'),(151,'trump12'),(151,'yeeun1203'),(152,'faker'),(152,'jyh2'),(152,'nana123'),(152,'nayeon'),(152,'nykim'),(152,'ruddl2'),(152,'yeeun1203'),(153,'admin2'),(153,'admin3'),(153,'faker'),(153,'introuble'),(153,'jpark'),(153,'jyh2'),(153,'kej111'),(153,'lazyguy'),(153,'lck0823'),(153,'lec888'),(153,'lilpump'),(153,'moon12'),(153,'nana123'),(153,'nayeon'),(153,'nykim'),(153,'ph1'),(153,'ruddl2'),(153,'trump12'),(153,'yeeun1203'),(154,'admin2'),(154,'admin3'),(154,'faker'),(154,'hs950823'),(154,'introuble'),(154,'jpark'),(154,'jyh2'),(154,'kej111'),(154,'lazyguy'),(154,'lck0823'),(154,'lec888'),(154,'lilpump'),(154,'minji00'),(154,'minsoo'),(154,'moon12'),(154,'nana123'),(154,'nayeon'),(154,'nykim'),(154,'ph1'),(154,'ruddl2'),(154,'trump12'),(154,'yeeun1203'),(154,'yongho');
/*!40000 ALTER TABLE `tb_collection_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_collection_reply`
--

DROP TABLE IF EXISTS `tb_collection_reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_collection_reply` (
  `rno` int(11) NOT NULL AUTO_INCREMENT,
  `cno` int(11) NOT NULL,
  `from_user_id` varchar(20) NOT NULL,
  `content` varchar(200) NOT NULL,
  `reg_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `mod_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`rno`),
  KEY `fk_tb_collection_reply_idx` (`cno`),
  KEY `fk_tb_collection_reply_from_user_id_idx` (`from_user_id`),
  CONSTRAINT `fk_tb_collection_reply_cno` FOREIGN KEY (`cno`) REFERENCES `tb_collection` (`cno`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_collection_reply`
--

LOCK TABLES `tb_collection_reply` WRITE;
/*!40000 ALTER TABLE `tb_collection_reply` DISABLE KEYS */;
INSERT INTO `tb_collection_reply` VALUES (22,104,'mingon','제 취향입니다 !!!','2020-06-11 14:17:01','2020-06-11 14:17:01'),(24,104,'yeeun1203','항상 잘 듣고 있습니다. 다음에 또 새로운 컬렉션 등록하실 생각 없나요?? 기다리고 있을게요~ㅎㅎㅎㅎ','2020-06-11 14:18:09','2020-06-11 14:18:09'),(25,104,'gudtnzz','조만간 또 좋은 컬렉션 올려볼게요 ㅎ_ㅎ','2020-06-11 14:18:41','2020-06-11 14:18:41'),(26,104,'yongho','좋아요ㅜ','2020-06-11 14:19:00','2020-06-11 14:19:00'),(29,151,'minwoo','좋아요ㅜ','2020-06-15 04:07:05','2020-06-15 04:07:05'),(30,151,'yongho','저랑 취향이 비슷하시네요','2020-06-15 04:07:05','2020-06-15 04:07:05'),(31,151,'mingon','잘 들어주셔서 감사합니다^^ 다른 컬렉션도 많아요 !!','2020-06-15 04:07:05','2020-06-15 04:07:05'),(32,151,'nayeon','잘 들었어요','2020-06-15 04:07:05','2020-06-15 04:07:05'),(33,151,'yeeun1203','항상 잘 듣고있어요 ㅎㅎㅎ','2020-06-15 04:07:05','2020-06-15 04:07:05'),(34,151,'minji00','좋아요','2020-06-15 04:07:05','2020-06-15 04:07:05'),(35,151,'cosmicboy','제 컬렉션도 들으러 오세요 !','2020-06-15 04:07:05','2020-06-15 04:07:05'),(36,151,'ruddl2','마음에 들어요!','2020-06-15 04:08:22','2020-06-15 04:08:22'),(37,151,'gudtnzz','잘 들었습니다.','2020-06-15 04:17:27','2020-06-15 04:17:27');
/*!40000 ALTER TABLE `tb_collection_reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_collection_song`
--

DROP TABLE IF EXISTS `tb_collection_song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_collection_song` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `cno` int(11) NOT NULL,
  `music_name` varchar(100) NOT NULL,
  `singer` varchar(100) NOT NULL,
  `video_id` varchar(100) NOT NULL,
  PRIMARY KEY (`sno`),
  KEY `FOREIGN` (`cno`),
  CONSTRAINT `fk_tb_collection_song_cno` FOREIGN KEY (`cno`) REFERENCES `tb_collection` (`cno`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=737 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_collection_song`
--

LOCK TABLES `tb_collection_song` WRITE;
/*!40000 ALTER TABLE `tb_collection_song` DISABLE KEYS */;
INSERT INTO `tb_collection_song` VALUES (99,104,'자나깨나','Crush','29ycT6fA-Rs'),(100,104,'blue','BIGBANG','2GRP1rkE4O0'),(101,104,'Say So','Doja Cat','ZALu6OJwAKs'),(102,104,'What 2 Do','Dean','Ov6mkITfons'),(103,104,'나빠','Crush','OoMIAo0a2TA'),(104,104,'잊어버리지마','Crush','TcytstV1_XE'),(105,104,'헨리','끌리는 대로','6DyOU81eSSA'),(106,104,'멀로','Nafla','PihTVfhdQpI'),(107,104,'가게송','Nafla','GqhQS7bsV1Y'),(141,123,'가시나무','자우림','s6pY_QUAtb8'),(142,123,'가시나무','자우림','s6pY_QUAtb8'),(143,123,'가시나무','자우림','s6pY_QUAtb8'),(144,123,'가시나무','자우림','s6pY_QUAtb8'),(145,123,'가시나무','자우림','s6pY_QUAtb8'),(146,123,'가시나무','자우림','s6pY_QUAtb8'),(147,123,'가시나무','자우림','s6pY_QUAtb8'),(148,123,'가시나무','자우림','s6pY_QUAtb8'),(149,123,'가시나무','자우림','s6pY_QUAtb8'),(150,123,'가시나무','자우림','s6pY_QUAtb8'),(151,123,'가시나무','자우림','s6pY_QUAtb8'),(152,123,'가시나무','자우림','s6pY_QUAtb8'),(153,123,'가시나무','자우림','s6pY_QUAtb8'),(154,123,'가시나무','자우림','s6pY_QUAtb8'),(155,123,'가시나무','자우림','s6pY_QUAtb8'),(156,123,'가시나무','자우림','s6pY_QUAtb8'),(157,123,'가시나무','자우림','s6pY_QUAtb8'),(158,123,'가시나무','자우림','s6pY_QUAtb8'),(159,123,'가시나무','자우림','s6pY_QUAtb8'),(160,124,'가시','버즈','Omv4bjbpK04'),(161,124,'가시','버즈','Omv4bjbpK04'),(162,124,'가시','버즈','Omv4bjbpK04'),(163,124,'가시','버즈','Omv4bjbpK04'),(164,124,'가시','버즈','Omv4bjbpK04'),(165,124,'가시','버즈','Omv4bjbpK04'),(166,124,'가시','버즈','Omv4bjbpK04'),(167,124,'가시','버즈','Omv4bjbpK04'),(168,124,'가시','버즈','Omv4bjbpK04'),(169,124,'가시','버즈','Omv4bjbpK04'),(170,124,'가시','버즈','Omv4bjbpK04'),(171,124,'가시','버즈','Omv4bjbpK04'),(172,124,'가시','버즈','Omv4bjbpK04'),(173,124,'가시','버즈','Omv4bjbpK04'),(174,124,'가시','버즈','Omv4bjbpK04'),(175,125,'가시','버즈','Omv4bjbpK04'),(176,125,'가시','버즈','Omv4bjbpK04'),(177,125,'가시','버즈','Omv4bjbpK04'),(178,125,'가시','버즈','Omv4bjbpK04'),(179,125,'가시','버즈','Omv4bjbpK04'),(180,125,'가시','버즈','Omv4bjbpK04'),(181,125,'가시','버즈','Omv4bjbpK04'),(182,125,'가시','버즈','Omv4bjbpK04'),(183,125,'가시','버즈','Omv4bjbpK04'),(184,125,'가시','버즈','Omv4bjbpK04'),(185,125,'가시','버즈','Omv4bjbpK04'),(186,126,'가시','버즈','Omv4bjbpK04'),(187,126,'가시','버즈','Omv4bjbpK04'),(188,126,'가시','버즈','Omv4bjbpK04'),(189,126,'가시','버즈','Omv4bjbpK04'),(190,126,'가시','버즈','Omv4bjbpK04'),(191,126,'가시','버즈','Omv4bjbpK04'),(192,126,'가시','버즈','Omv4bjbpK04'),(193,126,'가시','버즈','Omv4bjbpK04'),(194,126,'가시','버즈','Omv4bjbpK04'),(195,126,'가시','버즈','Omv4bjbpK04'),(196,126,'가시','버즈','Omv4bjbpK04'),(197,127,'가시','버즈','Omv4bjbpK04'),(198,127,'가시','버즈','Omv4bjbpK04'),(199,127,'가시','버즈','Omv4bjbpK04'),(200,127,'가시','버즈','Omv4bjbpK04'),(201,127,'가시','버즈','Omv4bjbpK04'),(202,127,'가시','버즈','Omv4bjbpK04'),(203,127,'가시','버즈','Omv4bjbpK04'),(204,128,'가시','버즈','Omv4bjbpK04'),(205,128,'가시','버즈','Omv4bjbpK04'),(206,128,'가시','버즈','Omv4bjbpK04'),(207,128,'가시','버즈','Omv4bjbpK04'),(208,128,'가시','버즈','Omv4bjbpK04'),(209,128,'가시','버즈','Omv4bjbpK04'),(210,128,'가시','버즈','Omv4bjbpK04'),(211,128,'가시','버즈','Omv4bjbpK04'),(212,129,'가시','버즈','Omv4bjbpK04'),(213,129,'가시','버즈','Omv4bjbpK04'),(214,129,'가시','버즈','Omv4bjbpK04'),(215,129,'가시','버즈','Omv4bjbpK04'),(216,129,'가시','버즈','Omv4bjbpK04'),(217,129,'가시','버즈','Omv4bjbpK04'),(218,129,'가시','버즈','Omv4bjbpK04'),(221,130,'가시','버즈','Omv4bjbpK04'),(222,130,'가시','버즈','Omv4bjbpK04'),(223,130,'가시','버즈','Omv4bjbpK04'),(224,130,'가시','버즈','Omv4bjbpK04'),(225,130,'가시','버즈','Omv4bjbpK04'),(226,130,'가시','버즈','Omv4bjbpK04'),(227,130,'가시','버즈','Omv4bjbpK04'),(228,130,'가시','버즈','Omv4bjbpK04'),(229,130,'가시','버즈','Omv4bjbpK04'),(230,130,'가시','버즈','Omv4bjbpK04'),(231,130,'가시','버즈','Omv4bjbpK04'),(232,130,'가시','버즈','Omv4bjbpK04'),(233,130,'가시','버즈','Omv4bjbpK04'),(234,130,'가시','버즈','Omv4bjbpK04'),(235,133,'가시','버즈','Omv4bjbpK04'),(236,133,'가시','버즈','Omv4bjbpK04'),(237,133,'가시','버즈','Omv4bjbpK04'),(238,133,'가시','버즈','Omv4bjbpK04'),(239,133,'가시','버즈','Omv4bjbpK04'),(240,130,'가시','버즈','Omv4bjbpK04'),(241,133,'가시','버즈','Omv4bjbpK04'),(242,133,'가시','버즈','Omv4bjbpK04'),(243,133,'가시','버즈','Omv4bjbpK04'),(244,133,'가시','버즈','Omv4bjbpK04'),(245,133,'가시','버즈','Omv4bjbpK04'),(246,133,'가시','버즈','Omv4bjbpK04'),(247,130,'가시','버즈','Omv4bjbpK04'),(248,133,'가시','버즈','Omv4bjbpK04'),(249,133,'가시','버즈','Omv4bjbpK04'),(250,133,'가시','버즈','Omv4bjbpK04'),(251,133,'가시','버즈','Omv4bjbpK04'),(252,133,'가시','버즈','Omv4bjbpK04'),(253,133,'가시','버즈','Omv4bjbpK04'),(254,130,'가시','버즈','Omv4bjbpK04'),(255,133,'가시','버즈','Omv4bjbpK04'),(256,134,'가시','버즈','Omv4bjbpK04'),(257,134,'가시','버즈','Omv4bjbpK04'),(258,134,'가시','버즈','Omv4bjbpK04'),(259,134,'가시','버즈','Omv4bjbpK04'),(260,134,'가시','버즈','Omv4bjbpK04'),(261,134,'가시','버즈','Omv4bjbpK04'),(262,134,'가시','버즈','Omv4bjbpK04'),(263,134,'가시','버즈','Omv4bjbpK04'),(264,134,'가시','버즈','Omv4bjbpK04'),(265,134,'가시','버즈','Omv4bjbpK04'),(266,134,'가시','버즈','Omv4bjbpK04'),(267,134,'가시','버즈','Omv4bjbpK04'),(268,134,'가시','버즈','Omv4bjbpK04'),(269,134,'가시','버즈','Omv4bjbpK04'),(270,134,'가시','버즈','Omv4bjbpK04'),(271,134,'가시','버즈','Omv4bjbpK04'),(272,134,'가시','버즈','Omv4bjbpK04'),(273,134,'가시','버즈','Omv4bjbpK04'),(274,134,'가시','버즈','Omv4bjbpK04'),(275,135,'가시','버즈','Omv4bjbpK04'),(276,135,'가시','버즈','Omv4bjbpK04'),(277,135,'가시','버즈','Omv4bjbpK04'),(278,135,'가시','버즈','Omv4bjbpK04'),(279,135,'가시','버즈','Omv4bjbpK04'),(280,135,'가시','버즈','Omv4bjbpK04'),(281,135,'가시','버즈','Omv4bjbpK04'),(282,135,'가시','버즈','Omv4bjbpK04'),(283,135,'가시','버즈','Omv4bjbpK04'),(284,135,'가시','버즈','Omv4bjbpK04'),(285,135,'가시','버즈','Omv4bjbpK04'),(286,135,'가시','버즈','Omv4bjbpK04'),(287,135,'가시','버즈','Omv4bjbpK04'),(288,135,'가시','버즈','Omv4bjbpK04'),(289,135,'가시','버즈','Omv4bjbpK04'),(290,135,'가시','버즈','Omv4bjbpK04'),(291,135,'가시','버즈','Omv4bjbpK04'),(292,135,'가시','버즈','Omv4bjbpK04'),(293,135,'가시','버즈','Omv4bjbpK04'),(294,135,'가시','버즈','Omv4bjbpK04'),(329,137,'가시','버즈','Omv4bjbpK04'),(330,136,'가시','버즈','Omv4bjbpK04'),(331,137,'가시','버즈','Omv4bjbpK04'),(332,136,'가시','버즈','Omv4bjbpK04'),(333,137,'가시','버즈','Omv4bjbpK04'),(334,136,'가시','버즈','Omv4bjbpK04'),(335,137,'가시','버즈','Omv4bjbpK04'),(336,136,'가시','버즈','Omv4bjbpK04'),(337,137,'가시','버즈','Omv4bjbpK04'),(338,136,'가시','버즈','Omv4bjbpK04'),(339,137,'가시','버즈','Omv4bjbpK04'),(340,136,'가시','버즈','Omv4bjbpK04'),(341,137,'가시','버즈','Omv4bjbpK04'),(342,136,'가시','버즈','Omv4bjbpK04'),(343,137,'가시','버즈','Omv4bjbpK04'),(344,136,'가시','버즈','Omv4bjbpK04'),(345,137,'가시','버즈','Omv4bjbpK04'),(346,136,'가시','버즈','Omv4bjbpK04'),(347,137,'가시','버즈','Omv4bjbpK04'),(348,136,'가시','버즈','Omv4bjbpK04'),(349,137,'가시','버즈','Omv4bjbpK04'),(350,136,'가시','버즈','Omv4bjbpK04'),(351,137,'가시','버즈','Omv4bjbpK04'),(352,136,'가시','버즈','Omv4bjbpK04'),(353,137,'가시','버즈','Omv4bjbpK04'),(354,136,'가시','버즈','Omv4bjbpK04'),(355,137,'가시','버즈','Omv4bjbpK04'),(356,136,'가시','버즈','Omv4bjbpK04'),(357,137,'가시','버즈','Omv4bjbpK04'),(358,136,'가시','버즈','Omv4bjbpK04'),(359,137,'가시','버즈','Omv4bjbpK04'),(360,136,'가시','버즈','Omv4bjbpK04'),(361,137,'가시','버즈','Omv4bjbpK04'),(362,136,'가시','버즈','Omv4bjbpK04'),(363,137,'가시','버즈','Omv4bjbpK04'),(364,136,'가시','버즈','Omv4bjbpK04'),(365,137,'가시','버즈','Omv4bjbpK04'),(366,136,'가시','버즈','Omv4bjbpK04'),(367,138,'가시','버즈','Omv4bjbpK04'),(368,138,'가시','버즈','Omv4bjbpK04'),(369,138,'가시','버즈','Omv4bjbpK04'),(370,138,'가시','버즈','Omv4bjbpK04'),(371,138,'가시','버즈','Omv4bjbpK04'),(372,138,'가시','버즈','Omv4bjbpK04'),(373,138,'가시','버즈','Omv4bjbpK04'),(374,138,'가시','버즈','Omv4bjbpK04'),(375,138,'가시','버즈','Omv4bjbpK04'),(376,138,'가시','버즈','Omv4bjbpK04'),(377,138,'가시','버즈','Omv4bjbpK04'),(378,138,'가시','버즈','Omv4bjbpK04'),(379,138,'가시','버즈','Omv4bjbpK04'),(380,138,'가시','버즈','Omv4bjbpK04'),(381,138,'가시','버즈','Omv4bjbpK04'),(382,138,'가시','버즈','Omv4bjbpK04'),(383,138,'가시','버즈','Omv4bjbpK04'),(384,138,'가시','버즈','Omv4bjbpK04'),(385,138,'가시','버즈','Omv4bjbpK04'),(386,138,'가시','버즈','Omv4bjbpK04'),(387,138,'가시','버즈','Omv4bjbpK04'),(388,138,'가시','버즈','Omv4bjbpK04'),(389,138,'가시','버즈','Omv4bjbpK04'),(390,138,'가시','버즈','Omv4bjbpK04'),(391,138,'가시','버즈','Omv4bjbpK04'),(392,138,'가시','버즈','Omv4bjbpK04'),(393,139,'가시','버즈','Omv4bjbpK04'),(394,139,'가시','버즈','Omv4bjbpK04'),(395,139,'가시','버즈','Omv4bjbpK04'),(396,139,'가시','버즈','Omv4bjbpK04'),(397,139,'가시','버즈','Omv4bjbpK04'),(398,139,'가시','버즈','Omv4bjbpK04'),(399,139,'가시','버즈','Omv4bjbpK04'),(400,139,'가시','버즈','Omv4bjbpK04'),(401,139,'가시','버즈','Omv4bjbpK04'),(402,139,'가시','버즈','Omv4bjbpK04'),(403,139,'가시','버즈','Omv4bjbpK04'),(404,139,'가시','버즈','Omv4bjbpK04'),(405,139,'가시','버즈','Omv4bjbpK04'),(406,139,'가시','버즈','Omv4bjbpK04'),(407,139,'가시','버즈','Omv4bjbpK04'),(408,139,'가시','버즈','Omv4bjbpK04'),(409,140,'가시','버즈','Omv4bjbpK04'),(410,140,'가시','버즈','Omv4bjbpK04'),(411,140,'가시','버즈','Omv4bjbpK04'),(412,140,'가시','버즈','Omv4bjbpK04'),(413,140,'가시','버즈','Omv4bjbpK04'),(414,140,'가시','버즈','Omv4bjbpK04'),(415,140,'가시','버즈','Omv4bjbpK04'),(416,140,'가시','버즈','Omv4bjbpK04'),(417,140,'가시','버즈','Omv4bjbpK04'),(418,140,'가시','버즈','Omv4bjbpK04'),(419,140,'가시','버즈','Omv4bjbpK04'),(420,140,'가시','버즈','Omv4bjbpK04'),(421,140,'가시','버즈','Omv4bjbpK04'),(422,140,'가시','버즈','Omv4bjbpK04'),(423,140,'가시','버즈','Omv4bjbpK04'),(424,140,'가시','버즈','Omv4bjbpK04'),(425,140,'가시','버즈','Omv4bjbpK04'),(426,140,'가시','버즈','Omv4bjbpK04'),(427,141,'가시','버즈','Omv4bjbpK04'),(428,141,'가시','버즈','Omv4bjbpK04'),(429,141,'가시','버즈','Omv4bjbpK04'),(430,141,'가시','버즈','Omv4bjbpK04'),(431,141,'가시','버즈','Omv4bjbpK04'),(432,141,'가시','버즈','Omv4bjbpK04'),(433,141,'가시','버즈','Omv4bjbpK04'),(434,141,'가시','버즈','Omv4bjbpK04'),(435,141,'가시','버즈','Omv4bjbpK04'),(436,141,'가시','버즈','Omv4bjbpK04'),(437,141,'가시','버즈','Omv4bjbpK04'),(438,141,'가시','버즈','Omv4bjbpK04'),(439,141,'가시','버즈','Omv4bjbpK04'),(440,141,'가시','버즈','Omv4bjbpK04'),(441,141,'가시','버즈','Omv4bjbpK04'),(442,141,'가시','버즈','Omv4bjbpK04'),(443,141,'가시','버즈','Omv4bjbpK04'),(444,141,'가시','버즈','Omv4bjbpK04'),(445,141,'가시','버즈','Omv4bjbpK04'),(446,142,'가시','버즈','Omv4bjbpK04'),(447,142,'가시','버즈','Omv4bjbpK04'),(448,142,'가시','버즈','Omv4bjbpK04'),(449,142,'가시','버즈','Omv4bjbpK04'),(450,142,'가시','버즈','Omv4bjbpK04'),(451,142,'가시','버즈','Omv4bjbpK04'),(452,142,'가시','버즈','Omv4bjbpK04'),(453,142,'가시','버즈','Omv4bjbpK04'),(454,142,'가시','버즈','Omv4bjbpK04'),(455,142,'가시','버즈','Omv4bjbpK04'),(456,142,'가시','버즈','Omv4bjbpK04'),(457,142,'가시','버즈','Omv4bjbpK04'),(458,142,'가시','버즈','Omv4bjbpK04'),(459,142,'가시','버즈','Omv4bjbpK04'),(460,142,'가시','버즈','Omv4bjbpK04'),(461,142,'가시','버즈','Omv4bjbpK04'),(462,142,'가시','버즈','Omv4bjbpK04'),(463,143,'가시','버즈','Omv4bjbpK04'),(464,143,'가시','버즈','Omv4bjbpK04'),(465,143,'가시','버즈','Omv4bjbpK04'),(466,143,'가시','버즈','Omv4bjbpK04'),(467,143,'가시','버즈','Omv4bjbpK04'),(468,143,'가시','버즈','Omv4bjbpK04'),(469,143,'가시','버즈','Omv4bjbpK04'),(470,143,'가시','버즈','Omv4bjbpK04'),(471,143,'가시','버즈','Omv4bjbpK04'),(472,143,'가시','버즈','Omv4bjbpK04'),(473,143,'가시','버즈','Omv4bjbpK04'),(474,143,'가시','버즈','Omv4bjbpK04'),(475,143,'가시','버즈','Omv4bjbpK04'),(476,143,'가시','버즈','Omv4bjbpK04'),(477,143,'가시','버즈','Omv4bjbpK04'),(478,143,'가시','버즈','Omv4bjbpK04'),(479,143,'가시','버즈','Omv4bjbpK04'),(480,143,'가시','버즈','Omv4bjbpK04'),(481,144,'가시','버즈','Omv4bjbpK04'),(482,144,'가시','버즈','Omv4bjbpK04'),(483,144,'가시','버즈','Omv4bjbpK04'),(484,144,'가시','버즈','Omv4bjbpK04'),(485,144,'가시','버즈','Omv4bjbpK04'),(486,144,'가시','버즈','Omv4bjbpK04'),(487,144,'가시','버즈','Omv4bjbpK04'),(488,144,'가시','버즈','Omv4bjbpK04'),(489,144,'가시','버즈','Omv4bjbpK04'),(490,144,'가시','버즈','Omv4bjbpK04'),(491,144,'가시','버즈','Omv4bjbpK04'),(492,144,'가시','버즈','Omv4bjbpK04'),(493,144,'가시','버즈','Omv4bjbpK04'),(494,144,'가시','버즈','Omv4bjbpK04'),(495,144,'가시','버즈','Omv4bjbpK04'),(496,145,'가시','버즈','Omv4bjbpK04'),(497,145,'가시','버즈','Omv4bjbpK04'),(498,145,'가시','버즈','Omv4bjbpK04'),(499,145,'가시','버즈','Omv4bjbpK04'),(500,145,'가시','버즈','Omv4bjbpK04'),(501,145,'가시','버즈','Omv4bjbpK04'),(502,145,'가시','버즈','Omv4bjbpK04'),(503,145,'가시','버즈','Omv4bjbpK04'),(504,145,'가시','버즈','Omv4bjbpK04'),(505,145,'가시','버즈','Omv4bjbpK04'),(506,145,'가시','버즈','Omv4bjbpK04'),(507,145,'가시','버즈','Omv4bjbpK04'),(508,145,'가시','버즈','Omv4bjbpK04'),(509,145,'가시','버즈','Omv4bjbpK04'),(510,145,'가시','버즈','Omv4bjbpK04'),(511,145,'가시','버즈','Omv4bjbpK04'),(512,145,'가시','버즈','Omv4bjbpK04'),(513,146,'가끔','Crush','VN4EusA9zmE'),(514,146,'What 2 Do','Dean','gMrYfJGm7kM'),(515,146,'주저하는 연인들을 위해','잔나비','TntA4zf3YRc'),(516,146,'merlot','Nafla','PihTVfhdQpI'),(517,146,'슬픈 노래만 들어','Nafla','mVtl9Fe-qM4'),(518,146,'Lucid Dreams','Juice WRLD','mzB1VGEGcSU'),(519,146,'가시','버즈','Omv4bjbpK04'),(520,146,'SAD!','XXXTENTACION','pgN-vvVVxMA'),(521,146,'Can I Love ?','Cosmic Boy','HmKgFJGn46Q'),(522,146,'넌','Crush','ywOFgvlGbTM'),(523,146,'BLUE','Kid Milli','pLAZzNrn1pc'),(524,146,'daddy','Kid Milli','8cYUMMxaqMY'),(525,146,'하려고해고백','죠지','6fWYgAbdFDw'),(526,146,'연애소설','EPIK HIGH','Z3INNjAEqHk'),(527,147,'가시','버즈','Omv4bjbpK04'),(528,147,'가시','버즈','Omv4bjbpK04'),(529,147,'가시','버즈','Omv4bjbpK04'),(530,147,'가시','버즈','Omv4bjbpK04'),(531,147,'가시','버즈','Omv4bjbpK04'),(532,147,'가시','버즈','Omv4bjbpK04'),(533,147,'가시','버즈','Omv4bjbpK04'),(534,147,'가시','버즈','Omv4bjbpK04'),(535,147,'가시','버즈','Omv4bjbpK04'),(536,147,'가시','버즈','Omv4bjbpK04'),(537,147,'가시','버즈','Omv4bjbpK04'),(538,147,'가시','버즈','Omv4bjbpK04'),(539,147,'가시','버즈','Omv4bjbpK04'),(540,147,'가시','버즈','Omv4bjbpK04'),(541,147,'가시','버즈','Omv4bjbpK04'),(542,147,'가시','버즈','Omv4bjbpK04'),(543,147,'가시','버즈','Omv4bjbpK04'),(544,147,'가시','버즈','Omv4bjbpK04'),(545,147,'가시','버즈','Omv4bjbpK04'),(546,147,'가시','버즈','Omv4bjbpK04'),(547,147,'가시','버즈','Omv4bjbpK04'),(548,147,'가시','버즈','Omv4bjbpK04'),(549,147,'가시','버즈','Omv4bjbpK04'),(550,147,'가시','버즈','Omv4bjbpK04'),(551,148,'가시','버즈','Omv4bjbpK04'),(552,148,'가시','버즈','Omv4bjbpK04'),(553,148,'가시','버즈','Omv4bjbpK04'),(554,148,'가시','버즈','Omv4bjbpK04'),(555,148,'가시','버즈','Omv4bjbpK04'),(556,148,'가시','버즈','Omv4bjbpK04'),(557,148,'가시','버즈','Omv4bjbpK04'),(558,148,'가시','버즈','Omv4bjbpK04'),(559,148,'가시','버즈','Omv4bjbpK04'),(560,148,'가시','버즈','Omv4bjbpK04'),(561,148,'가시','버즈','Omv4bjbpK04'),(562,148,'가시','버즈','Omv4bjbpK04'),(563,148,'가시','버즈','Omv4bjbpK04'),(564,148,'가시','버즈','Omv4bjbpK04'),(565,148,'가시','버즈','Omv4bjbpK04'),(566,148,'가시','버즈','Omv4bjbpK04'),(567,148,'가시','버즈','Omv4bjbpK04'),(568,148,'가시','버즈','Omv4bjbpK04'),(569,148,'가시','버즈','Omv4bjbpK04'),(570,148,'가시','버즈','Omv4bjbpK04'),(571,148,'가시','버즈','Omv4bjbpK04'),(572,148,'가시','버즈','Omv4bjbpK04'),(573,148,'가시','버즈','Omv4bjbpK04'),(574,148,'가시','버즈','Omv4bjbpK04'),(575,149,'가시','버즈','Omv4bjbpK04'),(576,149,'가시','버즈','Omv4bjbpK04'),(577,149,'가시','버즈','Omv4bjbpK04'),(578,149,'가시','버즈','Omv4bjbpK04'),(579,149,'가시','버즈','Omv4bjbpK04'),(580,149,'가시','버즈','Omv4bjbpK04'),(581,149,'가시','버즈','Omv4bjbpK04'),(582,149,'가시','버즈','Omv4bjbpK04'),(583,149,'가시','버즈','Omv4bjbpK04'),(584,149,'가시','버즈','Omv4bjbpK04'),(585,149,'가시','버즈','Omv4bjbpK04'),(586,149,'가시','버즈','Omv4bjbpK04'),(587,149,'가시','버즈','Omv4bjbpK04'),(588,149,'가시','버즈','Omv4bjbpK04'),(589,149,'가시','버즈','Omv4bjbpK04'),(590,149,'가시','버즈','Omv4bjbpK04'),(591,149,'가시','버즈','Omv4bjbpK04'),(592,149,'가시','버즈','Omv4bjbpK04'),(593,149,'가시','버즈','Omv4bjbpK04'),(594,149,'가시','버즈','Omv4bjbpK04'),(595,149,'가시','버즈','Omv4bjbpK04'),(596,149,'가시','버즈','Omv4bjbpK04'),(597,149,'가시','버즈','Omv4bjbpK04'),(598,149,'가시','버즈','Omv4bjbpK04'),(599,149,'가시','버즈','Omv4bjbpK04'),(600,149,'가시','버즈','Omv4bjbpK04'),(601,150,'가시','버즈','Omv4bjbpK04'),(602,150,'가시','버즈','Omv4bjbpK04'),(603,150,'가시','버즈','Omv4bjbpK04'),(604,150,'가시','버즈','Omv4bjbpK04'),(605,150,'가시','버즈','Omv4bjbpK04'),(606,150,'가시','버즈','Omv4bjbpK04'),(607,150,'가시','버즈','Omv4bjbpK04'),(608,150,'가시','버즈','Omv4bjbpK04'),(609,150,'가시','버즈','Omv4bjbpK04'),(610,150,'가시','버즈','Omv4bjbpK04'),(611,150,'가시','버즈','Omv4bjbpK04'),(612,150,'가시','버즈','Omv4bjbpK04'),(613,150,'가시','버즈','Omv4bjbpK04'),(614,150,'가시','버즈','Omv4bjbpK04'),(615,150,'가시','버즈','Omv4bjbpK04'),(616,150,'가시','버즈','Omv4bjbpK04'),(617,150,'가시','버즈','Omv4bjbpK04'),(618,150,'가시','버즈','Omv4bjbpK04'),(619,150,'가시','버즈','Omv4bjbpK04'),(620,150,'가시','버즈','Omv4bjbpK04'),(621,150,'가시','버즈','Omv4bjbpK04'),(622,150,'가시','버즈','Omv4bjbpK04'),(623,150,'가시','버즈','Omv4bjbpK04'),(624,150,'가시','버즈','Omv4bjbpK04'),(648,152,'가시','버즈','Omv4bjbpK04'),(649,152,'가시','버즈','Omv4bjbpK04'),(650,152,'가시','버즈','Omv4bjbpK04'),(651,152,'가시','버즈','Omv4bjbpK04'),(652,152,'가시','버즈','Omv4bjbpK04'),(653,152,'가시','버즈','Omv4bjbpK04'),(654,152,'가시','버즈','Omv4bjbpK04'),(655,152,'가시','버즈','Omv4bjbpK04'),(656,152,'가시','버즈','Omv4bjbpK04'),(657,152,'가시','버즈','Omv4bjbpK04'),(658,152,'가시','버즈','Omv4bjbpK04'),(659,152,'가시','버즈','Omv4bjbpK04'),(660,152,'가시','버즈','Omv4bjbpK04'),(661,152,'가시','버즈','Omv4bjbpK04'),(662,152,'가시','버즈','Omv4bjbpK04'),(663,152,'가시','버즈','Omv4bjbpK04'),(664,152,'가시','버즈','Omv4bjbpK04'),(665,152,'가시','버즈','Omv4bjbpK04'),(666,152,'가시','버즈','Omv4bjbpK04'),(667,153,'가시','버즈','Omv4bjbpK04'),(668,153,'가시','버즈','Omv4bjbpK04'),(669,153,'가시','버즈','Omv4bjbpK04'),(670,153,'가시','버즈','Omv4bjbpK04'),(671,153,'가시','버즈','Omv4bjbpK04'),(672,153,'가시','버즈','Omv4bjbpK04'),(673,153,'가시','버즈','Omv4bjbpK04'),(674,153,'가시','버즈','Omv4bjbpK04'),(675,153,'가시','버즈','Omv4bjbpK04'),(676,153,'가시','버즈','Omv4bjbpK04'),(677,153,'가시','버즈','Omv4bjbpK04'),(678,153,'가시','버즈','Omv4bjbpK04'),(679,153,'가시','버즈','Omv4bjbpK04'),(680,153,'가시','버즈','Omv4bjbpK04'),(681,153,'가시','버즈','Omv4bjbpK04'),(682,153,'가시','버즈','Omv4bjbpK04'),(683,153,'가시','버즈','Omv4bjbpK04'),(684,153,'가시','버즈','Omv4bjbpK04'),(685,153,'가시','버즈','Omv4bjbpK04'),(686,153,'가시','버즈','Omv4bjbpK04'),(687,153,'가시','버즈','Omv4bjbpK04'),(688,153,'가시','버즈','Omv4bjbpK04'),(689,153,'가시','버즈','Omv4bjbpK04'),(690,153,'가시','버즈','Omv4bjbpK04'),(691,153,'가시','버즈','Omv4bjbpK04'),(692,153,'가시','버즈','Omv4bjbpK04'),(693,153,'가시','버즈','Omv4bjbpK04'),(694,153,'가시','버즈','Omv4bjbpK04'),(695,154,'초능력','기리보이','E-QuOWM38qw'),(696,154,'가시','버즈','Omv4bjbpK04'),(697,154,'가시','버즈','Omv4bjbpK04'),(698,154,'가시','버즈','Omv4bjbpK04'),(699,154,'가시','버즈','Omv4bjbpK04'),(700,154,'가시','버즈','Omv4bjbpK04'),(701,154,'가시','버즈','Omv4bjbpK04'),(702,154,'가시','버즈','Omv4bjbpK04'),(703,154,'가시','버즈','Omv4bjbpK04'),(704,154,'가시','버즈','Omv4bjbpK04'),(705,154,'가시','버즈','Omv4bjbpK04'),(706,154,'가시','버즈','Omv4bjbpK04'),(707,154,'가시','버즈','Omv4bjbpK04'),(708,154,'가시','버즈','Omv4bjbpK04'),(709,154,'가시','버즈','Omv4bjbpK04'),(710,154,'가시','버즈','Omv4bjbpK04'),(711,154,'가시','버즈','Omv4bjbpK04'),(712,154,'가시','버즈','Omv4bjbpK04'),(713,154,'가시','버즈','Omv4bjbpK04'),(714,154,'가시','버즈','Omv4bjbpK04'),(715,151,'여러분','임재범','mbq4II_EOvE'),(716,151,'커피한잔할래요','폴킴','l7PgoVBZpc8'),(717,151,'Love Fiction','울랄라세션','XRrvRxF1aBU'),(718,151,'Rollin','Brave Girls','MthLgPs7oU4'),(719,151,'인기','MC몽','oA8PaVVON9Q'),(720,151,'노래가 늘었어','에일리','ZcID0Wn4zwI'),(721,151,'애상','10cm','0i_87fox_Ug'),(722,151,'눈사람','정승환','1WAbRa6Tg04'),(723,151,'나에게 넌','다비치','7RBP9tAkRxU'),(724,151,'NAPPA','Crush','OoMIAo0a2TA'),(725,151,'한강','Hoody','-mtlIhSY9W8'),(726,151,'한강 gang','The Quiett','O42lYtNTh50'),(727,156,'찐이야','영탁','kXhfDCtRVXY'),(728,156,'목포행 완행열차','장윤정','7EKLQVQLmvc'),(729,156,'누나가 딱이야','영탁','YTCxsYrcFsU'),(730,156,'둥지','남진','OpSGrLPfFbQ'),(731,156,'무명배우','송가인','bwjPtZph_fA'),(732,156,'한 많은 대동강','송가인','zH1sHffOIvc'),(733,156,'서른 즈음에','김광석','YNDGA02C2Sw'),(734,156,'사랑했지만','김광석','xhmKg2eFSlw'),(735,156,'붉은 노을','이문세','UaiadXw503g'),(736,156,'사랑의 재개발','유산슬','2cZ3hRoGOwk');
/*!40000 ALTER TABLE `tb_collection_song` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_collection_tag`
--

DROP TABLE IF EXISTS `tb_collection_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_collection_tag` (
  `tno` int(11) NOT NULL AUTO_INCREMENT,
  `cno` int(11) NOT NULL,
  `tag` varchar(100) NOT NULL,
  PRIMARY KEY (`tno`),
  KEY `fk_tb_collection_tag_idx` (`cno`),
  CONSTRAINT `fk_tb_collection_tag` FOREIGN KEY (`cno`) REFERENCES `tb_collection` (`cno`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_collection_tag`
--

LOCK TABLES `tb_collection_tag` WRITE;
/*!40000 ALTER TABLE `tb_collection_tag` DISABLE KEYS */;
INSERT INTO `tb_collection_tag` VALUES (65,104,'sad'),(66,104,'gloomy'),(72,123,'midnight'),(73,123,'calm'),(74,124,'sea'),(75,124,'wave'),(76,125,'lazy'),(77,125,'calm'),(78,126,'classic'),(79,127,'study'),(80,127,'calm'),(81,128,'party'),(82,129,'party'),(83,129,'club'),(84,130,'camp'),(85,130,'calm'),(86,133,'drive'),(87,133,'party'),(88,134,'coffee'),(89,134,'calm'),(90,135,'calm'),(91,136,'excite'),(92,136,'shower'),(93,137,'drive'),(94,138,'study'),(95,139,'hiphop'),(96,139,'club'),(97,140,'calm'),(98,141,'calm'),(99,141,'cafe'),(100,142,'drive'),(101,143,'jazz'),(102,144,'calm'),(103,145,'soul'),(104,146,'blue'),(105,146,'sad'),(106,144,'sad'),(107,147,'excite'),(108,148,'space'),(109,148,'excite'),(110,149,'drive'),(111,150,'dance'),(112,151,'excite'),(113,152,'jazz'),(114,153,'calm'),(115,152,'calm'),(116,153,'study'),(117,154,'space'),(118,156,'trot'),(119,156,'excited');
/*!40000 ALTER TABLE `tb_collection_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_follow`
--

DROP TABLE IF EXISTS `tb_follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_follow` (
  `from_user_id` varchar(20) NOT NULL,
  `to_user_id` varchar(20) NOT NULL,
  PRIMARY KEY (`to_user_id`,`from_user_id`),
  KEY `from_user_id` (`from_user_id`),
  CONSTRAINT `tb_follow_ibfk_1` FOREIGN KEY (`from_user_id`) REFERENCES `tb_user` (`user_id`),
  CONSTRAINT `tb_follow_ibfk_2` FOREIGN KEY (`to_user_id`) REFERENCES `tb_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_follow`
--

LOCK TABLES `tb_follow` WRITE;
/*!40000 ALTER TABLE `tb_follow` DISABLE KEYS */;
INSERT INTO `tb_follow` VALUES ('admin','admin3'),('admin','gudtnzz'),('admin2','admin'),('admin2','admin3'),('admin3','admin'),('admin3','admin2'),('amine','gudtnzz'),('amine','yongho'),('candy','gudtnzz'),('candy','yongho'),('cosmicboy','gudtnzz'),('faker','gudtnzz'),('faker','yongho'),('giriboy91','gudtnzz'),('giriboy91','yongho'),('gudtnzz','admin'),('gudtnzz','amine'),('gudtnzz','cosmicboy'),('gudtnzz','faker'),('gudtnzz','giriboy91'),('gudtnzz','hwamin'),('gudtnzz','introuble'),('gudtnzz','lck0823'),('gudtnzz','lec888'),('gudtnzz','lilpump'),('gudtnzz','lpl0777'),('gudtnzz','mingon'),('gudtnzz','minji00'),('gudtnzz','minwoo'),('gudtnzz','nana123'),('gudtnzz','yeeun1203'),('gudtnzz','yongho'),('hs950823','gudtnzz'),('hs950823','yongho'),('hwamin','gudtnzz'),('hwamin','yongho'),('hyoungsoo','gudtnzz'),('hyoungsoo','yongho'),('jeremy','gudtnzz'),('jeremy','yongho'),('jpark','gudtnzz'),('jpark','yongho'),('lck0823','gudtnzz'),('lck0823','yongho'),('lec888','gudtnzz'),('lec888','yongho'),('lilpump','gudtnzz'),('lilpump','yongho'),('lpl0777','gudtnzz'),('lpl0777','yongho'),('minwoo','gudtnzz'),('ph1','gudtnzz'),('ph1','yongho'),('trump12','gudtnzz'),('trump12','yongho'),('yongho','amine'),('yongho','candy'),('yongho','faker'),('yongho','giriboy91'),('yongho','gudtnzz'),('yongho','hs950823'),('yongho','hwamin'),('yongho','hyoungsoo'),('yongho','jeremy'),('yongho','jpark'),('yongho','lck0823'),('yongho','lec888'),('yongho','lilpump'),('yongho','lpl0777'),('yongho','ph1'),('yongho','trump12');
/*!40000 ALTER TABLE `tb_follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_user` (
  `user_id` varchar(20) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_email` varchar(20) NOT NULL,
  `user_birth_date` date NOT NULL,
  `enabled` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
INSERT INTO `tb_user` VALUES ('admin','adminpw','홍길동','a@naver.com','1994-10-04',1),('admin2','adminpw2','홍길삼','b@naver.com','1994-10-11',1),('admin3','adminpw3','홍길북','c@naver.com','1991-10-11',1),('amine','1','amine','amine@naver.com','1995-08-23',1),('candy','1','캔디','candy@naver.com','1995-08-23',1),('cosmicboy','1','cosmic','cos@naver.com','1995-08-23',1),('cozyboy','1','원재','cozy@naver.com','1995-08-23',1),('crush92','1','신효섭','crush@naver.com','1995-08-23',1),('faker','1','faker','faker@naver.com','1996-08-23',1),('giriboy91','1','giriboy91','giriboy91@naver.com','1995-08-23',1),('gudtnzz','gudtnzz','배형수','hyoungsooo@naver.com','1995-08-23',1),('haein12','1','해인','haein12@naver.com','1995-08-23',1),('hs950823','1','배형수','h@naver.com','1995-08-23',1),('hwamin','1','hwa','hwa@naver.com','1995-08-23',1),('hyoungsoo','1','형수','hy@naver.com','1995-08-23',1),('introuble','1','tr','tr@naver.com','1995-08-23',1),('jeremy','1','jeremy','jeremy@naver.com','1995-08-23',1),('jpark','1','j','j@naver.com','1995-08-23',1),('jupiter0830','1q2w3e4r','유예은','y@naver.com','1999-09-09',1),('jyh2','1q2w3e4r','updateyhjeon2','adsf2@naver.com','1994-10-04',1),('kej111','1','kej','k@naver.com','1995-08-23',1),('lazyguy','1','lazy','lazy@naver.com','1995-08-23',1),('lck0823','1','lck','lck@naver.com','1995-08-23',1),('lec888','1','lec','lec@naver.com','1995-08-23',1),('lilpump','1','일범','lilpump@naver.com','1995-08-23',1),('lpl0777','1','lpl','lpl@naver.com','1995-08-23',1),('mingon','1q2w3e4r','박민곤','p@naver.com','1995-05-05',1),('minji00','1q2w3e4r','김민지','2@naver.com','1995-08-23',1),('minsoo','1q2w3e4r','김민수','1@naver.com','1995-08-23',1),('minwoo','1','minwoo','minwoo@naver.com','1995-08-23',1),('moon12','1','moon','moon@naver.com','1995-08-23',1),('nana123','1q2w3e4r','나나','3@naver.com','1995-08-23',1),('nayeon','1','나연','na@naver.com','1995-08-23',1),('nykim','1q2w3e4r','김남윤','4@naver.com','1995-08-23',1),('ph1','1','ph1','ph1@naver.com','1995-08-23',1),('ruddl2','1','경이','ruddl2@naver.com','1995-08-23',1),('trump12','1','tr','trmp@naver.com','1995-08-23',1),('yeeun1203','1q2w3e4r','유예은','y1@naver.com','1999-09-09',1),('yongho','1q2w3e4r','전용호','yongho@naver.com','1994-10-04',1);
/*!40000 ALTER TABLE `tb_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-18 20:37:08
