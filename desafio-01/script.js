let inputProduto = document.querySelector("#produtoInput")
let inputQtd = document.querySelector("#quantidadeInput")
let inputPreco = document.querySelector("#precoInput")
let outPut = document.querySelector("#output")
let btn = document.querySelector("#btn")

if (!inputProduto.value) {
    alert("Preecha o campo de Produto")
}else if (!inputQtd.value) {
    alert("Preencha o campo de Quantidade")
} else if (!inputPreco.value) {
    alert("Preencha o campo de Valor")
} else {
    addEventListener("click", function soma(paramNome, paramQtd, paramPreco){

        inputProduto.value = paramNome;
        inputQtd.value = paramQtd;
        inputPreco.value = paramPreco;
        outPut.value = `Produto: ${inputProduto.value} Quantidade: ${inputQtd.value} Preço: ${inputPreco.value}`

    })
    
    soma(inputProduto.value, inputQtd.value, inputPreco.value)
}