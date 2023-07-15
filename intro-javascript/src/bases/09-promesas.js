import { getHeroeById } from "./bases/08-imp-exp";

// promises: asyncronico

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//       const heroe = getHeroeById(2);
//       resolve(heroe)
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('Then de la promesa', heroe)
// })
// .catch( err => console.log(err))

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      heroe ? resolve(heroe) : reject("El heroe no existe")    
    }, 2000);
  });
};

getHeroeByIdAsync(5)
    .then( console.log) // si hay algo que esta definiendo la funcion
    .catch(err => console.log(err));
