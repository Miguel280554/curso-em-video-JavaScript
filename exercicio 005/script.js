function funcao(){

    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0){

        window.alert('[ERRO] Por favor digite os valores solicitados!')
    } else{
        var z = Number(inicio.value)
        var y = Number(fim.value)
        console.log()
        var x = Number(passo.value === "" ? '1' : passo.value)

        res.innerHTML = `${z}👉`

        while( z < y ){
            res.innerHTML += `${z + x}👉`
            z += x;
        }

        res.innerHTML += '🏁'

    }
}