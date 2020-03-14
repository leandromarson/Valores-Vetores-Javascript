let num = document.getElementById("num")
let lista = document.getElementById("lista")
let res = document.getElementById("res")
let vetor = []

function isNumero(num){
    if(Number(num)>=1 && Number(num)<=100){
        return true
    }else{
        return false
    }
}

function inLista(num, lista){
    if(lista.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){

    if(document.getElementById("num").value.length==0){
        alert("[ERRO] O campo está vazio")
    }else{
        if(isNumero(num.value) &&  !inLista(num.value, vetor)){
            vetor.push(Number(num.value))
            let item = document.createElement('option')
            item.innerHTML = `O valor inserido na posição ${vetor.indexOf(Number(num.value))} do vetor foi: ${Number(num.value)}`
            lista.appendChild(item)
            res.innerText= ""


        }else{
            alert("[ERRO] Valor inválido ou já se encontra na lista")
        }
        num.value = ''
        num.focus()
    }
    

    


}
function finalizar(){
    if(vetor.length == 0){
        alert("[ERRO] Insira valores na lista")
    }else{
        let maior = Math.max.apply(null,vetor)
        let menor = Math.min.apply(null,vetor)
        let soma = 0       
        for(x in vetor){
            soma += vetor[x]
        }
        let media = (soma/vetor.length)

        res.innerHTML+= `<p>Ao todo temos ${vetor.length} números cadastrados!</p>`
        res.innerHTML+= `<p>O maior valor cadastrado: ${maior}</p>`
        res.innerHTML+= `<p>O menor valor cadastrado: ${menor}</p>`
        res.innerHTML+= `<p>O soma dos valores cadastrados: ${soma}</p>`
        res.innerHTML+= `<p>A média dos valores cadastrados: ${media.toFixed(2)}</p>`
    }

}