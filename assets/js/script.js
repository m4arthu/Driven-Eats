var lista = []

function selection(id) {
    let item = document.getElementById(id)
    let itemn = item.id.match(/\d+/)[0] // pegando numer do elemento

    let pedido = item.innerText.toString()

    if (item.style.border === '1px solid black') {
        
        lista.splice(lista.indexOf(item.innerText),1)
        item.style.border = "none"

        if (lista.length < 3) {
            let button = document.getElementById('checkout-button')
            let elemento = document.getElementById('checkout-button')

            elemento.innerHTML = "<p>selecione 3 produtos para fechar o pedido</p>"
            elemento.style.backgroundColor = "#CBCBCB"

            button.setAttribute("disabled", true)
        }
    } else {
        lista.push(pedido)
        item.style.border = '1px solid black'
    }

    if (lista.length >= 3) {
        let button = document.getElementById('checkout-button')
        let elemento = document.getElementById('checkout-button')

        elemento.innerHTML = "<p>clique aqui para finalizar</p>"
        elemento.style.backgroundColor = "green"

        button.removeAttribute("disabled")

    }

    console.log(lista)
}

function send() {
 var pedidos =""
    for (let i = 0; i < lista.length; i++) {
       let pedido = lista[i]
        pedidos += pedido   
    }

  window.open(`https://api.whatsapp.com/send?phone=5599984592679&text=${pedidos}`)

}







