const grilla = document.querySelector(".contenedor-grilla")
const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊'];
let matriz = [];

const obtenerNumeroAlAzar = (array) => {
    let numero = Math.floor((Math.random() * array.length));
    console.log(numero)
    return numero;
};


const obtenerFrutaAlAzar = (array) => {
    let fruta = array[obtenerNumeroAlAzar(array)]
    return fruta;
};


const crearGrilla = (filas, columnas, array) => {
    const anchoDeGrilla = 50 * columnas
    grilla.style.width = `${anchoDeGrilla}px`

    matriz = [];

    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = obtenerFrutaAlAzar(array);

            grilla.innerHTML += `<div class="grilla" data-fila=${i} data-columna=${j}>
                              ${[obtenerFrutaAlAzar(array)]}
                              </div>`;
        }
    }
    return grilla;
};



crearGrilla(9, 9, items)
// switch (dificultad.toLowerCase()) {
//     case "facil":
//         crearGrilla(9, 9, items)
//         break;

//     case "media":
//         crearGrilla(6, 6)
//         break;
//     case "dificil":
//         crearGrilla(4, 4)
//         break;

//     default:
//         break;
// }



