import express from 'express';
import EmailController from '../controllers/EmailController.js';

const routes = express.Router();

routes.post("/contato", EmailController.enviarEmail);

export default routes