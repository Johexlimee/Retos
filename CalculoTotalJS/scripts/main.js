'use strict';
const btnCalcular = document.getElementById('calcular');

btnCalcular.onclick = function (){
    const cantidad = document.getElementById('cantidad').value;
    const color = document.getElementById('optColor').value;

    if (cantidad >= 1 && color !=0){
        document.getElementById('total').innerText=`Total: $${cantidad*400000}`;
        document.getElementById('cant').innerText=`Cantidad: ${cantidad}`;
        
        switch (color){
            case "rojo":
                document.getElementById('seeColor').innerText="Rojo claro";
                document.getElementById('divColor').style.backgroundColor='lightcoral';
            break;
            case "verde":
                document.getElementById('seeColor').innerText="Verde Mate";
            break;
            case "azul":
                document.getElementById('seeColor').innerText="Azul Oscuro";
            break;
            case "negro":
                document.getElementById('seeColor').innerText="Negro";
            break;
            case "blanco":
                document.getElementById('seeColor').innerText="Blanco";
            break;
        }
    } else {
        alert("Datos incorrectos, Revisar campos");
    }
}

