import express from "express";
import ProjetoController from "../controllers/projetosController.js";

const routes = express.Router();

routes.get("/projetos", ProjetoController.listarProjetos);

export default routes;