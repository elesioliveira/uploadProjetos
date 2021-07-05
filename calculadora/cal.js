var tabuada =document.getElementById('tabuada')
var calcular = document.getElementById('calcular')
var limpar = document.getElementById('limpar')
var numero = [0,1,2,3,4,5,6,7,8,9,10]
var res= document.getElementById('res')

tabuada2 = Number(tabuada.value)

function limpo () {
    res.innerHTML = ""
    tabuada.value = ""
    tabuada.focus()
}

function mult () {
    if (tabuada.value == "") {
        alert('insira um valor')
    } else 
   { var multi = numero.map(function(el){
        return el * tabuada.value
    }) 
    res.innerHTML = `O resultado = ${multi}`}
}

limpar.addEventListener('click', limpo)
calcular.addEventListener('click', mult)