import express from 'express';
import EmailController from '../controllers/emailController.js'
import EmailController from '../controllers/emailController.js';


const routes = express.Router();

routes.post("/contato", EmailController.enviarEmail);

export default routes
