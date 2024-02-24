/*
  Warnings:

  - You are about to drop the `_DisciplinaToProfessor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DisciplinaToTurma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProfessorToTurma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DisciplinaToProfessor" DROP CONSTRAINT "_DisciplinaToProfessor_A_fkey";

-- DropForeignKey
ALTER TABLE "_DisciplinaToProfessor" DROP CONSTRAINT "_DisciplinaToProfessor_B_fkey";

-- DropForeignKey
ALTER TABLE "_DisciplinaToTurma" DROP CONSTRAINT "_DisciplinaToTurma_A_fkey";

-- DropForeignKey
ALTER TABLE "_DisciplinaToTurma" DROP CONSTRAINT "_DisciplinaToTurma_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProfessorToTurma" DROP CONSTRAINT "_ProfessorToTurma_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProfessorToTurma" DROP CONSTRAINT "_ProfessorToTurma_B_fkey";

-- DropTable
DROP TABLE "_DisciplinaToProfessor";

-- DropTable
DROP TABLE "_DisciplinaToTurma";

-- DropTable
DROP TABLE "_ProfessorToTurma";

-- CreateTable
CREATE TABLE "Professor_Disciplina_Turma" (
    "id" SERIAL NOT NULL,
    "dataAlteracao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "professorId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "turmaId" TEXT NOT NULL,

    CONSTRAINT "Professor_Disciplina_Turma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_professor_id" ON "Professor_Disciplina_Turma"("professorId");

-- CreateIndex
CREATE INDEX "idx_disciplina_id" ON "Professor_Disciplina_Turma"("disciplinaId");

-- CreateIndex
CREATE INDEX "idx_turma_id" ON "Professor_Disciplina_Turma"("turmaId");

-- AddForeignKey
ALTER TABLE "Professor_Disciplina_Turma" ADD CONSTRAINT "Professor_Disciplina_Turma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor_Disciplina_Turma" ADD CONSTRAINT "Professor_Disciplina_Turma_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor_Disciplina_Turma" ADD CONSTRAINT "Professor_Disciplina_Turma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
