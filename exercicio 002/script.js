var horario = window.document.getElementById('horario')
var ros = window.document.getElementById('ros')
var imagem = window.document.getElementById('imagem')

var agora = new Date();
var hora = agora.getHours();
var minutos = agora.getMinutes();


if(hora >= 12 && hora < 18){
  imagem.src = './img/tarde.png'
}else if(hora >= 18 && hora < 6){
  imagem.src = './img/noite.png'

} else if(hora >= 6 && hora < 12) {
  imagem.src = './img/manha.png'
}
horario.innerHTML = `${hora}:${minutos}`