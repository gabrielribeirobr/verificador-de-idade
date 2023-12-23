function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var texto = window.document.getElementById('texto');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png';
        texto.innerHTML = `Bom dia!`;
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.png';
        texto.innerHTML = `Boa Tarde!`;
    } else {
        img.src = 'img/noite.png';
        texto.innerHTML = `Boa Noite!`;
    }
}
