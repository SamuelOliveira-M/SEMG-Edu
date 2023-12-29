-- CreateTable
CREATE TABLE "Responsavel" (
    "id" TEXT NOT NULL,
    "nome_pai" TEXT,
    "nome_mae" TEXT,
    "telefone" TEXT NOT NULL,
    "telefone_secundario" TEXT,

    CONSTRAINT "Responsavel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "municipio_nascimento" TEXT NOT NULL,
    "uf_nascimento" TEXT NOT NULL,
    "cpf" TEXT,
    "responsavelId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Escola" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cod_inep" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,

    CONSTRAINT "Escola_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnoLetivo" (
    "id" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_finalizacao" TIMESTAMP(3),

    CONSTRAINT "AnoLetivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turma" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "serie" INTEGER NOT NULL,
    "turno" TEXT NOT NULL,
    "escolaId" TEXT NOT NULL,
    "ano_letivoId" TEXT NOT NULL,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matricula" (
    "id" TEXT NOT NULL,
    "numero_matricula" TEXT,
    "escolaId" TEXT NOT NULL,
    "turmaId" TEXT NOT NULL,

    CONSTRAINT "Matricula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nota" (
    "id" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    "mes" INTEGER NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "matriculaId" TEXT NOT NULL,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "carga_horaria" INTEGER NOT NULL,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TurmaDisciplina" (
    "turmaId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,

    CONSTRAINT "TurmaDisciplina_pkey" PRIMARY KEY ("turmaId","disciplinaId")
);

-- CreateTable
CREATE TABLE "Gestor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Gestor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_token" (
    "id" TEXT NOT NULL,
    "expiresIn" INTEGER NOT NULL,
    "gestorId" TEXT NOT NULL,

    CONSTRAINT "refresh_token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_token_professor" (
    "id" TEXT NOT NULL,
    "expiresIn" INTEGER NOT NULL,
    "professorId" TEXT NOT NULL,

    CONSTRAINT "refresh_token_professor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_cpf_key" ON "Aluno"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_responsavelId_key" ON "Aluno"("responsavelId");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_addressId_key" ON "Aluno"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Escola_cod_inep_key" ON "Escola"("cod_inep");

-- CreateIndex
CREATE UNIQUE INDEX "Escola_email_key" ON "Escola"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Escola_addressId_key" ON "Escola"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Turma_escolaId_key" ON "Turma"("escolaId");

-- CreateIndex
CREATE UNIQUE INDEX "Turma_ano_letivoId_key" ON "Turma"("ano_letivoId");

-- CreateIndex
CREATE UNIQUE INDEX "Matricula_escolaId_key" ON "Matricula"("escolaId");

-- CreateIndex
CREATE UNIQUE INDEX "Matricula_turmaId_key" ON "Matricula"("turmaId");

-- CreateIndex
CREATE UNIQUE INDEX "Nota_disciplinaId_key" ON "Nota"("disciplinaId");

-- CreateIndex
CREATE UNIQUE INDEX "Nota_matriculaId_key" ON "Nota"("matriculaId");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Gestor_email_key" ON "Gestor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_gestorId_key" ON "refresh_token"("gestorId");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_professor_professorId_key" ON "refresh_token_professor"("professorId");

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "Responsavel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Escola" ADD CONSTRAINT "Escola_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_escolaId_fkey" FOREIGN KEY ("escolaId") REFERENCES "Escola"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_ano_letivoId_fkey" FOREIGN KEY ("ano_letivoId") REFERENCES "AnoLetivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_escolaId_fkey" FOREIGN KEY ("escolaId") REFERENCES "Escola"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_matriculaId_fkey" FOREIGN KEY ("matriculaId") REFERENCES "Matricula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TurmaDisciplina" ADD CONSTRAINT "TurmaDisciplina_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TurmaDisciplina" ADD CONSTRAINT "TurmaDisciplina_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TurmaDisciplina" ADD CONSTRAINT "TurmaDisciplina_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_token" ADD CONSTRAINT "refresh_token_gestorId_fkey" FOREIGN KEY ("gestorId") REFERENCES "Gestor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_token_professor" ADD CONSTRAINT "refresh_token_professor_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
