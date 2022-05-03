let numero1: number = Number(prompt("Ingrese un número"));
let numero2: number = Number(prompt("ingrese otro número"));

let suma: number = 0;
let inicio: number = numero1;

if (numero1 <= numero2) {
  while (inicio <= numero2) {
    suma = suma + inicio;
    inicio++;
  }
  console.log("el resultado es ", suma);
} else {
  while (inicio >= numero2) {
    suma = suma + inicio;
    inicio--;
  }
  console.log("el resultado es ", suma);
}
