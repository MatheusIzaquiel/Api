import mongoose from "mongoose";
//criando um Schema para colocar dados no banco de dados, isso é importante para cria um padrão do q entra nele e tipar as informações
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});
//modelo de gerenciamento do banco de dados
export const User = mongoose.model("User", userSchema);
