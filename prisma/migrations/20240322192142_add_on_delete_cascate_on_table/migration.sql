-- DropForeignKey
ALTER TABLE "Historico_Professor_Disciplina_Turma" DROP CONSTRAINT "Historico_Professor_Disciplina_Turma_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "Historico_Professor_Disciplina_Turma" DROP CONSTRAINT "Historico_Professor_Disciplina_Turma_professorId_fkey";

-- DropForeignKey
ALTER TABLE "Professor_Disciplina_Turma" DROP CONSTRAINT "Professor_Disciplina_Turma_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "Professor_Disciplina_Turma" DROP CONSTRAINT "Professor_Disciplina_Turma_professorId_fkey";

-- DropForeignKey
ALTER TABLE "Professor_Disciplina_Turma" DROP CONSTRAINT "Professor_Disciplina_Turma_turmaId_fkey";

-- AddForeignKey
ALTER TABLE "Professor_Disciplina_Turma" ADD CONSTRAINT "Professor_Disciplina_Turma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor_Disciplina_Turma" ADD CONSTRAINT "Professor_Disciplina_Turma_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor_Disciplina_Turma" ADD CONSTRAINT "Professor_Disciplina_Turma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico_Professor_Disciplina_Turma" ADD CONSTRAINT "Historico_Professor_Disciplina_Turma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico_Professor_Disciplina_Turma" ADD CONSTRAINT "Historico_Professor_Disciplina_Turma_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;
