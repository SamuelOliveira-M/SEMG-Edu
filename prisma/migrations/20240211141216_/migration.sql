/*
  Warnings:

  - You are about to drop the `Nota` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Nota" DROP CONSTRAINT "Nota_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "Nota" DROP CONSTRAINT "Nota_matriculaId_fkey";

-- DropTable
DROP TABLE "Nota";

-- CreateTable
CREATE TABLE "avaliacao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "mes" INTEGER,
    "disciplinaId" TEXT NOT NULL,
    "matriculaId" TEXT NOT NULL,

    CONSTRAINT "avaliacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_matriculaId_fkey" FOREIGN KEY ("matriculaId") REFERENCES "Matricula"("id") ON DELETE CASCADE ON UPDATE CASCADE;
