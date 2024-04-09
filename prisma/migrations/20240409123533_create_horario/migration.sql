/*
  Warnings:

  - The primary key for the `Calendario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `calendarioId` on the `Calendario` table. All the data in the column will be lost.
  - You are about to drop the column `horarioFim` on the `Calendario` table. All the data in the column will be lost.
  - You are about to drop the column `horarioInicio` on the `Calendario` table. All the data in the column will be lost.
  - Added the required column `horarioId` to the `Calendario` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Calendario` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Calendario" DROP CONSTRAINT "Calendario_pkey",
DROP COLUMN "calendarioId",
DROP COLUMN "horarioFim",
DROP COLUMN "horarioInicio",
ADD COLUMN     "horarioId" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Calendario_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Horario" (
    "id" TEXT NOT NULL,
    "horarioInicio" TEXT NOT NULL,
    "horarioFim" TEXT NOT NULL,

    CONSTRAINT "Horario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Calendario" ADD CONSTRAINT "Calendario_horarioId_fkey" FOREIGN KEY ("horarioId") REFERENCES "Horario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
