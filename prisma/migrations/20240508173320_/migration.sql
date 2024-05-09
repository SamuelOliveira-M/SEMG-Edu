/*
  Warnings:

  - You are about to drop the column `lotacaoId` on the `Calendario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[lotacaoId]` on the table `Horario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `lotacaoId` to the `Horario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Calendario" DROP CONSTRAINT "Calendario_lotacaoId_fkey";

-- AlterTable
ALTER TABLE "Calendario" DROP COLUMN "lotacaoId";

-- AlterTable
ALTER TABLE "Horario" ADD COLUMN     "lotacaoId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Horario_lotacaoId_key" ON "Horario"("lotacaoId");

-- AddForeignKey
ALTER TABLE "Horario" ADD CONSTRAINT "Horario_lotacaoId_fkey" FOREIGN KEY ("lotacaoId") REFERENCES "Professor_Disciplina_Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
