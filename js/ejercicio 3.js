/**
 * Given a data set of mountains, an array of objects with name, height, and place
 properties, generate the DOM structure
 for a table that enumerates the objects.It shouldhave one column per key and one row per object, plus a header row with < th > elements
 at the top, listing the column names.
 Write this so that the columns are automatically derived from the objects, by taking the
 property names of the first object in the data.
 Add the resulting table to the element with an id attribute of "mountains"
 so that it
 becomes visible in the document.
 Once you have this working, right - align cells that contain number values by setting their
 style.textAlign property to "right".
 */
window.onload = function () {
const MOUNTAINS = [{
        name: "Kilimanjaro",
        height: 5895,
        place: "Tanzania"
    },
    {
        name: "Everest",
        height: 8848,
        place: "Nepal"
    },
    {
        name: "Mount Fuji",
        height: 3776,
        place: "Japan"
    },
    {
        name: "Vaalserberg",
        height: 323,
        place: "Netherlands"
    },
    {
        name: "Denali",
        height: 6168,
        place: "United States"
    },
    {
        name: "Popocatepetl",
        height: 5465,
        place: "Mexico"
    },
    {
        name: "Mont Blanc",
        height: 4808,
        place: "Italy/France"
    }
];

document.getElementById('mountains').appendChild(createTable(MOUNTAINS));

let cells = document.getElementsByTagName('td');
for (let cell in cells){
    if(!isNaN(parseInt(cells[cell].innerText))){
        cells[cell].style.textAlign = 'right';
    }
}

};

function createTable(data) {
    let table = document.createElement('table');
    let thRow = document.createElement('tr');
    let headers = {};
    let elements = [];
    for (let element in data){
        switch (typeof data[element]) {

            case 'object': {
                elements[element] = [];
                let keys = Object.keys(data[element]);
                for ( let key in keys) {
                    headers[keys[key]] = keys[key];
                    let td = document.createElement('td');
                    td.innerText = data[element][keys[key]];
                    elements[element].push(td);
                }
                break;
            }
        }
        console.log(headers);
    }
    for (let header in headers) {
        if (headers.hasOwnProperty(headers[header])) {
            let th = document.createElement('th');
            th.innerText = headers[header];
            thRow.appendChild(th);
        }
    }
    table.appendChild(thRow);
    for (let element in elements) {
        let tr = document.createElement('tr');
        for (let td in elements[element]){
            tr.appendChild(elements[element][td]);
        }
        table.appendChild(tr);
    }
    return table;
}