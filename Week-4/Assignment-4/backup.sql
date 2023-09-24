-- MySQL dump 10.13  Distrib 8.1.0, for macos13 (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text,
  `author_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'AI\'s Impact on Society','AI has revolutionized industries, impacting daily lives',3),(2,'Deep Learning Wonders','Deep learning powers image and speech recognition',2),(3,'Modern Web Development','Explore web development technologies',4),(4,'Future of Space Exploration','Space exploration captivates our imagination',1),(5,'Sustainable Energy Solutions','Mitigate climate change with sustainable energy',6),(6,'The Art of Cooking','Cooking is a delightful journey',5),(7,'Guitar Mastery','Mastering the guitar is rewarding',1),(8,'Virtual Reality Adventures','VR offers immersive experiences',2),(9,'Global Travel Adventures','Explore new cultures and landscapes',6),(10,'Health & Wellness','Keys to a fulfilling life',3),(11,'Ancient Civilizations','Mysteries of ancient civilizations',5),(12,'Underwater Marvels','Dive into underwater ecosystems',4),(13,'Photography Magic','Capturing memories through photography',2),(14,'Understanding Climate Change','Challenges and solutions',6),(15,'Stock Market Navigation','Navigating the stock market',3),(16,'Artistic Treasures','Discover hidden art treasures',1),(17,'Psychology Insights','Fascinating human psychology',4),(18,'Fantasy Tales','Epic adventures in fantasy',2),(19,'Mobile Tech Evolution','Evolution of mobile technology',5),(20,'Endangered Species Conservation','Protecting endangered species',1),(21,'Cryptocurrency Revolution','Digital currency revolution',3),(22,'Delightful Desserts','Indulge in sweet delights',6),(23,'Historical Inventions','Greatest historical inventions',5),(24,'Beyond Our Solar System','Vast universe exploration',4),(25,'Fitness & Healthy Living','Achieve fitness goals',2),(26,'Literary Adventures','Captivating literary journeys',1),(27,'Renewable Energy Innovations','Innovations in renewable energy',6),(28,'Scenic Landscapes','Beauty in scenic landscapes',3),(29,'Space Exploration','Journey to the final frontier',5),(30,'Human Brain Mysteries','Unraveling brain mysteries',4);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Jenny@gmail.com','aaa1111'),(2,'Kevin@yahoo.com.tw','abcd1234'),(3,'abcdabcd@gmail.com','1234567'),(4,'ssss@app.com','sss'),(5,'ddd@123.com','ddd'),(6,'abcabc@abc.com','12345');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-24 22:28:00
