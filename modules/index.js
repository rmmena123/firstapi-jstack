// Módulos: são conjuntos de código que podem ser reutilizáveis.
// 3 tipos de módulos:
// - Todos os arquivos javascript são módulos
// - Nativos
// - npm (Node Package Manager)

const os = require('os');
const { printName, lastName } = require('./printName');

printName(`Rodrigo ${lastName}`);
console.log(os.type());