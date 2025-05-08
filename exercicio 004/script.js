function funcao(){
    var res = window.document.getElementById('res')
    var numero = window.document.getElementById('number')
    var contagem = 1

    if(numero.value.length == 0){
        
        window.alert('[ERRO] Por favor digite um número!')

    } else{

        var x = Number(numero.value)
        res.innerHTML = ''

        while( contagem <= 10){

            var item = document.createElement('option')
            var n = x * contagem
            item.text = `${x} X ${contagem} = ${n}`
            res.appendChild(item)

            contagem ++
            
            

        }

    }


}