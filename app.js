// letiables
// Las letiables tienen dos forma de asignarles un valor.

// Declaración
let miletiable;

// Asignación
let miletiable2 = "Mensaje"

// Declarar y asignar valor en la misma linea
let miletiable3 = "Mensje de Bienvenida"


// ENTRADA 
/*prompt() Entrada de datos*/
// PROCESO (Uso de operadores (aritmeticos, relacionales y lógicos) y estructuras como condicionales, ciclos, funciones, etc.)
// SALIDA 
/* alert("mensaje") Mostrar en ventana del navegador la información */
/* console.log("mensaje") Mostrar en consola del navegador la información*/

// !Calculadora
// ParseInt cambia el valor de un dato a STRING
// let numeroUno = parseInt(prompt("Ingrese un número: "))
// let numeroDos = parseInt(prompt("Ingrese un segundo número: "))

// let resultadoSuma = numeroUno + numeroDos
// let resultadoResta = numeroUno - numeroDos
// let resultadoMultiplicacion = numeroUno * numeroDos
// let resultadoDivision = numeroUno / numeroDos

// alert("Suma: "+ resultadoSuma)
// alert("Resta: "+ resultadoResta)
// alert("Multiplicación: "+ resultadoMultiplicacion)
// alert("División: "+ resultadoDivision)

// !Calcular el IMC
// Obtener el peso y la altura del usuario
let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
let altura = parseFloat(prompt("Ingresa tu altura en metros:"));

// Calcular el IMC
let imc = peso / (altura * altura);

// Mostrar el IMC
alert("Tu IMC es: " + imc.toFixed(2));

// Mostrar la clasificación del IMC
if (imc < 18.5) {
    alert("Estás bajo de peso.");
} else if (imc >= 18.5 && imc < 24.9) {
    alert("Estás en un rango normal.");
} else if (imc >= 25 && imc < 29.9) {
    alert("Tienes sobrepeso.");
} else if (imc >= 30 && imc < 34.9) {
    alert("Tienes obesidad tipo I.");
} else if (imc >= 35 && imc < 39.9) {
    alert("Tienes obesidad tipo II.");
} else if (imc >= 40 && imc < 49.9) {
    alert("Tienes obesidad tipo III.");
} else {
    alert("Tienes obesidad tipo IV.");
}


// Grupos
// Solicitar al usuario que ingrese su nombre
let nombre = prompt("Ingrese su nombre:");

// Solicitar al usuario que ingrese su edad
let edad = parseInt(prompt("Ingrese su edad:"));

// Clasificar la edad del usuario
let grupoEdad;

if (edad >= 0 && edad <= 12) {
    grupoEdad = "Niño";
} else if (edad >= 13 && edad <= 17) {
    grupoEdad = "Adolescente";
} else if (edad >= 18 && edad <= 64) {
    grupoEdad = "Adulto";
} else if (edad >= 65) {
    grupoEdad = "Adulto mayor";
} else {
    grupoEdad = "Edad inválida";
}

// Mostrar el resultado
alert("Hola, " + nombre + "! Según tu edad, perteneces al grupo de edad: " + grupoEdad);
