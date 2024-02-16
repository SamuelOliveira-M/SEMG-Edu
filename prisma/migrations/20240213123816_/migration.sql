/*
  Warnings:

  - Changed the type of `data_inicio` on the `AnoLetivo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "AnoLetivo" DROP COLUMN "data_inicio",
ADD COLUMN     "data_inicio" TIMESTAMP(3) NOT NULL;
