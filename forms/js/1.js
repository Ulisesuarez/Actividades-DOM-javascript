/**
 * Crea una funció anomenada“ retornaValor” a la que se li passi com a paràmetre un
 objecte d’ un formulari.La funció ha de retornar el valor de l’ element tenint en compte si és
 text, textarea, radiobutton, checkbox o select.En cas de que hi hagi múltiples valors
 retornarà un array.
 Quan es faci clic en el botó de“ Submit”, has de fer un bucle que recorri tots els elements del
 formulari i fer servir la funció descrita en el paràgraf anterior.Finalment, posa el contingut
 del formulari en una línia(com es mostra en la imatge).
 La solució d’ aquest exercici ha de funcionar independentment del formulari emprat.
 */
window.onload = function () {
    mostrarSelect(document.getElementById('carCheck'));
};

function mostrarSelect(check) {
    const select = document.getElementById('selectCar');
    if (check.checked) {
        select.value = 'volvo';
        select.style.display = 'initial';
    } else {
        select.value = null;
        select.style.display = 'none';
    }
}

function retornaValor(campo) {
    if (campo) {
        switch (campo.type) {
            case 'radio':
            case 'checkbox':
                if (campo.value && campo.checked) {
                    return campo.value;
                }
                break;
            case 'submit':
                return;
            default:
                if (campo.value) {
                    return campo.value;
                } else {
                    return;
                }
        }
    }
    return;
}

function elementosFormulario(formulario) {
    let valores = [];
    for (let elemento in formulario.elements) {
        let valor = retornaValor(formulario[elemento]);
        if (valor) {
            valores.push(valor);
        }
    }
    let salida = document.getElementById('paragraf');
    salida.innerHTML = 'Continguts dels diferents camps: ' + valores.join(', ');
    formulario.reset();
    mostrarSelect(document.getElementById('carCheck'));
    return false;
}