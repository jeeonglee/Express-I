const ProdutoController = {
    criarProduto: (req, res) => {
        res.send("Criando um produto")
    }, 
    deletarProduto: (req,res) => {
        res.send("Deletando um Produto")
    }    
}

module.exports = ProdutoController