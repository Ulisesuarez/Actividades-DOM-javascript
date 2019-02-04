/**
 * 6.2.Programar en JavaScript codi per a què només es pugui escriure un límit de caràcters
 en un textarea(sense fer servir la propietat maxlength de HTML5, ho feim per practicar).
 S’ ha d’ indicar en tot moment a l 'usuari el nombre de caràcters que encara pot escriure. A
 més, s 'ha de permetre espitjar les tecles Backspace, Supr. i les fletxes del cursor. (Per
 exemple fes que el nombre màxim de caràcters sigui 150).
 */

window.onload = function () {
    function contarCaracteres() {
        let texto = document.getElementById('textarea');
        let salida = document.getElementById('paragraf');
        let numeroCaracteres = texto.value.length;
        const maximo = 150;
        if (numeroCaracteres >= maximo) {
            salida.innerHTML = "Ha llegado al máximo de " + maximo.toString() + " caracteres";
            texto.value = texto.value.substring(0, 150);
        } else {
            let diferencia = maximo - numeroCaracteres;
            salida.innerHTML = diferencia.toString() + " caracteres restantes";
        }
    }
    document.getElementById('textarea').addEventListener('keyup', function (event) {
        contarCaracteres(event);
    });
    contarCaracteres();
};