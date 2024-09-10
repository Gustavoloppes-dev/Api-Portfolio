import express from "express";
import { Resend } from "resend";

const resend = new Resend(process.env.API_KEY);
const userGmail = process.env.USER_GMAIL;
const senhaAppGmail = process.env.SENHA_APP_GMAIL;


const sendEmail = async (subject, text,nome, empresa) => {
  const { data, error } = await resend.emails.send({
    from: `${nome}-${empresa} <onboarding@resend.dev>`,
    to: userGmail,
    subject: subject,
    text: text,
  });
  return { data, error }; // Adicionei o retorno aqui
};

export default sendEmail;
