var horario = window.document.getElementById('horario')
var ros = window.document.getElementById('ros')
var imagem = window.document.getElementById('imagem')

var agora = new Date();
var hora = agora.getHours();
var minutos = agora.getMinutes();



if(hora >= 12 && hora < 18){

  imagem.src = './img/tarde.png'
  document.body.style.background = 'rgb(62, 97, 163)'

}else if(hora >= 18 && hora < 6){

  imagem.src = './img/noite.png'
  document.body.style.background = 'rgb(0, 0, 0)'

} else if(hora >= 6 && hora < 12) {

  imagem.src = './img/manha.png'
  document.body.style.background = 'rgb(210, 221, 51)'

}
horario.innerHTML = `${hora}:${minutos}`