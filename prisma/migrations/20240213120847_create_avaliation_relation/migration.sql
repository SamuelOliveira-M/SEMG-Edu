/*
  Warnings:

  - You are about to drop the `avaliacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "avaliacao" DROP CONSTRAINT "avaliacao_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "avaliacao" DROP CONSTRAINT "avaliacao_matriculaId_fkey";

-- DropTable
DROP TABLE "avaliacao";

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "mes" INTEGER,
    "anoLetivoId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "matriculaId" TEXT NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_matriculaId_fkey" FOREIGN KEY ("matriculaId") REFERENCES "Matricula"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_anoLetivoId_fkey" FOREIGN KEY ("anoLetivoId") REFERENCES "AnoLetivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
