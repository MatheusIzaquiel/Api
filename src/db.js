import mongoose from "mongoose";
const password = "";
const nameDB = "pizzaria";
const mongoUrl = `mongodb+srv://dbMatheus:${password}@bancodedadosdaapi.wp8rpum.mongodb.net/${nameDB}?retryWrites=true&w=majority&appName=BancodeDadosdaApi`;

export async function conectBD() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Conectado ao banco de dados");
  } catch (error) {
    console.log("Erro ao Conectar");
    return;
  }
}
