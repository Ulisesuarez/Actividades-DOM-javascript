/**
 * A partir de la pàgina web DWEC_P03_306.html(disponible al nostre Drive, a la Unitat 15) i
 utilitzant les funcions DOM, s 'ha de modificar el protocol de totes les adreces dels enllaços,
 canviant http per https.D 'aquesta forma, si un enllaç apuntava a
 http: //www.iessonferrer.net , ara ha d'apuntar a https://www.iessonferrer.net
     •Els paràgrafs de la pàgina l 'atribut de la qual class és igual a importante han de
 modificar - ho per resaltar.La resta de paràgrafs han d 'incloure un atribut class
 igual a normal• 
 Als enllaços de la pàgina l 'atribut de la qual class sigui igual a importante , se'
 ls
 afegeix un atribut name amb un valor generat automàticament i que sigui igual a
 importante + i, on i és un valor numèric el valor inicial del qual és 0 per al primer
 enllaç.
 Alerta a getAttribute i setAttribute.
 Font de l’ exercici: http: //librosweb.es/
 */

window.onload = function () {
    forceHttps();
    cambiarClaseTag('p','importante','resaltar');
    nombrarElementos('a','importante','importante');
}

function forceHttps() {
    let links = document.getElementsByTagName('a');

    for (let link in links){
        if (links[link].href && links[link].href.includes('http://')) {
            links[link].href = links[link].href.replace('http://', 'https://');
            console.log(links[link].href);
        } else{
            links[link].href = 'https://' + links[link].href;
        }
    }
}

function cambiarClaseTag(tag, claseActual, nuevaClase) {
    let elementos = document.getElementsByTagName(tag);

    for (let elemento in elementos){
        if (elementos[elemento].className === claseActual){
            elementos[elemento].className = nuevaClase;
        }
    }
}

function nombrarElementos(tag,clase, nombre) {
    let elementos = document.getElementsByTagName(tag);
    let cuenta = 0;
    for (let elemento in elementos) {
        if (elementos[elemento].className === clase) {
               elementos[elemento].name = nombre + cuenta++;
            // elementos[elemento].name = nombre + elemento;
        }
    }
}



