-- AlterTable
ALTER TABLE `User` ADD COLUMN     `showEmail` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN     `showFullname` BOOLEAN NOT NULL DEFAULT true;
