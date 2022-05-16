let cantidadDados: number = Number(prompt("Ingrese cantidad de dados a tirar");
let probabilidadSeis: number = 1/6;
let probabilidadFinal: number = 1;

for (let contador: number = 1; contador <= cantidadDados; contador++) {
  probabilidadFinal = probabilidadFinal * probabilidadSeis;
}

console.log("La probabilidad es: " + probabilidadFinal);
