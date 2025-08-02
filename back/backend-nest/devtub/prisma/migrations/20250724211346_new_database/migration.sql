/*
  Warnings:

  - You are about to drop the `avaliacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comentario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `publicacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `avaliacao` DROP FOREIGN KEY `Avaliacao_id_publicacao_fkey`;

-- DropForeignKey
ALTER TABLE `avaliacao` DROP FOREIGN KEY `Avaliacao_id_usuario_fkey`;

-- DropForeignKey
ALTER TABLE `comentario` DROP FOREIGN KEY `Comentario_id_publicacao_fkey`;

-- DropForeignKey
ALTER TABLE `comentario` DROP FOREIGN KEY `Comentario_id_usuario_fkey`;

-- DropForeignKey
ALTER TABLE `publicacao` DROP FOREIGN KEY `Publicacao_id_usuario_fkey`;

-- DropTable
DROP TABLE `avaliacao`;

-- DropTable
DROP TABLE `comentario`;

-- DropTable
DROP TABLE `publicacao`;

-- DropTable
DROP TABLE `usuario`;

-- CreateTable
CREATE TABLE `movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `category` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `movie_url` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
