"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
// service.ts
const firebase_admin_1 = __importDefault(require("firebase-admin"));
function uploadImage(req, res, next) {
    const bucket = firebase_admin_1.default.storage().bucket();
    if (!req.file) {
        return res.status(400).json("Imagem é obrigatoria");
    }
    const imagem = req.file;
    if (!["image/png", "image/jpeg"].includes(imagem.mimetype)) {
        return res.status(400).json("Apenas arquivos PNG ou JPEG são permitidos");
    }
    const tamanhoMaximo = 30 * 1024 * 1024;
    if (imagem.size > tamanhoMaximo) {
        return res.status(400).json("O tamanho do arquivo excede o limite de 30 MB");
    }
    const fullNamefile = Date.now() + "." + imagem.originalname.split(".").pop();
    const file = bucket.file(fullNamefile);
    const stream = file.createWriteStream({
        metadata: {
            contentType: imagem.mimetype,
        },
    });
    stream.on("error", (e) => {
        console.log(e);
        next(e); // Encaminhe o erro para o próximo middleware de erro, se necessário.
    });
    stream.on("finish", async () => {
        await file.makePublic();
        req.headers.filebaseUrl = `https://firebasestorage.googleapis.com/v0/b/${process.env.FIREBASE_STORAGE_BUCKET}/o/${encodeURIComponent(fullNamefile)}?alt=media`;
        next();
    });
    stream.end(imagem.buffer);
}
exports.uploadImage = uploadImage;
