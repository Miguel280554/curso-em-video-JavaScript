var agora = new Date();
var diaSem = agora.getDay();
var mes = Number(agora.getMonth())
var ano = agora.getFullYear();

switch(diaSem){
    case 0:
    console.log('domingo')
    break

    case 1:
    console.log('segunda')
    break

    case 2:
    console.log('terça')
    break

    case 3:
    console.log('quarta')
    break

    case 4:
    console.log('quinta')
    break

    case 5:
    console.log('sexta')
    break

    case 6:
    console.log('sabado')
    break

    default:
    console.log('[ERRO] dia invalido')
    break

}

switch (mes) {
    case 0:
        console.log('janeiro')
        break;

    case 1:
        console.log('fevereiro')
        break;
        
    case 2:
        console.log('março')
        break;

    case 3:
        console.log('abril')
        break;

    case 4:
        console.log('maio')
        break;

    case 5:
        console.log('junho')
        break;

    case 6:
        console.log('julho')
        break;
    
    case 7:
        console.log('agosto')
        break;

    case 8:
        console.log('setembro')
        break;

    case 9:
        console.log('outubro')
        break;

    case 10:
        console.log('novembro')
        break;

    case 11:
        console.log('dezembro')
        break;

    default:
        console.log('[ERRO] mês invalido')
        break;
}

console.log(`${ano}`)