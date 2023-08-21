CREATE DATABASE  IF NOT EXISTS `universityentrance` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `universityentrance`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: universityentrance
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL,
  `status` tinyint NOT NULL,
  `c_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_a_idx` (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'Tuyển sinh hệ chính quy năm 2023','Tuyển sinh hệ chính quy năm 2023. Thời gian tuyển sinh từ ngày 10 tháng 1 đến ngày 30 tháng 4 năm 2023. Yêu cầu tuyển sinh: Tốt nghiệp THPT hoặc tương đương. Điểm chuẩn: 24 điểm.','2023-07-14 07:08:58','2023-08-14 07:08:58',0,0),(2,'Tuyển sinh hệ liên thông năm 2023','Tuyển sinh hệ liên thông năm 2023. Thời gian tuyển sinh từ ngày 1 tháng 5 đến ngày 30 tháng 6 năm 2023. Yêu cầu tuyển sinh: Tốt nghiệp trung cấp hoặc cao đẳng. Điểm chuẩn: 20 điểm.','2023-08-05 07:09:10','2023-08-11 07:09:10',0,0),(3,'Tuyển sinh cao học năm 2023','Tuyển sinh cao học năm 2023. Thời gian tuyển sinh từ ngày 1 tháng 7 đến ngày 31 tháng 8 năm 2023. Yêu cầu tuyển sinh: Tốt nghiệp đại học. Điểm chuẩn: 28 điểm.','2023-08-05 08:46:52','2023-08-14 07:09:34',0,0),(4,'Tuyển sinh thạc sĩ năm 2023','Tuyển sinh thạc sĩ năm 2023. Thời gian tuyển sinh từ ngày 1 tháng 9 đến ngày 30 tháng 10 năm 2023. Yêu cầu tuyển sinh: Tốt nghiệp thạc sĩ. Điểm chuẩn: 32 điểm.','2023-08-05 08:46:52','2023-08-07 08:46:52',0,0),(5,'Tuyển sinh đào tạo từ xa năm 2023','Tuyển sinh đào tạo từ xa năm 2023. Thời gian tuyển sinh từ ngày 1 tháng 11 đến ngày 31 tháng 12 năm 2023. Yêu cầu tuyển sinh: Tốt nghiệp THPT hoặc tương đương. Điểm chuẩn: 22 điểm.','2023-08-12 07:09:46','2023-08-14 07:09:46',0,0);
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-21 17:43:19
