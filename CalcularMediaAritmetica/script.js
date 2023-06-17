var media = 0;

var qtdNotas = Number(prompt("Digite quantas notas você teve neste trimestre"));

for (var i = 0; i < qtdNotas; i++){
    media += parseFloat(prompt("Digite uma nota: "));
};

media = media/qtdNotas;

alert(`Sua média é ${media}`);