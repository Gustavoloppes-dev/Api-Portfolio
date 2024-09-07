import express from "express";
import projetos from "./projetosRoutes.js"
// import email from "./emailRouter.js"

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send("Rotas Centralizadas"));

    app.use(express.json(), projetos)
}

export default routes;