var alunos =
 [{nome : 'Elesio',
Escrita: 7.0 ,
Conversacao: 9.0,
Leitura: 10.0},
{nome: 'Marcos',
Escrita: 7.0,
Conversacao: 8.5,
Leitura: 8.5},
{nome: 'Mark',
Escrita: 4.5,
Conversacao: 6.5,
Leitura: 7.2}
]

const resultado1 = alunos => alunos.Escrita >= 6
const resultadoF = alunos.filter(resultado1)
console.log(resultadoF)
var res = document.getElementById('res')
function resultado () {
    window.alert('oi')    
}