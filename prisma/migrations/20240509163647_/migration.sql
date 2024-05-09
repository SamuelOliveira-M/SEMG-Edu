/*
  Warnings:

  - You are about to drop the column `calendarioId` on the `Horario` table. All the data in the column will be lost.
  - You are about to drop the column `lotacaoId` on the `Horario` table. All the data in the column will be lost.
  - You are about to drop the `Historico_Professor_Disciplina_Turma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Professor_Disciplina_Turma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Historico_Professor_Disciplina_Turma" DROP CONSTRAINT "Historico_Professor_Disciplina_Turma_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "Historico_Professor_Disciplina_Turma" DROP CONSTRAINT "Historico_Professor_Disciplina_Turma_professorId_fkey";

-- DropForeignKey
ALTER TABLE "Historico_Professor_Disciplina_Turma" DROP CONSTRAINT "Historico_Professor_Disciplina_Turma_turmaId_fkey";

-- DropForeignKey
ALTER TABLE "Horario" DROP CONSTRAINT "Horario_calendarioId_fkey";

-- DropForeignKey
ALTER TABLE "Horario" DROP CONSTRAINT "Horario_lotacaoId_fkey";

-- DropForeignKey
ALTER TABLE "Professor_Disciplina_Turma" DROP CONSTRAINT "Professor_Disciplina_Turma_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "Professor_Disciplina_Turma" DROP CONSTRAINT "Professor_Disciplina_Turma_professorId_fkey";

-- DropForeignKey
ALTER TABLE "Professor_Disciplina_Turma" DROP CONSTRAINT "Professor_Disciplina_Turma_turmaId_fkey";

-- AlterTable
ALTER TABLE "Horario" DROP COLUMN "calendarioId",
DROP COLUMN "lotacaoId";

-- DropTable
DROP TABLE "Historico_Professor_Disciplina_Turma";

-- DropTable
DROP TABLE "Professor_Disciplina_Turma";

-- CreateTable
CREATE TABLE "Lotacao" (
    "id" TEXT NOT NULL,
    "dataAlteracao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "professorId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "turmaId" TEXT NOT NULL,

    CONSTRAINT "Lotacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historico_Lotacao" (
    "id" TEXT NOT NULL,
    "dataAlteracao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "professorId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "turmaId" TEXT NOT NULL,

    CONSTRAINT "Historico_Lotacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aula" (
    "id" TEXT NOT NULL,
    "lotacaoId" TEXT NOT NULL,
    "calendarioId" TEXT NOT NULL,
    "horarioId" TEXT NOT NULL,

    CONSTRAINT "Aula_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_professor_id" ON "Lotacao"("professorId");

-- CreateIndex
CREATE INDEX "idx_disciplina_id" ON "Lotacao"("disciplinaId");

-- CreateIndex
CREATE INDEX "idx_turma_id" ON "Lotacao"("turmaId");

-- CreateIndex
CREATE INDEX "idx_historico_professor_id" ON "Historico_Lotacao"("professorId");

-- CreateIndex
CREATE INDEX "idx_historico_disciplina_id" ON "Historico_Lotacao"("disciplinaId");

-- CreateIndex
CREATE INDEX "idx_historico_turma_id" ON "Historico_Lotacao"("turmaId");

-- AddForeignKey
ALTER TABLE "Lotacao" ADD CONSTRAINT "Lotacao_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lotacao" ADD CONSTRAINT "Lotacao_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lotacao" ADD CONSTRAINT "Lotacao_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico_Lotacao" ADD CONSTRAINT "Historico_Lotacao_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico_Lotacao" ADD CONSTRAINT "Historico_Lotacao_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico_Lotacao" ADD CONSTRAINT "Historico_Lotacao_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aula" ADD CONSTRAINT "Aula_calendarioId_fkey" FOREIGN KEY ("calendarioId") REFERENCES "Calendario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aula" ADD CONSTRAINT "Aula_lotacaoId_fkey" FOREIGN KEY ("lotacaoId") REFERENCES "Lotacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aula" ADD CONSTRAINT "Aula_horarioId_fkey" FOREIGN KEY ("horarioId") REFERENCES "Horario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
