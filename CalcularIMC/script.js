function CalcularIMC(){
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    var imc = peso / (altura**2)

    alert(`Seu IMC é ${imc.toFixed(2)}`)
};