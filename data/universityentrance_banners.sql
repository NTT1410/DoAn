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
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES (1,'Banner 1','banner1.jpg','https://res.cloudinary.com/ds8i6jriz/image/upload/v1691837059/MyImages/UniversityEntrance/banner/banner1_uosk46.jpg','2023-08-05 08:20:42','2023-08-05 08:20:42',1),(2,'Banner 2','banner2.jpg','https://res.cloudinary.com/ds8i6jriz/image/upload/v1691837059/MyImages/UniversityEntrance/banner/banner2_w70vsb.jpg','2023-08-05 08:20:42','2023-08-05 08:20:42',0),(3,'Banner 3','banner3.jpg','https://res.cloudinary.com/ds8i6jriz/image/upload/v1691949896/MyImages/UniversityEntrance/banner/modern-university-admission-banner-template-design-168ce33d82bc9d6823f5a58bc1a51092_screen_bbor76.jpg','2023-08-05 08:20:42','2023-08-05 08:20:42',0),(4,'Banner 4','banner4.jpg','https://res.cloudinary.com/ds8i6jriz/image/upload/v1691950360/MyImages/UniversityEntrance/banner/maroon-university-enrollment-banner-design-template-ed350a837743449b01870b3e812a72d5_screen_ejuuvt.jpg','2023-08-05 08:20:42','2023-08-05 08:20:42',0),(5,'Banner 5','banner5.jpg','https://res.cloudinary.com/ds8i6jriz/image/upload/v1691950562/MyImages/UniversityEntrance/banner/Web_20Banner_202_y8l2un.jpg','2023-08-05 08:20:42','2023-08-05 08:20:42',0),(6,'Banner 6','banner6.jpg','https://res.cloudinary.com/ds8i6jriz/image/upload/v1691950495/MyImages/UniversityEntrance/banner/CDOE-Banner_tynlsa.jpg','2023-08-05 08:20:42','2023-08-05 08:20:42',0),(7,'Banner 7','banner7.jpg','https://res.cloudinary.com/ds8i6jriz/image/upload/v1691950532/MyImages/UniversityEntrance/banner/OL-Banner-3_rn8jyc.jpg','2023-08-05 08:20:42','2023-08-05 08:20:42',0),(8,'Banner 8','banner8.jpg','https://res.cloudinary.com/ds8i6jriz/image/upload/v1691949896/MyImages/UniversityEntrance/banner/modern-university-admission-banner-template-design-168ce33d82bc9d6823f5a58bc1a51092_screen_bbor76.jpg','2023-08-05 08:20:42','2023-08-05 08:20:42',0),(9,'Banner 9','banner9.jpg','https://res.cloudinary.com/ds8i6jriz/image/upload/v1691837059/MyImages/UniversityEntrance/banner/banner1_uosk46.jpg','2023-08-05 08:20:42','2023-08-05 08:20:42',1),(10,'Banner 10','banner10.jpg','https://res.cloudinary.com/ds8i6jriz/image/upload/v1691837059/MyImages/UniversityEntrance/banner/banner2_w70vsb.jpg','2023-08-05 08:20:42','2023-08-05 08:20:42',0);
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
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
