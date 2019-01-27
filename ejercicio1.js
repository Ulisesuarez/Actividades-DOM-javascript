/**
 * A partir de la pàgina web proporcionada(projecte mundo perdido, disponible al nostre Drive, a la Unitat 15, alerta que és una nova versió distinta a la que varem fer servir l 'altre
     dia) i utilitzant les funcions DOM, mostrar al principi de la mateixa pàgina les següent
 informacions: 
 Nombre d 'enllaços de la pàgina•
 Nombre de paràgrafs de la pàgina• 
 Adreça a la qual enllaça el penúltim enllaç• 
 Adreça a la qual enllaça el darrer enllaç• 
 Número d 'enllaços que enllacen a http://www.jurassicpark.com•
 Nombre d 'enllaços de tots els paràgrafs
 Explica les funcions amb les que manipules el DOM en aquest exercici.
 */

window.onload = function () {
    let info=[];
    info.push(contarElementos('enllaços','a'));
    info.push(contarElementos('paràgrafs','p'));
    info.push(obtenerElementoPorPosicion('a',-2,'Adreça a la qual enllaça el penúltim enllaç: '));
    info.push(obtenerElementoPorPosicion('a', -1, 'Adreça a la qual enllaça el darrer enllaç: '));
    info.push(contarElementosConCondicion('enllaços',
        'a', 'href', 'http://www.jurassicpark.com/','que enllacen a http://www.jurassicpark.com'));
    info.push(contarElementosAnidados('paràgrafs','p','enllaços','a'));
    dibujarInfo(info);

};


function contarElementos(nombre, tag) {
    return 'Nombre de '+ nombre +' de la pàgina: ' + document.getElementsByTagName(tag).length;
}

function contarElementosAnidados(nombrePadre, tagPadre,nombreHijo, tagHijo) {
    let elementosPadre = document.getElementsByTagName(tagPadre);
    let elementosHijo = [];
    let numero = 0;
    for (let elemento in elementosPadre){
        if (elementosPadre[elemento].nodeName &&
            elementosPadre[elemento].nodeName.toUpperCase() === tagPadre.toUpperCase()) {

          elementosHijo.push(...elementosPadre[elemento].getElementsByTagName('*'));
        }
    }
    console.log(elementosHijo);
    for (let elemento in elementosHijo) {
        if (elementosHijo[elemento].nodeName &&
            elementosHijo[elemento].nodeName.toUpperCase() === tagHijo.toUpperCase()) {
                numero++;
        }
    }
    return 'Nombre de ' + nombreHijo + ' dins ' + nombrePadre + ': ' + numero;
}

function contarElementosConCondicion(nombre, tag,propiedad, condicion, salidaCondicion) {
    let elementos = document.getElementsByTagName(tag);
    let numero = 0;
    Array.from(elementos).forEach(elemento => {
        if(elemento[propiedad] === condicion) {
            numero++;
        }
    });
    return 'Nombre de ' + nombre + ' de la pàgina' + salidaCondicion + ': ' + numero;
}

function obtenerElementoPorPosicion(elemento,posicion, salida){
    let elementos = document.getElementsByTagName(elemento);
    if (posicion < 0){
        posicion = elementos.length + posicion;
    }
return salida + elementos[posicion].href;
}


function dibujarInfo(info){
    let parentDiv = document.createElement('div');
    for (let dato in info){
        let div = document.createElement('div');
        div.innerText = info[dato];
        parentDiv.appendChild(div);
    }
    document.body.insertBefore(parentDiv, document.body.firstChild);
}