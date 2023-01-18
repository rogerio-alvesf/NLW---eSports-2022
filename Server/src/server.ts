import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    {
      id: 0,
      nome: "League of Legends",
    },
    {
      id: 1,
      nome: "Batman Arkhan Knight",
    },
    {
      id: 2,
      nome: "Batman Arkhan City",
    },
  ]);
});

/* App.listen é um função utilizada para declarar
a porta que será utilizada para realizar as requisições*/
app.listen(3333);
