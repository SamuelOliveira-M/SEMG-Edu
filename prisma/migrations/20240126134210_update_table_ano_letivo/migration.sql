/*
  Warnings:

  - You are about to drop the column `data_finalizacao` on the `AnoLetivo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AnoLetivo" DROP COLUMN "data_finalizacao",
ALTER COLUMN "data_inicio" SET DATA TYPE TEXT;
