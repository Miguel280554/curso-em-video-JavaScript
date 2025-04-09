function verificar(){
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var anoNascimento = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var img = window.document.getElementById('img')
    

    if(anoNascimento.value.length == 0 || anoNascimento.value > anoAtual){
        window.alert('[ERRO] Confira os dados e tente novamente!!')
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoNascimento.value)
        var genero = ''
    
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <= 1){
                img.src = './img/bebe.jpg'
            } else if(idade <= 12) {
                img.src = './img/crianca.jpg'
            } else if(idade <= 18 ){
                img.src = './img/adolescente.jpg'
            } else if (idade <= 55){
                img.src = './img/adulto.jpg'
            } else{
                img.src = './img/idoso.jpg'
            }
        } else if (fsex[1].checked){
            genero = 'mulher'

            if(idade >= 0 && idade <= 1){
                img.src = './img/bebeF.jpg'
            } else if(idade <= 12) {
                img.src = './img/criancaF.jpg'
            } else if(idade <= 18 ){
                img.src = './img/adolescenteF'
            } else if (idade <= 55){
                img.src = './img/adulta.jpg'
            } else{
                img.src = './img/idosa.jpg'
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}