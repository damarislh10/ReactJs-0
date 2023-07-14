// retorna un arreglo
const useeState = (valor) => {
    return [ valor, ()=>{ console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useeState('Goku');

console.log(nombre)
setNombre()


const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, ,p2] = personajes;
// console.log(p2);

const retornaArreglo = () => {
    return ['ABC', 124];
}

const [letras, numeros] = retornaArreglo();

// console.log(letras, numeros)

