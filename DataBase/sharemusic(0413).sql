-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: sharemusic
-- ------------------------------------------------------
-- Server version	8.0.19

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

USE sharemusic;

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
INSERT INTO `tb_authorities` VALUES ('admin','ROLE_USER'),('admin2','ROLE_USER'),('admin3','ROLE_USER'),('jyh2','ROLE_USER');
/*!40000 ALTER TABLE `tb_authorities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_collection`
--

DROP TABLE IF EXISTS `tb_collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_collection` (
  `cno` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(20) NOT NULL,
  `col_name` varchar(20) NOT NULL,
  `reg_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `mod_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cno`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tb_collection_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tb_user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_collection`
--

LOCK TABLES `tb_collection` WRITE;
/*!40000 ALTER TABLE `tb_collection` DISABLE KEYS */;
INSERT INTO `tb_collection` VALUES (1,'admin','컬렉션1','2020-03-31 14:03:02','2020-03-31 14:03:02'),(2,'admin','컬렉션2','2020-03-31 18:34:56','2020-03-31 20:46:45'),(3,'admin3','컬렉션3','2020-03-31 20:42:52','2020-03-31 20:46:45'),(7,'admin3','update컬렉션','2020-03-31 20:48:19','2020-04-01 20:04:58');
/*!40000 ALTER TABLE `tb_collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_collection_like`
--

DROP TABLE IF EXISTS `tb_collection_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_collection_like` (
  `cno` int NOT NULL,
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
INSERT INTO `tb_collection_like` VALUES (1,'admin'),(1,'admin2');
/*!40000 ALTER TABLE `tb_collection_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_collection_reply`
--

DROP TABLE IF EXISTS `tb_collection_reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_collection_reply` (
  `rno` int NOT NULL AUTO_INCREMENT,
  `cno` int NOT NULL,
  `from_user_id` varchar(20) NOT NULL,
  `content` varchar(200) NOT NULL,
  PRIMARY KEY (`rno`),
  KEY `fk_tb_collection_reply_idx` (`cno`),
  KEY `fk_tb_collection_reply_from_user_id_idx` (`from_user_id`),
  CONSTRAINT `fk_tb_collection_reply_cno` FOREIGN KEY (`cno`) REFERENCES `tb_collection` (`cno`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_collection_reply`
--

LOCK TABLES `tb_collection_reply` WRITE;
/*!40000 ALTER TABLE `tb_collection_reply` DISABLE KEYS */;
INSERT INTO `tb_collection_reply` VALUES (3,1,'admin2','감성 굿굿입니다'),(4,1,'jyh2','대박대박');
/*!40000 ALTER TABLE `tb_collection_reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_collection_song`
--

DROP TABLE IF EXISTS `tb_collection_song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_collection_song` (
  `sno` int NOT NULL AUTO_INCREMENT,
  `cno` int NOT NULL,
  `music_name` varchar(100) NOT NULL,
  `singer` varchar(100) NOT NULL,
  PRIMARY KEY (`sno`),
  KEY `FOREIGN` (`cno`),
  CONSTRAINT `fk_tb_collection_song_cno` FOREIGN KEY (`cno`) REFERENCES `tb_collection` (`cno`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_collection_song`
--

LOCK TABLES `tb_collection_song` WRITE;
/*!40000 ALTER TABLE `tb_collection_song` DISABLE KEYS */;
INSERT INTO `tb_collection_song` VALUES (1,1,'방탄소년단','헬로우'),(2,1,'우디','이노래가'),(3,1,'허각','하늘을'),(5,3,'get','어반자카파'),(6,7,'update','임재현'),(7,7,'testmusic3','testsinger3');
/*!40000 ALTER TABLE `tb_collection_song` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_collection_tag`
--

DROP TABLE IF EXISTS `tb_collection_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_collection_tag` (
  `tno` int NOT NULL AUTO_INCREMENT,
  `cno` int NOT NULL,
  `tag` varchar(100) NOT NULL,
  PRIMARY KEY (`tno`),
  KEY `fk_tb_collection_tag_idx` (`cno`),
  CONSTRAINT `fk_tb_collection_tag` FOREIGN KEY (`cno`) REFERENCES `tb_collection` (`cno`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_collection_tag`
--

LOCK TABLES `tb_collection_tag` WRITE;
/*!40000 ALTER TABLE `tb_collection_tag` DISABLE KEYS */;
INSERT INTO `tb_collection_tag` VALUES (4,1,'a'),(5,1,'b'),(6,1,'c');
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
INSERT INTO `tb_follow` VALUES ('admin','admin2'),('admin','admin3'),('admin2','admin'),('admin2','admin3');
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
INSERT INTO `tb_user` VALUES ('admin','{noop}adminpw','홍길동','a@naver.com','1994-10-04',1),('admin2','{noop}adminpw2','홍길삼','b@naver.com','1994-10-11',1),('admin3','{noop}adminpw3','홍길북','c@naver.com','1991-10-11',1),('jyh2','{noop}1q2w3e4r','updateyhjeon2','adsf2@naver.com','1994-10-04',1);
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

-- Dump completed on 2020-04-13 19:19:24
