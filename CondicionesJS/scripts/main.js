'use strict';
const btnColor = document.getElementById('amon');

btnColor.onclick = function (){
    document.getElementById('amon').classList.toggle('siBorde');
}

/*                  Parte 2                     */
const btnVerificar = document.getElementById('veri');

btnVerificar.onclick = function (){
    let num1 = document.getElementById('sticker1').value;
    let num2 = document.getElementById('sticker2').value;
    let num3 = document.getElementById('sticker3').value;

    let total = (Number(num1)+Number(num2)+Number(num3))
    console.log(total);

    if (total > 10){
        document.getElementById('text1').innerText="Llevas demasiados stickers"
    } else {
        document.getElementById('text1').innerText=`Llevas ${total} stickers seleccionados`;
    }
}

/*                  Parte 3                     */
const btnIngresar = document.getElementById('pass');

btnIngresar.onclick = function (){
    const num1 = document.getElementById('passOne').value;
    const num2 = document.getElementById('passTwo').value;
    const num3 = document.getElementById('passThr').value;
    console.log(num1, num2, num3);

    if (num1 === '9' && num2 === '1' && num3 === '1'){
        document.getElementById('text2').innerText="Password 1 Correcto";
    } else if (num1 === '7' && num2 === '1' && num3 === '4'){
        document.getElementById('text2').innerText="Password 2 Correcto";
    } else {
        document.getElementById('text2').innerText="Password Incorrecto";
    }
}