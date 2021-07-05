class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = []
    }
    cadastrar() {
        let produto = this.lerDados()
        if (produto.nomeProduto == '') {
          alert('Informe o Produto.')
        }

        if(produto.precoProduto == '') {
            alert('Informe o preço do produto.')
        }

        if (!produto.precoProduto == '' && !produto.nomeProduto == '') {
            this.adicionar(produto)
            this.produtoTabela ()
            this.cancelar ()
          console.log(this.arrayProdutos)
        }
    }

    lerDados() {
        let produto = []
        produto.nomeProduto = document.getElementById('produto').value
        produto.precoProduto = document.getElementById('preco').value
        produto.id = this.id
        return produto
    }

    adicionar (produto) {
        produto.precoProduto = parseInt(produto.precoProduto)
        this.arrayProdutos.push(produto)
        this.id++
    }

    produtoTabela () {
        let tabela = document.getElementById('tabela')
        tabela.innerText =''
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tabela.insertRow ()
            let td_id = tr.insertCell ()
            let td_preco = tr.insertCell ()
            let td_produto = tr.insertCell ()
            let td_acoes = tr.insertCell ()

            let imgDelete = document.createElement('img')
            imgDelete.src = 'delete.svg'
            imgDelete.setAttribute('onclick', 'produto.deletarProduto('+ this.arrayProdutos[i].id+')' )
            
            td_id.innerText = this.arrayProdutos[i].id
            td_preco.innerText = this.arrayProdutos[i].nomeProduto
            td_produto.innerText = this.arrayProdutos[i].precoProduto


            td_acoes.appendChild(imgDelete)
        }
    }

    cancelar () {
        document.getElementById('produto').value = ''
        document.getElementById('preco').value = ''
        document.getElementById('produto').focus()
        res.innerHTML = ''

        
    }

    somar () {
      
    }

    deletarProduto (id) {
        let tabela = document.getElementById('tabela')
        if (confirm('Deseja realmente excluir ID: '+id)) {
        for (let i = 0; i <this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i,1)
                tabela.deleteRow(i)}
                document.getElementById('produto').focus()
            }
        }
    }
}

var produto = new Produto()