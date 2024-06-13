/*
  Warnings:

  - You are about to drop the column `cpf` on the `Professor` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Professor_cpf_key";

-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "cpf";
