// import nodemailer from "nodemailer";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const nodemailer = require('nodemailer');

const userGmail = process.env.USER_GMAIL;
const senhaAppGmail = process.env.SENHA_APP_GMAIL;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    user: userGmail,
    pass: senhaAppGmail,
  },
});

const enviar = (to, subject, text) => {
  transporter.sendMail({
    from: userGmail,
    to: to,
    subject: subject,
    text: text,
  });
};

export default enviar;
