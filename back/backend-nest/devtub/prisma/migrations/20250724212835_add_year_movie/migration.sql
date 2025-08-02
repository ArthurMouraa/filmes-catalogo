/*
  Warnings:

  - Added the required column `year` to the `movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `movie` ADD COLUMN `year` VARCHAR(191) NOT NULL;
