var nam = document.getElementById('nome')
var altura = document.getElementById('altura')
var peso = document.getElementById('peso')
var resposta = document.getElementById('res')

function calcular() { 
    
    if(nome.value.length=='') {
        alert('Digite seu nome')
    }
    if(altura.value.length=='') {
        alert('Digite sua altura')
    }
    if(peso.value.length=='') {
        alert('Digite seu peso')
    } else {
        var sub = String(nam.value)
        const alt = Number.parseFloat(altura.value).toFixed(2)
        const pes = Number.parseFloat(peso.value).toFixed(2)
        const um = 2
        const mul = alt * um
        var divi = pes / mul.toFixed(2)
        resposta.innerHTML = `${sub}. Seu IMC é de ${divi}`
    }
   
}

