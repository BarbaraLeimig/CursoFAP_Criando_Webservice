// Importar o módulo Express
import express, { Request, Response } from "express";
import bodyParser from "body-parser";

// Criar uma instância do Express
const app = express();

// Middleware BodyParser para processar dados nas solicitações POST e PUT
app.use(bodyParser.json());

// Armazenamento de exemplo para usuários
const users = [
    { id: 1, name: "Jhon Doe", age: 25, email: "jhon.doe@example.com" },
    { id: 2, name: "Alice", age: 30, email: "alice@example.com" },
    { id: 3, name: "Bob", age: 28, email: "bob@example.com" },
];

// Definir uma rota simples
app.get("/user", (req: Request, res: Response) => {
    const user = {
        name: "Jhon Doe",
        age: 25,
        email: "jhon.doe@example.com",
    };

    res.json(user);
});

// Novo endpoint de usuários (listagem de todos os usuários)
app.get("/users", (req: Request, res: Response) => {
    res.json(users);
});

// Rota HTTP para detalhes do usuário (com base no ID)
app.get("/user/:id", (req: Request, res: Response) => {
    const userId = parseInt(req.params.id, 10);

    // Encontrar o usuário com base no ID
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "Usuário não encontrado" });
    }
});

// Endpoint para adicionar usuário
app.post("/user", (req: Request, res: Response) => {
    const { name, age, email } = req.body;

    // Gerar um novo ID (simplificado, pode precisar de uma lógica mais robusta)
    const newUserId = users.length + 1;

    // Criar um novo usuário
    const newUser = { id: newUserId, name, age, email };

    // Adicionar o novo usuário à lista de usuários
    users.push(newUser);

    res.status(201).json(newUser); // 201 indica criação bem-sucedida
});

// Rota HTTP para saudação personalizada
app.get("/greet/:name", (req: Request, res: Response) => {
    const userName = req.params.name;
    const greeting = `Olá, ${userName}! Bem-vindo ao nosso serviço.`;
    res.json({ greeting });
});

// Definir a porta em que o servidor irá ouvir
const PORT: number = 3000;

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
