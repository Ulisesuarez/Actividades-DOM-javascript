/**6.4. Dissenyar un formulari que compti amb els següents camps relatius a un usuari:
● El nom (no pot estar buit).
● L'adreça de correu (ha de ser vàlida).
● Una contrasenya (d'almenys 8 caràcters i que compti almenys amb un dígit i un dels
caràcters en majúscula).
● Repetició de la contrasenya (ha de coincidir amb l'anterior, òbviament).
● Una operació matemàtica de suma entre dos nombres enters d'un dígit determinats
a l'atzar (p. e. 5 + 3 = ?) amb la finalitat de sol·licitar el seu resultat per evitar robots
que omplin formularis.
● Una casella de verificació de “Acepto les condicions” inicialment desactivada. Fins
que aquesta opció no es verifiqui no s'habilitarà el botó d'enviament.
● Un botó d'enviament amb el text “Crear compte”.
Els elements aniran validant-se de forma individual, de manera que si no és correcte
apareixerà un text en vermell damunt de l'element indicant l'error i aquest prendrà el focus.
S’ha de fer tot en JS evitant fer servir les característiques de validació de formularis
d’HTML5. */

window.onload = function () {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    num1.innerText = Math.floor(Math.random() * 40);
    console.log(num1);
    num2.innerText = Math.floor(Math.random() * 40);
    let submit = document.getElementById('submit');
    submit.addEventListener('click', comprobarForm);
    let validaciones = {
        nombre: {
            validador: validarNombre,
            error: "nombre requerido"
        },
        correo: {
            validador: validarCorreo,
            error: "correo inválido"
        },
        pass1: {
            validador: validarPass1,
            error: "debe ser de mínimo 8 caracteres con una mayúscula y un número"
        },
        pass2: {
            validador: validarPass2,
            error: "No coincide"
        },
        resultado: {
            validador: validarResultado,
            error: "No es correcto"
        },
        check: {
            validador: validarPolitica,
            error: null
        }

    };
    submit.disabled = comprobarForm();
    setInterval(function(){
        comprobarForm();
    },500);
    for (let element of document.forms[0]) {
        console.log(element);
        element.addEventListener('focus', function () {
            element.hasFocus = true;
            comprobarForm();
        });
        element.addEventListener('blur', function () {
            element.hasFocus = false;
            comprobarForm();
            if (!validaciones.hasOwnProperty(element.id)) {
                return;
            } else if (validaciones[element.id].error) {
                if (!validaciones[element.id].validador()) {
                    document.getElementById(element.id + 'Error').innerText =
                        validaciones[element.id].error;
                    setTimeout(function () {
                        for (let el of document.forms[0]) {
                            if (el.hasFocus) {
                                return;
                            }
                        }
                        element.focus();
                    }, 100);
                } else {
                    document.getElementById(element.id + 'Error').innerText = '';
                }
            }
        });

    }

    function validarNombre() {
        return document.getElementById('nombre').value;
    }

    function validarCorreo() {
        const mail = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
        return mail.test(document.getElementById('correo').value);
    }

    function validarPass1() {
        let pass = document.getElementById('pass1').value;
        let conNumero = false;
        let conMayuscula = false;
        if (pass.lenght < 8) {
            return false;
        }
        for (let char in pass) {
            if (!isNaN(pass[char])) {
                conNumero = true;
            } else if (pass[char] === pass[char].toUpperCase()) {
                conMayuscula = true;
            }
        }
        return conNumero && conMayuscula;
    }

    function validarPass2() {
        let pass = document.getElementById('pass1').value;
        let pass2 = document.getElementById('pass2').value;

        return pass === pass2;
    }

    function validarResultado() {
        let resultado = document.getElementById('resultado');
        return parseInt(num1.innerText) + parseInt(num2.innerText) === parseInt(resultado.value);
    }

    function validarPolitica() {
        let check = document.getElementById('check');
        return check.checked;
    }

    function comprobarForm() {
        for (let element of document.forms[0]) {
            if (!validaciones.hasOwnProperty(element.id)) {
                continue;
            } else {
                if (!validaciones[element.id].validador()) {
                    console.log('hay errores');
                    submit.disabled = true;
                    console.log(submit);
                    return true;
                }
            }

        }
        console.log(submit);
        submit.disabled = false;
        return false;
    }

};