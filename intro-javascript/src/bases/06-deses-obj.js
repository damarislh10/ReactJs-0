// Desestructuracion de objetos


const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    clave: "48666",
}

const {nombre, apellido, edad,} = persona


const nada= ({clave, nombre, edad, rango = "capital"}) => {

    return {
        nombreClave: clave,
        anios: edad,
        lating : {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, lating: { lat, lng}} = nada( persona );
console.log(nombreClave, anios, lat,lng)
