// funciones mejor con flecha ya que no se puede modificar la constante

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo }`;

console.log(saludar3("Vegeta"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "EL_Papi1502",
});

console.log(getUser());

const getusuarioActivo = (nombre) => ({
  uid: "ABC123",
  username: nombre,
});

const usuarioActivo = getusuarioActivo('Fernando');
console.log(usuarioActivo)
