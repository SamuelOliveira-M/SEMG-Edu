/*
  Warnings:

  - Added the required column `status` to the `Matricula` table without a default value. This is not possible if the table is not empty.
  - Made the column `numero_matricula` on table `Matricula` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Matricula" ADD COLUMN     "status" TEXT NOT NULL,
ALTER COLUMN "numero_matricula" SET NOT NULL;
