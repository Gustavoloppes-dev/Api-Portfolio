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
routes(app)


export default app;