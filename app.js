const express = require("express")
const rotasProdutos = require("./rotas/rotasProduto")
let app = express()

//rotas
app.get("/contatos", (req, res) => res.send("Pagina de Contatos"))
app.get("/contatos", (req, res)=> res.send("Pagina contatos"))

//rotas em pastas (Sistema de roteamento)
app.use("/produtos", rotasProdutos)

//criando um servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"))
