/**
 * 6.3.Fes un quadre de text en el que es permeti entrar binari, octal, decimal o hexadecimal.
 Només ha de permetre entrar els símbols del sistema de numeració que estigui seleccionat
 en aquell moment.Quan es canviï de sistema de numeració s’ ha d’ esborrar el quadre de
 text.
 */

window.onload = function () {
    const filtros = {
        binari: '01',
        octal: '01234567',
        decimal: '0123456789',
        hexadecimal: '0123456789ABCDEFabcdef'
    };
    let select = document.getElementById('selectBase');
    let filtro = filtros[select.value];
    let text = document.getElementById('text');
    select.addEventListener('change', function () {
        filtro = filtros[select.value];
        text.value = '';

    });

    function filtrarCampo(key) {
        let salida = '';
        let valor = text.value + key;
        for (var i = 0; i < valor.length; i++) {
            if (filtro.indexOf(valor.charAt(i)) != -1) {
                salida += valor.charAt(i);
            }
        }
        text.value = salida;
    }
    text.addEventListener('keydown', function (event) {
        let key = event.key;
        if (key === 'Backspace' ||
            key === 'Delete' ||
            key === 'ArrowLeft' ||
            key === 'ArrowRight') {
            return;
        }
       /* if (key === 'Dead' || key === 'Process') {
            console.log('estoy muertooo');
            event.preventDefault();
            event.stopImmediatePropagation();
            event.stopPropagation();
            return;
        }*/
        event.preventDefault();
        filtrarCampo(key);
    });
    text.addEventListener('keyup', function (event) {
        let key = event.key;
        if (key === 'Dead') {
            console.log('estoy muertooo');
            event.preventDefault();
            event.stopImmediatePropagation();
            event.stopPropagation();
            filtrarCampo(key);
            return;
        }
    });
};