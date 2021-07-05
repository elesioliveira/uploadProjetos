function tabuada () {
    var num = document.getElementById ('txtt')
    var t = document.getElementById('tabuada')
    if (num.value.length == '') {
        alert('[ERRO] Digite um numero !')
    } else {
        var n = Number(num.value)
        var c = 1
        t.innerHTML= ""
        for(c ; c <=10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            t.appendChild(item)

        }
    }
}