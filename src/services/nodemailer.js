import nodemailer from "nodemailer";

const userGmail = process.env.USER_GMAIL;
const senhaAppGmail = process.env.SENHA_APP_GMAIL;

const transporter = nodemailer.createTransport({
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