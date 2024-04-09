/*
  Warnings:

  - Changed the type of `horarioInicio` on the `Horario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `horarioFim` on the `Horario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Horario" DROP COLUMN "horarioInicio",
ADD COLUMN     "horarioInicio" TIMESTAMP(3) NOT NULL,
DROP COLUMN "horarioFim",
ADD COLUMN     "horarioFim" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Horario_horarioInicio_key" ON "Horario"("horarioInicio");

-- CreateIndex
CREATE UNIQUE INDEX "Horario_horarioFim_key" ON "Horario"("horarioFim");
