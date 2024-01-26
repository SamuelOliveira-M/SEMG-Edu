/*
  Warnings:

  - Added the required column `status` to the `Turma` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Turma" ADD COLUMN     "status" TEXT NOT NULL;
