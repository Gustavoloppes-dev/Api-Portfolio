import mongoose from "mongoose";
import projetos from "../model/Projeto.js";

class ProjetoController {
    static async listarProjetos(req, res) {
        try {
            const listaProjeto = await projetos.find({});
            res.status(200).json(listaProjeto);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha na requisição`});
        }
    }
}

export default ProjetoController;