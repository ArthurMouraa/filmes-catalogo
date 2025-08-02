CREATE DATABASE  IF NOT EXISTS `devmovie` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `devmovie`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: devmovie
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('14925138-36f1-4e86-841d-1fef29ee0b92','1ae8845d6dfc12bf71772a971c54f7b8ef2238df17bccddbb4859d25f60474cc','2025-07-25 06:44:56.306','20250725064456_update_description',NULL,NULL,'2025-07-25 06:44:56.181',1),('23108a14-c51d-4ea6-88ca-e5031f766500','ee71abfafc747be7d3f090048d8a21e447741b6dad1c8fa69f3bb84acf10948f','2025-07-24 21:33:49.134','20250724213349_update_role_user',NULL,NULL,'2025-07-24 21:33:49.109',1),('9ffa831c-9ee4-469a-9b73-01ded6d2e3a3','77516c88b32e3280077d243874ba144a47e588d2b067ea18aa73408b454f52c4','2025-07-24 21:30:02.109','20250724213002_add_description_movie',NULL,NULL,'2025-07-24 21:30:02.080',1),('a4b2defb-71ea-4c5d-a094-01636b3a6303','10c2ba82bb13aa567535f285a7b6de7ee4601d8ae899304dac520ae39fcdfa5c','2025-07-24 21:28:35.709','20250724212835_add_year_movie',NULL,NULL,'2025-07-24 21:28:35.672',1),('f7d14679-f818-44de-b4fd-abd73b59e31d','c15fabd8f38ac719aa0eb93a11bc05b41b5e212476f0a743524d064fd78a4c8e','2025-07-24 21:21:27.217','20250724212127_update_user_nome_move_image',NULL,NULL,'2025-07-24 21:21:27.169',1),('f8d89990-92fb-4371-a182-7c3db79a809d','1fb072c9ae82987d1c6cc20facedf234c096a75b24e3c9c9143676655fe07061','2025-07-24 21:13:46.768','20250724211346_new_database',NULL,NULL,'2025-07-24 21:13:46.557',1),('fe09bb9e-3dfc-4b28-8c29-287f524fdde0','fb1e030c8aed597889f2bba43dcf033e01e6a1690d9bc7c7d97d0f66e57a0cdc','2025-07-24 21:13:17.959','20250720064855_migrate_v1',NULL,NULL,'2025-07-24 21:13:17.392',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imageUrl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `movieUrl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,'2025-07-24 22:18:06.137','Comédia','alvem e os esquilos','https://res.cloudinary.com/dhhpcutqf/image/upload/v1753395468/ir0jonlilfoopz0xg4zh.jpg','https://res.cloudinary.com/dhhpcutqf/video/upload/v1753395480/cz69ownanqyufodgg4jr.mp4','2009','Um grupo de esquilos animados'),(2,'2025-07-24 22:58:37.171','Ação','Alice no país das maravilhas','https://res.cloudinary.com/dhhpcutqf/image/upload/v1753397892/u4u9xc26oybmfcrdtpr7.jpg','https://res.cloudinary.com/dhhpcutqf/video/upload/v1753397905/po3dkraqpyowdlu0l8gj.mp4','2008','As Aventuras de Alice no País das Maravilhas'),(3,'2025-07-25 06:48:45.480','Ação','Dragon Ball','https://res.cloudinary.com/dhhpcutqf/image/upload/v1753426103/w3roqhfezmrovy65872r.jpg','https://res.cloudinary.com/dhhpcutqf/video/upload/v1753426113/uo6cabbwrut9bvagbawc.mp4','2008','A série segue as aventuras do protagonista, Son Goku, desde sua infância até a idade adulta enquanto ele treina artes marciais e explora o mundo em busca de sete esferas conhecidas como as Esferas do Dragão'),(4,'2025-07-25 12:59:33.635','Drama','Avatar ','https://res.cloudinary.com/dhhpcutqf/image/upload/v1753448361/j0xkc02wzmzyxvagiipb.jpg','https://res.cloudinary.com/dhhpcutqf/video/upload/v1753448369/k7vfygutklt1nqkduu22.mp4','2009','Avatar é um filme épico estadunidense de 2009, escrito e dirigido por James Cameron, e estrelado por Sam Worthington, Zoë Saldaña, Michelle Rodriguez, Sigourney Weaver e Stephen Lang. '),(5,'2025-07-25 13:11:34.875','Ação','Homem Aranha','https://res.cloudinary.com/dhhpcutqf/image/upload/v1753449074/iodhlwuitadcywx8oytr.jpg','https://res.cloudinary.com/dhhpcutqf/video/upload/v1753449088/xqdtodgmo1lihhekf10v.mp4','2025','Um filme de ação e fantasia sobre o jovem Peter Parker, que ganha poderes de aranha após ser picado por uma aranha modificada geneticamente.'),(6,'2025-07-25 13:42:26.511','Ação','Homem de Ferro','https://res.cloudinary.com/dhhpcutqf/image/upload/v1753450900/r8puibs4shnxtdrm4cyq.webp','https://res.cloudinary.com/dhhpcutqf/video/upload/v1753450940/ud2gycw6idg3rkqtn1cl.mp4','2024','Quando é capturado em território inimigo, o genial magnata Tony Stark constrói uma armadura de alta tecnologia para escapar.');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','user') COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `nome` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `senha` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
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

-- Dump completed on 2025-07-25 12:21:31
