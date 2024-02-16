/*
  Warnings:

  - You are about to drop the column `recuperacao` on the `Nota` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Nota" DROP COLUMN "recuperacao",
ADD COLUMN     "avaliacao" TEXT;
