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
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `answer` text NOT NULL,
  `user_id` int NOT NULL,
  `livestream_id` int NOT NULL,
  `created_date` datetime NOT NULL,
  `answered_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_userid_ques_users_idx` (`user_id`),
  KEY `fk_liveid_ques_live_idx` (`livestream_id`),
  CONSTRAINT `fk_liveid_ques_live` FOREIGN KEY (`livestream_id`) REFERENCES `livestreams` (`id`),
  CONSTRAINT `fk_userid_ques_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'Khi nào là thời gian tốt nhất để đăng ký học?','Thời gian tốt nhất để đăng ký học là khi bạn đã có quyết định và sẵn sàng bắt đầu. Tuy nhiên, nếu bạn vẫn đang phân vân, bạn có thể đăng ký học sớm hơn để có thêm thời gian suy nghĩ.',1,5,'2023-08-05 09:12:41','2023-08-05 09:13:31'),(2,'Tôi có thể học gì sau khi tốt nghiệp?','Sau khi tốt nghiệp, bạn có thể học tiếp lên cao hoặc tìm kiếm một công việc. Nếu bạn muốn học tiếp lên cao, bạn có thể học thạc sĩ hoặc tiến sĩ. Nếu bạn muốn tìm kiếm một công việc, bạn có thể tìm kiếm một công việc trong lĩnh vực mà bạn đã học hoặc tìm kiếm một công việc trong một lĩnh vực khác.',2,1,'2023-08-05 09:12:41','2023-08-05 09:14:40'),(3,'Tôi có thể làm gì để chuẩn bị cho kỳ thi?','Bạn có thể chuẩn bị cho kỳ thi bằng cách học tập chăm chỉ và làm bài tập về nhà. Bạn cũng có thể tham gia các lớp học luyện thi và ôn tập các đề thi cũ.',3,1,'2023-08-05 09:12:41','2023-08-05 09:14:40'),(4,'Tôi nên chọn trường nào?','Bạn nên chọn trường dựa trên các yếu tố như chất lượng giảng dạy, cơ sở vật chất, vị trí và chi phí. Bạn cũng nên xem xét các yếu tố cá nhân như sở thích và nhu cầu của bạn.',4,4,'2023-08-05 09:12:41','2023-08-05 09:14:40'),(5,'Tôi có thể học trực tuyến được không?','Có, bạn có thể học trực tuyến. Có rất nhiều chương trình học trực tuyến có chất lượng cao. Bạn có thể tìm kiếm các chương trình học trực tuyến trên các trang web như Coursera, edX và Udacity.',5,2,'2023-08-05 09:12:41','2023-08-05 09:14:40'),(6,'Tôi có thể làm gì nếu tôi không đạt được điểm cao trong kỳ thi?','Nếu bạn không đạt được điểm cao trong kỳ thi, bạn có thể làm lại kỳ thi. Bạn cũng có thể tìm kiếm các chương trình học khác hoặc tìm kiếm một công việc mà không cần bằng cấp.',6,1,'2023-08-05 09:12:41','2023-08-05 09:14:40'),(7,'Tôi có thể làm gì nếu tôi không biết mình muốn học gì?','Nếu bạn không biết mình muốn học gì, bạn có thể tham khảo ý kiến của bạn bè, gia đình và cố vấn học tập. Bạn cũng có thể tìm kiếm các bài kiểm tra và bài trắc nghiệm trực tuyến để giúp bạn tìm ra con đường sự nghiệp phù hợp với mình.',7,3,'2023-08-05 09:12:41','2023-08-05 09:14:40'),(8,'Tôi có thể làm gì nếu tôi không có đủ tiền để học?','Nếu bạn không có đủ tiền để học, bạn có thể tìm kiếm các học bổng và trợ cấp. Bạn cũng có thể tìm kiếm các chương trình học miễn phí hoặc giá rẻ.',8,3,'2023-08-05 09:12:41','2023-08-05 09:14:40'),(9,'Tôi có thể làm gì nếu tôi không có thời gian để học?','Nếu bạn không có thời gian để học, bạn có thể tìm kiếm các chương trình học online hoặc các chương trình học có thể hoàn thành trong thời gian ngắn. Bạn cũng có thể tìm kiếm các chương trình học có thể học ngoài giờ làm việc.',9,2,'2023-08-05 09:12:41','2023-08-05 09:14:40'),(10,'Tôi có thể làm gì nếu tôi không biết tiếng Anh?','Nếu bạn không biết tiếng Anh, bạn có thể tìm kiếm các chương trình học có giảng dạy bằng tiếng Anh. Bạn cũng có thể tìm kiếm các khóa học tiếng Anh để giúp bạn cải thiện khả năng ngôn ngữ của mình.',10,3,'2023-08-05 09:12:41','2023-08-05 09:14:40');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
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
