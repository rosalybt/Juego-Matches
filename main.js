const modalNuevoJuego = document.querySelector('.modal-nuevo-juego')
const modalReiniciarJuego = document.querySelector('.modal-reinciar-juego')
const botonFacil = document.getElementById('btn-facil')
const botonMedio = document.getElementById('btn-medio')
const botonDificil = document.getElementById('btn-dificil')
const botonReiniciar = document.getElementById('btn-reiniciar')
const botonReiniciarNuevo = document.getElementById('btn-reiniciar-juego')
const botonCancelar = document.getElementById('btn-cancelar')

const buscarMatches = document.getElementById('buscar-match')

let nivelDelJuego = ''
const overlay = document.querySelector('.overlay')




const hide = (element) => {
    return element.classList.add('hidden');
};

const show = (element) => {
    return element.classList.remove('hidden');
};

const addAClassToAnElement = (elemento, clase) => {
    return elemento.classList.add(clase);
}

const grilla = document.querySelector(".contenedor-grilla")
const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊'];
let matriz = [];

const obtenerNumeroAlAzar = (array) => {
    let numero = Math.floor((Math.random() * array.length));
    return numero;
};


const obtenerFrutaAlAzar = (array) => {
    let fruta = array[obtenerNumeroAlAzar(array)]
    return fruta;
};


const crearGrilla = (filas, columnas, array) => {
    const anchoDeGrilla = 50 * columnas
    grilla.style.width = `${anchoDeGrilla}px`
    grilla.innerHTML = ''
    matriz = [];

    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = obtenerFrutaAlAzar(array);

            grilla.innerHTML += `<div class="grilla" data-fila=${i} data-columna=${j}>
                              ${matriz[i][j]}
                              </div>`;


        }
    }
    return grilla;
};



const nuevoJuego = () => {
    show(overlay)
    show(modalNuevoJuego)

};

const reiniciarJuego = () => {
    hide(overlay)
    hide(modalReiniciarJuego)
    switch (nivelDelJuego) {
        case 'facil':
            crearGrilla(9, 9, items);
            break;

        case 'medio':
            crearGrilla(6, 6, items);
            break;

        case 'dificil':
            crearGrilla(4, 4, items);
            break;

        default:
            alert('Debe seleccionar un nivel')
            break;
    }

};

// const colorearMatches = (x, y, orientacion) => {


//     if (orientacion === 'vertical') {
//         for (let k = 0; k < 3; k++) {
//             const divVertical = document.querySelector(`div[data-fila="${x + k}"][data-columna="${y}"]`);
//             divVertical.style.backgroundColor = "green";
//         }

//     } else {
//         for (let k = 0; k < 3; k++) {
//             const divHorizontal = document.querySelector(`div[data-fila="${x}"][data-columna="${y + k}"]`);
//             divHorizontal.style.backgroundColor = "green";
//         }
//     }

// };



const matchesVerticales = () => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {

            if (
                matriz[i + 1] &&
                matriz[i + 2] &&
                matriz[i][j] === matriz[i + 1][j] &&
                matriz[i][j] === matriz[i + 2][j]
            ) {
                return true
            }
        }
    }

    return false
};

const matchesHorizontales = () => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {

            if (
                matriz[i][j] === matriz[i][j + 1] &&
                matriz[i][j] === matriz[i][j + 2]
            ) {
                return true
            }
        }
    }
    return false
};


const hayMatches = () => {
    if (matchesHorizontales() || matchesVerticales()) {
        return true
    }
    else {
        alert('no hay matches')
        return false
    }

}


do {

    crearGrilla(4, 4, items)
} while (hayMatches())


const cuadrado1 = document.querySelector(`div[data-fila='0'][data-columna='0']`)
const cuadrado2 = document.querySelector(`div[data-fila='0'][data-columna='1']`)
const cuadrado3 = document.querySelector(`div[data-fila='1'][data-columna='0']`)
const cuadrado4 = document.querySelector(`div[data-fila='1'][data-columna='1']`)
const sonAdyacentes = () => {

    // if()

}

botonCancelar.onclick = () => {
    hide(overlay)
    hide(modalReiniciarJuego)
}

botonReiniciar.onclick = () => {
    show(overlay)
    show(modalReiniciarJuego)

}

botonReiniciarNuevo.onclick = () => {
    reiniciarJuego();
}

botonFacil.onclick = () => {
    crearGrilla(9, 9, items)
    hide(modalNuevoJuego)
    hide(overlay)
    nivelDelJuego = 'facil'
}

botonMedio.onclick = () => {
    crearGrilla(6, 6, items)
    hide(modalNuevoJuego)
    hide(overlay)
    nivelDelJuego = 'medio'
}

botonDificil.onclick = () => {
    crearGrilla(4, 4, items)
    hide(modalNuevoJuego)
    hide(overlay)
    nivelDelJuego = 'dificil'
}



buscarMatches.onclick = () => {
    hayMatches()
}


