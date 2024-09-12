import express from "express";
import conectaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDataBase();

//verifica se ocorreu algum erro na conexão
conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
})

//Espera pelo evento de conexão
conexao.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
    
})

const app = express();

const allowedOrigins = ['http://localhost:3000', 'https://portfolio-three-alpha-85.vercel.app/'];

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Substitua pelo URL da sua aplicação
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

routes(app)

export default app;