import mongoose from "mongoose";

const ProjetoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    imagem: {type: String, required: true},
    alt: {type: String, required: true},
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    tecnologia: {type: Array, required: true},
    live: {type: String, required: true},
    github: {type: String, required: true},
    destaque: {type: Boolean}
}, {versionKey: false});

const projetos = mongoose.model("projetos", ProjetoSchema);

export default projetos;