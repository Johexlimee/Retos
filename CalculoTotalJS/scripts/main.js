'use strict';
const btnCalcular = document.getElementById('calcular');

btnCalcular.onclick = function (){
    const cantidad = document.getElementById('cantidad').value;
    const color = document.getElementById('optColor').value;

    if (cantidad >= 1 && color !=0){
        document.getElementById('total').innerText=`Total: $${cantidad*400000}`;
        document.getElementById('cant').innerText=`Cantidad: ${cantidad}`;
        //document.getElementById('color').value="";
    } else {
        alert("Datos incorrectos, Revisar campos");
    }
}

