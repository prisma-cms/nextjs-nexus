-- CreateTable
CREATE TABLE `ResetPassword` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `code` VARCHAR(32) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `validTill` DATETIME(3),
    `User` VARCHAR(32) NOT NULL,

    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ResetPassword` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
