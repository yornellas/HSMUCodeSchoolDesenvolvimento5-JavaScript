let valor = prompt("Qual o valor da compra? ")
let valorFormat = parseFloat(valor)
let percDesconto
let desconto
let final

function calculaDesconto(valorFormat){
    if(valorFormat <= 499.90){
        percDesconto = "10%"
        desconto = (10 * valorFormat) / 100
        final = (valorFormat - desconto)
    } else {
        percDesconto = "15%"
        desconto = (15 * valorFormat) / 100
        final = (valorFormat - desconto)
    }
    return desconto, final
}

calculaDesconto(valorFormat)
document.write("Você teve um desconto de " +percDesconto +" equivalente a R$" +desconto +"<br>Valor final: R$" +final)