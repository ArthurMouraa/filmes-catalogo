/*
  Warnings:

  - You are about to drop the column `categoria` on the `movie` table. All the data in the column will be lost.
  - You are about to drop the column `imagem_url` on the `movie` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `movie` table. All the data in the column will be lost.
  - You are about to drop the column `video_url` on the `movie` table. All the data in the column will be lost.
  - Added the required column `category` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movie_url` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `movie` DROP COLUMN `categoria`,
    DROP COLUMN `imagem_url`,
    DROP COLUMN `titulo`,
    DROP COLUMN `video_url`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `image_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `movie_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
