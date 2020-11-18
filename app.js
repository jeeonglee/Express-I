const express = require("express")

let app = express()


app.get("/contatos", (req, res) => res.send("Pagina de Contatos"))
//criando um servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"))
