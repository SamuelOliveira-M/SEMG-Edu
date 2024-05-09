/*
  Warnings:

  - Added the required column `ordemSemana` to the `Calendario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Calendario" DROP CONSTRAINT "Calendario_horarioId_fkey";

-- AlterTable
ALTER TABLE "Calendario" ADD COLUMN     "ordemSemana" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Calendario" ADD CONSTRAINT "Calendario_horarioId_fkey" FOREIGN KEY ("horarioId") REFERENCES "Horario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
