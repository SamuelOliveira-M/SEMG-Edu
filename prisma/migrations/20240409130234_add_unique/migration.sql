/*
  Warnings:

  - A unique constraint covering the columns `[horarioInicio]` on the table `Horario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[horarioFim]` on the table `Horario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Horario_horarioInicio_key" ON "Horario"("horarioInicio");

-- CreateIndex
CREATE UNIQUE INDEX "Horario_horarioFim_key" ON "Horario"("horarioFim");
