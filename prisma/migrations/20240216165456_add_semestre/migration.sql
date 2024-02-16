/*
  Warnings:

  - You are about to drop the column `nome` on the `Avaliacao` table. All the data in the column will be lost.
  - Added the required column `semestre` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Avaliacao" DROP COLUMN "nome",
ADD COLUMN     "semestre" INTEGER NOT NULL,
ADD COLUMN     "tipo" TEXT NOT NULL;
