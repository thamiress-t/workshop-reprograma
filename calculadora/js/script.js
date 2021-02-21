//A funcao calcular precisa ser alterada no index.html
//src no fim do index.html indica que vai seguir o script daqui
var ganhomes = document.querySelector("#ganho-mes")
console.log(ganhomes)
var horasdia = document.querySelector("#horas-dia")
var valorhora = document.querySelector("#resposta")

function calcularValorHora(){
    // horas de trabalho por mês = horaspordia * dias úteis de trabalho
    valorhora.innerHTML = "R$" + (ganhomes.valueAsNumber/(22*horasdia.valueAsNumber)).toFixed(2) // ganho por hora = (ganho por mes)/(horas de trabalho por mes)

}