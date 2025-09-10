import { User } from "../models/User.js";

//Rota inícial
export const rotaInicial = (req, res) => {
  res.send("Rota inícial (/)");
};

//Get em usuários
export const getUser = async (req, res) => {
  const usuarios = await User.find();
  res.json(usuarios);
};

//Post em usuários
export const postUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      res.json({ message: "Todas as informações são obrigatórias" });
    }
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });
    res.json(newUser);
  } catch (error) {
    console.log("Erro ao adicionar o usuário");
    return;
  }
};

//Delete em usuários
export const deleteUser = async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  res.json({ message: `O usuário foi excluído` });
};

//Put em usuários
export const putUser = async (req, res) => {
  const { name, email, password } = req.body;
  const editedUser = await User.findByIdAndUpdate(req.params.id, {
    name: name,
    email: email,
    password: password,
  });
  res.json({ message: "O usuário foi atualizado" });
};
