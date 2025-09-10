import express from "express";
import { conectBD } from "./src/db.js";
import { routes } from "./src/routes.js";
const app = express();
app.use(express.json());
app.use(routes);
conectBD();

app.listen(3000, () => {
  console.log(`Servidor rodando`);
}); //app.listen é o local onde a api vai rodar, nesse caso na rota 3000

//usuário: dbMatheus
//senha:mt3303310
