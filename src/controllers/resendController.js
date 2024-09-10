import sendEmail from "../services/resend.js";

class ResendController {
    static enviarEmailResend = async (req, res) => {
        try {
            const { subject, text, nome, empresa } = req.body;

            const { data, error } = await sendEmail( subject, text, nome, empresa); // Adicionei await aqui

            if (error) {
                return res.status(400).json({ error });
            }

            return res.status(200).json({ data });
        } catch (error) {
            return res.status(400).json({ error });
        }
    }
}

export default ResendController;