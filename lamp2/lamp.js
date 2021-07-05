var img = document.getElementById('lampoff')
var lampon = document.getElementById('ligar')
var lampof = document.getElementById("desligar")
var res = document.getElementById('res')

function notfun () {
   return img.src.indexOf('quebrada') > -1
}

function quebrou ( ) {
    
    img.src = 'quebrada.jpg'
    res.innerHTML= 'A lampada quebrou :('
}



function desligar (){
    if(!notfun() )
   { img.src = 'desligada.jpg'
    res.innerHTML= "A lampada esta desligada."}
}


function ligar () {
    if(!notfun() )
    {img.src = 'ligada.jpg'
    res.innerHTML = "A lampada está ligada"}
}

img.addEventListener ('dblclick', quebrou)
img.addEventListener('mouseleave', desligar)
img.addEventListener('mouseenter', ligar)
lampon.addEventListener('click', ligar)
lampof.addEventListener('click', desligar)