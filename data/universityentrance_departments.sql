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
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `website` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `video` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `average_score` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'Khoa Công nghệ Thông tin','Chương trình đào tạo của Khoa Công nghệ Thông tin cung cấp kiến thức và kỹ năng cần thiết cho sinh viên để trở thành những kỹ sư phần mềm có trình độ cao. Chương trình đào tạo bao gồm các môn học về khoa học máy tính, kỹ thuật phần mềm, hệ thống máy tính, mạng máy tính và cơ sở dữ liệu. Sinh viên tốt nghiệp Khoa Công nghệ Thông tin có thể làm việc trong các lĩnh vực như phát triển phần mềm, quản trị mạng, quản trị hệ thống và tư vấn công nghệ thông tin.','https://www.uit.edu.vn/','https://www.youtube.com/watch?v=dQw4w9WgXcQ',8.5),(2,'Khoa Kinh tế','Chương trình đào tạo của Khoa Kinh tế cung cấp kiến thức và kỹ năng cần thiết cho sinh viên để trở thành những nhà kinh tế có trình độ cao. Chương trình đào tạo bao gồm các môn học về kinh tế học, tài chính, kế toán, quản trị kinh doanh và marketing. Sinh viên tốt nghiệp Khoa Kinh tế có thể làm việc trong các lĩnh vực như ngân hàng, tài chính, kế toán, quản lý, kinh doanh và marketing.','https://www.hus.edu.vn/','https://www.youtube.com/watch?v=dQw4w9WgXcQ',8),(3,'Khoa Luật','Chương trình đào tạo của Khoa Luật cung cấp kiến thức và kỹ năng cần thiết cho sinh viên để trở thành những luật sư có trình độ cao. Chương trình đào tạo bao gồm các môn học về luật học, pháp luật, tố tụng hình sự, tố tụng dân sự và luật kinh tế. Sinh viên tốt nghiệp Khoa Luật có thể làm việc trong các lĩnh vực như luật sư, thẩm phán, công tố viên, luật sư tư vấn và giảng dạy luật.','https://www.luật.vn/','https://www.youtube.com/watch?v=dQw4w9WgXcQ',7.5),(4,'Khoa Y','Chương trình đào tạo của Khoa Y cung cấp kiến thức và kỹ năng cần thiết cho sinh viên để trở thành những bác sĩ có trình độ cao. Chương trình đào tạo bao gồm các môn học về y học, giải phẫu học, sinh lý học, dược lý học và bệnh học. Sinh viên tốt nghiệp Khoa Y có thể làm việc trong các lĩnh vực như bác sĩ, phẫu thuật viên, bác sĩ nội trú và bác sĩ đa khoa.','https://www.ykhoahanoi.edu.vn/','https://www.youtube.com/watch?v=dQw4w9WgXcQ',9),(5,'Khoa Dược','Chương trình đào tạo của Khoa Dược cung cấp kiến thức và kỹ năng cần thiết cho sinh viên để trở thành những dược sĩ có trình độ cao. Chương trình đào tạo bao gồm các môn học về dược học, hóa học, sinh học, dược lý học và bào chế thuốc. Sinh viên tốt nghiệp Khoa Dược có thể làm việc trong các lĩnh vực như dược sĩ, nhà nghiên cứu dược phẩm và kiểm soát chất lượng thuốc.','https://www.dược.vn/','https://www.youtube.com/watch?v=dQw4w9WgXcQ',8.5),(6,'Khoa Giáo dục','Chương trình đào tạo của Khoa Giáo dục cung cấp kiến thức và kỹ năng cần thiết cho sinh viên để trở thành những giáo viên có trình độ cao. Chương trình đào tạo bao gồm các môn học về giáo dục học, tâm lý học giáo dục, phương pháp giảng dạy và quản lý giáo dục. Sinh viên tốt nghiệp Khoa Giáo dục có thể làm việc trong các lĩnh vực như giáo viên, nhà quản lý giáo dục và nhà nghiên cứu giáo dục.','https://www.gd.vn/','https://www.youtube.com/watch?v=dQw4w9WgXcQ',8);
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
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
