-- CreateTable
CREATE TABLE `Resources` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `ResourcetypeId` INTEGER NOT NULL,

    UNIQUE INDEX `Resources_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Resources` ADD CONSTRAINT `Resources_ResourcetypeId_fkey` FOREIGN KEY (`ResourcetypeId`) REFERENCES `Resourcetype`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
