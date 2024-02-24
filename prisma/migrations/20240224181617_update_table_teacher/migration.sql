/*
  Warnings:

  - The primary key for the `Historico_Professor_Disciplina_Turma` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Professor_Disciplina_Turma` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `data_nascimento` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Historico_Professor_Disciplina_Turma" DROP CONSTRAINT "Historico_Professor_Disciplina_Turma_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Historico_Professor_Disciplina_Turma_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Historico_Professor_Disciplina_Turma_id_seq";

-- AlterTable
ALTER TABLE "Professor" ADD COLUMN     "data_nascimento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "url_image" TEXT;

-- AlterTable
ALTER TABLE "Professor_Disciplina_Turma" DROP CONSTRAINT "Professor_Disciplina_Turma_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Professor_Disciplina_Turma_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Professor_Disciplina_Turma_id_seq";
