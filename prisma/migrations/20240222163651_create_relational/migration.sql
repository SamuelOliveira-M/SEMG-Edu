/*
  Warnings:

  - You are about to drop the `TurmaDisciplina` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TurmaDisciplina" DROP CONSTRAINT "TurmaDisciplina_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "TurmaDisciplina" DROP CONSTRAINT "TurmaDisciplina_professorId_fkey";

-- DropForeignKey
ALTER TABLE "TurmaDisciplina" DROP CONSTRAINT "TurmaDisciplina_turmaId_fkey";

-- DropTable
DROP TABLE "TurmaDisciplina";

-- CreateTable
CREATE TABLE "_DisciplinaToProfessor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DisciplinaToTurma" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProfessorToTurma" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DisciplinaToProfessor_AB_unique" ON "_DisciplinaToProfessor"("A", "B");

-- CreateIndex
CREATE INDEX "_DisciplinaToProfessor_B_index" ON "_DisciplinaToProfessor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DisciplinaToTurma_AB_unique" ON "_DisciplinaToTurma"("A", "B");

-- CreateIndex
CREATE INDEX "_DisciplinaToTurma_B_index" ON "_DisciplinaToTurma"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProfessorToTurma_AB_unique" ON "_ProfessorToTurma"("A", "B");

-- CreateIndex
CREATE INDEX "_ProfessorToTurma_B_index" ON "_ProfessorToTurma"("B");

-- AddForeignKey
ALTER TABLE "_DisciplinaToProfessor" ADD CONSTRAINT "_DisciplinaToProfessor_A_fkey" FOREIGN KEY ("A") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DisciplinaToProfessor" ADD CONSTRAINT "_DisciplinaToProfessor_B_fkey" FOREIGN KEY ("B") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DisciplinaToTurma" ADD CONSTRAINT "_DisciplinaToTurma_A_fkey" FOREIGN KEY ("A") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DisciplinaToTurma" ADD CONSTRAINT "_DisciplinaToTurma_B_fkey" FOREIGN KEY ("B") REFERENCES "Turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfessorToTurma" ADD CONSTRAINT "_ProfessorToTurma_A_fkey" FOREIGN KEY ("A") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfessorToTurma" ADD CONSTRAINT "_ProfessorToTurma_B_fkey" FOREIGN KEY ("B") REFERENCES "Turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;
