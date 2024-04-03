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

-- CreateTable
CREATE TABLE "Calendario" (
    "calendarioId" TEXT NOT NULL,
    "diaSemana" TEXT NOT NULL,
    "horarioInicio" TIMESTAMP(3) NOT NULL,
    "horarioFim" TIMESTAMP(3) NOT NULL,
    "lotacaoId" TEXT NOT NULL,

    CONSTRAINT "Calendario_pkey" PRIMARY KEY ("calendarioId")
);

-- AddForeignKey
ALTER TABLE "Professor_Disciplina_Turma" ADD CONSTRAINT "Professor_Disciplina_Turma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor_Disciplina_Turma" ADD CONSTRAINT "Professor_Disciplina_Turma_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor_Disciplina_Turma" ADD CONSTRAINT "Professor_Disciplina_Turma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico_Professor_Disciplina_Turma" ADD CONSTRAINT "Historico_Professor_Disciplina_Turma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico_Professor_Disciplina_Turma" ADD CONSTRAINT "Historico_Professor_Disciplina_Turma_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calendario" ADD CONSTRAINT "Calendario_lotacaoId_fkey" FOREIGN KEY ("lotacaoId") REFERENCES "Professor_Disciplina_Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
