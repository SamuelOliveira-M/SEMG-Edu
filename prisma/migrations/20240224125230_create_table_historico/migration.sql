-- CreateTable
CREATE TABLE "Historico_Professor_Disciplina_Turma" (
    "id" SERIAL NOT NULL,
    "dataAlteracao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "professorId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "turmaId" TEXT NOT NULL,

    CONSTRAINT "Historico_Professor_Disciplina_Turma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_historico_professor_id" ON "Historico_Professor_Disciplina_Turma"("professorId");

-- CreateIndex
CREATE INDEX "idx_historico_disciplina_id" ON "Historico_Professor_Disciplina_Turma"("disciplinaId");

-- CreateIndex
CREATE INDEX "idx_historico_turma_id" ON "Historico_Professor_Disciplina_Turma"("turmaId");

-- AddForeignKey
ALTER TABLE "Historico_Professor_Disciplina_Turma" ADD CONSTRAINT "Historico_Professor_Disciplina_Turma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico_Professor_Disciplina_Turma" ADD CONSTRAINT "Historico_Professor_Disciplina_Turma_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historico_Professor_Disciplina_Turma" ADD CONSTRAINT "Historico_Professor_Disciplina_Turma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
