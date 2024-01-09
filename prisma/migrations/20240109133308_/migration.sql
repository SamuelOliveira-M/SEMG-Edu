/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Professor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Professor" ADD COLUMN     "cpf" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Professor_cpf_key" ON "Professor"("cpf");
