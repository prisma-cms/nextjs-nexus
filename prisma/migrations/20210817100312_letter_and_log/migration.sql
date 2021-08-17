-- CreateTable
CREATE TABLE `Letter` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `email` MEDIUMTEXT NOT NULL,
    `subject` MEDIUMTEXT NOT NULL,
    `message` MEDIUMTEXT NOT NULL,
    `status` ENUM('Created', 'Processing', 'Sended', 'Error') NOT NULL DEFAULT 'Created',
    `errorMessage` TEXT,
    `rank` INTEGER,
    `deleteOnSend` BOOLEAN NOT NULL DEFAULT true,
    `replyTo` MEDIUMTEXT,
    `returnTo` MEDIUMTEXT,
    `createdById` VARCHAR(32),

    INDEX `User`(`createdById`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Log` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `level` ENUM('Info', 'Notice', 'Warning', 'Error', 'Fatal') NOT NULL DEFAULT 'Info',
    `objectType` VARCHAR(32),
    `message` MEDIUMTEXT NOT NULL,
    `stack` MEDIUMTEXT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Letter` ADD FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
