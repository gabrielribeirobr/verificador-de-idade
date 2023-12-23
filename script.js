function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var result = window.document.getElementById('result');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');

    } else {
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = window.document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            var genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'img/foto-bebe-m.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/foto-jovem-m.png');
            } else if (idade > 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/foto-adulto-m.png');
            } else {
                // idoso
                img.setAttribute('src', 'img/foto-idoso-m.png');
            }
        } else if (fsex[1].checked) {
            var genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'img/foto-bebe-f.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/foto-jovem-f.png');
            } else if (idade > 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/foto-adulto-f.png');
            } else {
                // idoso
                img.setAttribute('src', 'img/foto-idoso-f.png');
            }
        }
        result.style.textAlign = 'center';
        result.innerHTML = `Detectamos ${genero} com ${idade}`;
        result.appendChild(img);
    }
}