/*let data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();
let saudacao;
        
if (hora >= 18) {
    saudacao = "Boa noite";
} else if (hora >= 12) {
    saudacao = "Boa tarde";
} else {
    saudacao = "Bom dia";
}

hora = hora < 10 ? "0" + hora : hora;
minutos = minutos < 10 ? "0" + minutos : minutos;
segundos = segundos < 10 ? "0" + segundos : segundos;
window.alert(saudacao + '!' + ' São exatamente: ' + hora + ":" + minutos + ":" + segundos);*/

function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes();
    let sec = data.getSeconds();
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são exatamente ${hora}:${min}:${sec}! Bom dia!`
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são exatamente ${hora}:${min}:${sec}! Boa tarde!`
    } else {
        msg.innerHTML = `Agora são exatamente ${hora}:${min}:${sec}! Boa noite!`
    }

    if (hora >= 0 && hora < 12) {
        img.src = 'image/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'image/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'image/noite.png'
        document.body.style.background = '#515154'
    }
}

