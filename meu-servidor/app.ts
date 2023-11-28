// Importar o módulo Express
import express, { Request, Response } from "express";

// Criar uma instância do Express
const app = express();

// Definir uma rota simples
app.get("/", (req: Request, res: Response) => {
    res.send("Bem-vindo ao meu web service!");
});

// Definir a porta em que o servidor irá ouvir
const PORT: number = 3000;

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});