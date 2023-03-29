var prato = ""
var pratoId = ""
var bebida = ""
var bebidaId = ""
var sobremesa = ""
var sobremesaId = ""


function seletionPratos(id) {
  let button = document.getElementById("checkout-button")
  let prato1 = document.getElementById(id)
  let pratoid = prato1.id
  if (pratoId === "") {
    prato += "Frango Yin Yang"
    pratoId = pratoid
    prato1.style.border = "2px solid green"
  } else {
    let prato2 = document.getElementById(pratoId)
    prato2.style.border = "none"
    prato1.style.border = "1px solid green"
    pratoId = pratoid
  }
  if (prato != "" && sobremesa != "" && bebida != "") {
    button.removeAttribute("disabled")
    button.style.backgroundColor = "green"
  }
}

function selectionBebidas(id) {
  let button = document.getElementById("checkout-button")
  let bebida1 = document.getElementById(id)
  let bebidaid = bebida1.id
  if (bebidaId === "") {
    bebida += "Coquinha-gelada"
    bebidaId = bebidaid
    bebida1.style.border = "2px solid green"
  } else {
    let bebida2 = document.getElementById(bebidaId)
    bebida2.style.border = "none"
    bebida1.style.border = "1px solid green"
    bebidaId = bebidaid
  }
  if (prato != "" && sobremesa != "" && bebida != "") {
    button.removeAttribute("disabled")
    button.style.backgroundColor = "green"
  }
}

function selectionDessert(id) {
  let button = document.getElementById("checkout-button")
  let sobremesa1 = document.getElementById(id)
  let sobremesaid = sobremesa1.id
  if (sobremesaId === "") {
    sobremesa += "Pudim"
    sobremesaId = sobremesaid
    sobremesa1.style.border = "2px solid green"
  } else {
    let sobremesa2 = document.getElementById(sobremesaId)
    sobremesa2.style.border = "none"
    sobremesa1.style.border = "1px solid green"
    sobremesaId = sobremesaid
  }

  if (prato != "" && sobremesa != "" && bebida != "") {
    button.removeAttribute("disabled")
    button.style.backgroundColor = "green"
  }

}

function send() {
  let pedido =
    `Olá gostaria fazer um pedido:\n-prato:${prato}\n-bebida:${bebida}\n-sobremesa:${sobremesa}\n-total: R$ 27.70`

  let message = encodeURIComponent(pedido)

  window.open(`https://api.whatsapp.com/send?phone=5599984592679&text=${message}`)

}







