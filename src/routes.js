import {
  deleteUser,
  getUser,
  postUser,
  putUser,
  rotaInicial,
} from "./controllers/userController.js";

import { Router } from "express";
export const routes = Router();

routes.get("/", rotaInicial);
routes.get("/usuario", getUser); //pega ps usuários
routes.post("/usuario", postUser); //adicionar um novo usuário
routes.delete("/usuario/:id", deleteUser); //deletar um usuário. O :id permite que passe uma informação, sendo essa o id
routes.put("/usuario/:id", putUser); //faz alterações em um usuário usando o id como parametro
