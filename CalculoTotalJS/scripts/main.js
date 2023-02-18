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
                document.getElementById('divColor').style.backgroundColor='salmon';
            break;
            case "verde":
                document.getElementById('divColor').style.backgroundColor='olive';
            break;
            case "azul":
                document.getElementById('divColor').style.backgroundColor='darkblue';
            break;
            case "negro":
                document.getElementById('divColor').style.backgroundColor='black';
            break;
            case "blanco":
                document.getElementById('divColor').style.backgroundColor='white';
            break;
        }
    } else {
        alert("Datos incorrectos, Revisar campos");
    }
}

