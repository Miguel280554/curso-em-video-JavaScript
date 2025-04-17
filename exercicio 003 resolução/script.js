function verificar(){
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var anoNascimento = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    


    if(anoNascimento.value.length == 0 || anoNascimento.value > anoAtual){
        window.alert('[ERRO] Confira os dados e tente novamente!!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoNascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
    
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <= 1){
                img.setAttribute('src', 'bebe.jpg')
            } else if(idade <= 12) {
                img.setAttribute('src', 'crianca.jpg')
            } else if(idade <= 18 ){
                img.setAttribute('src', 'adolescente.jpg')
            } else if (idade <= 55){
                img.setAttribute('src', 'adulto.jpg')
            } else{
                img.setAttribute('src', 'idoso.jpg')
            }
        } else{
            genero = 'mulher'

            if(idade >= 0 && idade <= 1){
                img.setAttribute('src', 'bebeF.jpg')
            } else if(idade <= 12) {                
                img.setAttribute('src', 'criancaF.jpg')
            } else if(idade <= 18 ){
                img.setAttribute('src', 'adolescenteF.jpg')
            } else if (idade <= 55){
                img.setAttribute('src', 'adulta.jpg')
            } else{
                img.setAttribute('src', 'idosa.jpg')
            }
        }
    
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img);
    }
}