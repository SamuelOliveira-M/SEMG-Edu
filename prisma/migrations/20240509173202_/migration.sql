/*
  Warnings:

  - A unique constraint covering the columns `[diaSemana]` on the table `Calendario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Calendario_diaSemana_key" ON "Calendario"("diaSemana");
