/*
  Warnings:

  - Made the column `recuperacao` on table `Nota` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Nota" ALTER COLUMN "recuperacao" SET NOT NULL;
