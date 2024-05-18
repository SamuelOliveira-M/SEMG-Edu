/*
  Warnings:

  - Made the column `mes` on table `Avaliacao` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Avaliacao" ALTER COLUMN "mes" SET NOT NULL;
