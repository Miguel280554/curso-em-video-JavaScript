var ida = window.document.getElementById('ida')
var img = window.document.getElementById('imagem')
var agora = new Date();
var diaAtual = agora.getDay();
var mesAtual = agora.getMonth();
var anoAtual = agora.getFullYear();

var mesNascimento = mesAtual + 1

function masc(){

    var txt1 = window.document.getElementById('txt1')
    var txt2 = window.document.getElementById('txt2')
    var txt3 = window.document.getElementById('txt3')
    var res = window.document.getElementById('ida')
    var anoNascimento = Number(txt1.value)
    var mesNascimento = Number(txt2.value)
    var diaNascimento = Number(txt3.value)
    var idade = anoAtual - anoNascimento 
    var idade1 = Boolean(diaNascimento >= diaAtual && mesNascimento >= mesAtual);
    idade = idade1 == true ? idade - 1 : idade + 0 ;

    if(idade < 2){

        img.src = './img/bebe.jpg'
        res.innerHTML = ` Você é um bebê de ${idade} anos!`

    } else if(idade < 12){

        img.src = './img/crianca.jpg'
        res.innerHTML = ` Você é uma criança de ${idade} anos!`

    } else if(idade < 18 ){

        img.src = './img/adoslecente.jpg'
        res.innerHTML = ` Você é um adoslecente de ${idade} anos!`

    } else if(idade < 50 ){

        img.src = './img/adulto.jpg'
        res.innerHTML = ` Você é um adulto de ${idade} anos!`

    } else if(idade < 112){
    
        img.src = './img/idoso.jpg'
        res.innerHTML = ` Você é um idoso de ${idade} anos!`
    
    } else{
        img.src = './img/vivo.jpeg'
        res.innerHTML = `Como você está vivo?<br/>Você tem ${idade} anos!`
    }

}

    function femi(){

        var txt1 = window.document.getElementById('txt1')
        var txt2 = window.document.getElementById('txt2')
        var txt3 = window.document.getElementById('txt3')
        var res = window.document.getElementById('ida')
        var anoNascimento = Number(txt1.value)
        var mesNascimento = Number(txt2.value)
        var diaNascimento = Number(txt3.value)
        var idade = anoAtual - anoNascimento 
        var idade1 = Boolean(diaNascimento >= diaAtual && mesNascimento >= mesAtual);
        idade = idade1 == true ? idade - 1 : idade + 0 ;
    
        if(idade < 2){
    
            img.src = './img/bebeF.jpg'
            res.innerHTML = ` Você é uma bebê de ${idade} anos!`
    
        } else if(idade < 12){
    
            img.src = './img/criancaF.jpg'
            res.innerHTML = ` Você é uma criança de ${idade} anos!`
    
        } else if(idade < 18 ){
    
            img.src = './img/adolescenteF.jpg'
            res.innerHTML = ` Você é uma adoslecente de ${idade} anos!`
    
        } else if(idade < 50 ){
    
            img.src = './img/adulta.jpg'
            res.innerHTML = ` Você é uma adulta de ${idade} anos!`
    
        } else if(idade < 112){
        
            img.src = './img/idosa.jpg'
            res.innerHTML = ` Você é uma idosa de ${idade} anos!`

        } else{

            img.src = './img/vivo.jpeg'
            res.innerHTML = `Como você está vivo?<br/>Você tem ${idade} anos!`

        }
        
    
    }