const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
}

console.log({persona})

// copia no referencia
const persona2 = {...persona};

console.log(persona2)
