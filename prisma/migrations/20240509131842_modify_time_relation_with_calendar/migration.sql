/*
  Warnings:

  - Added the required column `calendarioId` to the `Horario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Calendario" DROP CONSTRAINT "Calendario_horarioId_fkey";

-- AlterTable
ALTER TABLE "Horario" ADD COLUMN     "calendarioId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Horario" ADD CONSTRAINT "Horario_calendarioId_fkey" FOREIGN KEY ("calendarioId") REFERENCES "Calendario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
