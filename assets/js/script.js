var lista = []
var preços = []


function selection(id) {
    let item = document.getElementById(id)
    let itemn = item.id.match(/\d+/)[0] // pegando numer do elemento
    let preco = document.getElementById(`preço${itemn}`).innerText

    let pedido = item.innerText.toString()
    if (item.style.border !== '1px solid black') { 
        preços.push(preco)
        lista.push(pedido)
        item.style.border = '1px solid black'
        if (preços.length < 3) {
            let button = document.getElementById('checkout-button')
            let elemento = document.getElementById('checkout-button')
            
            elemento.innerHTML = "<p>selecione 3 produtos para fechar o pedido</p>"
            elemento.style.backgroundColor = "#CBCBCB"
            
            button.setAttribute("disabled", true)
        }
    } else {
        lista.shift(pedido)
        preços.shift(preco)
        item.style.border = "none"     
    }

    if (preços.length >= 3) {
        let button = document.getElementById('checkout-button')
        let elemento = document.getElementById('checkout-button')

        elemento.innerHTML = "<p>clique aqui para finalizar</p>"
        elemento.style.backgroundColor = "green"

        button.removeAttribute("disabled")

    }

    console.log(lista)
}

function send() {

  /*
   let  texto = encodeURIComponent()   
   
   get("https://api.whatsapp.com/send?+5599984592679&text=TextoParaEnviar")
*/
}







