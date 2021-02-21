//DECLARAÇÃO DAS VARIÁVEIS

// Associando a variável valor_hora à id da primeira input
var valor_hora = document.querySelector("#valor-hora")
console.log(valor_hora)

// Associando a variável horas_projeto à id da segunda input
var horas_projeto = document.querySelector("#horas-projeto")
console.log(horas_projeto)

// Associando a variável custo_total à id da saida
var custo_total = document.querySelector("#resposta")
console.log(custo_total)

//=====================================================================================================

//Função para calcular custo total

function calcular() {
// Atribuimos à variavel custo_total, que agora está associada à id #resposta do html, o valor do custo total do projeto.
//As casas decimais foram limitadas a apenas duas casas decimais, por se tratar de uma quantia em dinheiro.
// custo_total = custo de uma hora* quantidade de horas do projeto
    custo_total.innerHTML = "R$" + (valor_hora.valueAsNumber*horas_projeto.valueAsNumber).toFixed(2)
}