/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Professor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Professor_nome_key" ON "Professor"("nome");
