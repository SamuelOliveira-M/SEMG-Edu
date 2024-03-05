"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarEstruturaDados = void 0;
function criarEstruturaDados(dadosApi) {
    if (dadosApi.length === 0) {
        console.error("Dados da API vazios.");
        return null;
    }
    const list = [];
    let quantNotas = 0;
    let tatalNotas = 0;
    dadosApi.map((disciplina) => {
        let notas = {
            "materia": disciplina.nome,
            "aprovacao": "",
            "marco": 0,
            "abril": 0,
            "maio": 0,
            "junho": 0,
            "recup1": 0,
            "agosto": 0,
            "setembro": 0,
            "outubro": 0,
            "novembro": 0,
            "recup2": 0,
            "provaFinal": 0,
            "media": 0
        };
        disciplina.avaliacao.map((avaliacao) => {
            quantNotas += 1;
            tatalNotas += avaliacao.nota;
            if (avaliacao.semestre == 1) {
                if (avaliacao.mes !== null) {
                    const mes = obterNomeMes(avaliacao.mes);
                    notas[mes] = avaliacao.nota;
                }
                else {
                    notas.recup1 = avaliacao.nota;
                }
            }
            else {
                if (avaliacao.mes !== null) {
                    const mes = obterNomeMes(avaliacao.mes);
                    notas[mes] = avaliacao.nota;
                }
                if (avaliacao.tipo === "final") {
                    notas.provaFinal = avaliacao.nota;
                }
                notas.recup2 = avaliacao.nota;
            }
        });
        notas.media = tatalNotas / quantNotas;
        if (quantNotas == 8) {
            if (notas.media > 5) {
                notas.aprovacao = "Aprovação";
            }
            notas.aprovacao = "Reprovado";
        }
        else {
            notas.aprovacao = "Cursando";
        }
        list.push(notas);
    });
    return list;
}
exports.criarEstruturaDados = criarEstruturaDados;
function obterNomeMes(numeroMes) {
    const data = new Date();
    data.setMonth(numeroMes - 1);
    return data.toLocaleString('pt-BR', { month: 'long' });
}
