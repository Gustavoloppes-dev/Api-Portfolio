import express from "express";
import projetos from "./projetosRoutes.js"
import resendEmail from "./resendRouter.js"

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send("Rotas Centralizadas"));

    app.use(express.json(), projetos, resendEmail)
}

export default routes;