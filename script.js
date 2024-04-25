let jogo= document.getElementById('divJogo')
let quadro= document.getElementById('quadro')
let palpiteNum = document.getElementById('palpiteNum')
let jogoEncerrado = false

//GPT
let botaoEnviar = document.getElementById('btnPrincipal')
palpiteNum.addEventListener('keyup', function(event){
    if (event.keyCode === 13){
        botaoEnviar.click()
    }
})  

let palpitesArr = []
let tituloAdicionado = false

//GPT
function sortearNumero() {
    return Math.floor(Math.random() * 101);
}
let numeroSorteado = sortearNumero()

function valiNumero(n){
    if (Number(n) >=0 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function valiLista(n, l){
    if(l.indexOf(Number(n)) !=-1){
        return true
    } else {
        return false
    }
}

function isVazio(){
    if (palpiteNum.value == ""){
        return true
    } else{
        return false
    }
}

function novoPalpite(){
    if (jogoEncerrado) return

    if(valiNumero(palpiteNum.value) && !valiLista(palpiteNum.value, palpitesArr)){
        if(palpiteNum.value == numeroSorteado){
            quadro.innerHTML += `<p><strong>VOCÊ GANHOU! O número correto é ${numeroSorteado}!</strong></p>`
            jogoEncerrado = true
            palpiteNum.disabled = true
        } 
         
        if(palpiteNum.value != numeroSorteado){
            if (isVazio()){
                alert('Insira um número antes de enviar o palpite!')
            } else{
                if(!tituloAdicionado){
                    let titulo = document.createElement('h4')
                    titulo.innerHTML = "Tentativas anteriores"
                    quadro.appendChild(titulo)
                    tituloAdicionado = true  
                }
                palpitesArr.push(Number(palpiteNum.value))
                quadro.innerHTML += ` ${palpiteNum.value} -`
            }

        }

    }
    else{
        alert('Número inválido ou já adicionado!')
    }
    palpiteNum.value= ''
    palpiteNum.focus()
}