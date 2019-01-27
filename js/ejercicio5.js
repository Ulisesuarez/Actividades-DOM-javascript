/**
 * Crea una pàgina on apareguin 10 imatges(poden ser la mateixa i les pots agafar del teu ordinador).
 * Amb Javascript, recorre tot el DOM de la pàgina(és obligatori recórrer el DOM i 
 * no fer servir mètodes de l’ estil document.getElementByTagName) i crear una llista no
 ordenada < ul > amb l’ atribut alt de les imatges que hi ha a la pàgina.
 */
window.onload = function () {
    let body = document.body;
    let nodes = walkDOMGetNodes(body,[]);
    let ul = document.createElement('ul');
    for (let node in nodes) {
        if (nodes[node].nodeName === 'IMG') {
            nodes[node].id = 'IMG' + node;
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = '#' +nodes[node].id;
            a.innerText = nodes[node].alt;
            li.appendChild(a);
            ul.appendChild(li);
        }
    }
    body.insertBefore(ul, body.firstChild);
};

function walkDOMGetNodes (element, elements) {

    if (element.nodeType === 1){
        elements.push(element);
    }
    if(!element.childNodes){
        return;
    }
    for (let child in element.childNodes){
        walkDOMGetNodes(element.childNodes[child], elements);
    }

return elements;}