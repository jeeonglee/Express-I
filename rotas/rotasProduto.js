const { Router } = require("express")
const express = require("express")

const router = express.Router()

router.get("/criar", (req, res)=> res.send("Criando um produto"))
router.get("/deletar", (req, res)=> res.send("Deletando um produto"))
router.get("/MochilaNike", (req, res)=> res.send("Produto Mochila Nike"))

module.exports = router