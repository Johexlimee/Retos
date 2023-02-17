'use strict';
const cardC = document.getElementById('caracteristicas');
const caracter = [];

const paintCard = (typ) =>{
    typ = typ.toLowerCase();
    const fragment = document.createDocumentFragment();
    const cardtemp = document.querySelector('#caracteristicas').content;

    if (typ === 'rojo') {
        for (let i of caracter){
            const cloneTemp = cardtemp.cloneNode(true);
            cloneTemp.querySelector('.total').innerHTML = "Total: ";
            cloneTemp.querySelector('.cant').innerHTML = "Cantidad: ";
            cloneTemp.querySelector('.color').innerHTML = "Color: ";
            fragment.appendChild(cloneTemp);
        }
    }
    cardC.appendChild(fragment);
};

//const addCara = (total, )