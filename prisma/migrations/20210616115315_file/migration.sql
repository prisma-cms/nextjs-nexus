-- AlterTable
ALTER TABLE `User` ADD COLUMN `image` VARCHAR(191);

-- CreateTable
CREATE TABLE `File` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `path` MEDIUMTEXT NOT NULL,
    `filename` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191),
    `mimetype` VARCHAR(191) NOT NULL,
    `encoding` VARCHAR(191) NOT NULL,
    `size` DOUBLE NOT NULL,
    `rank` INTEGER NOT NULL DEFAULT 0,
    `createdById` CHAR(25),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `File` ADD FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
