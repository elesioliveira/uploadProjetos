let num = document.getElementById('numero')
let lista = document.getElementById('lista')
let valores = []
let n = Number(num.value)
let res = document.getElementById('res')

function isNumber(n){
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n ,l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumber(Number(num.value)) && !inLista(num.value,valores) ) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado .`
        lista.appendChild(item)
        num.value=""
        num.focus()
     } else {
        alert('Insira corretamente !')
    }
    
    }
    function finalizar() {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        for(chave in valores) {
            soma += valores[chave]
        if(maior < valores[chave])
        maior = valores[chave]
        } if (menor > valores[chave]) {
            menor = valores[chave]
        }
        let media = soma / tot
        res.innerHTML += `o total de elementos são ${tot}`
        res.innerHTML += ` <br> o maior valor é ${maior}`
        res.innerHTML += `<br> o menor valor é ${menor}`
        res.innerHTML += `<br> a soma de todos valores é ${soma}`
        res.innerHTML += `<br> a media dos valores é ${media}`
}