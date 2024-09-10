import express from 'express';
import ResendController from '../controllers/resendController.js';

const routes = express.Router();

routes.post("/contato", ResendController.enviarEmailResend);

export default routes; 