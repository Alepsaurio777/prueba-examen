// Saludo personalizado usando prompt y console.log
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('¿Cuál es tu nombre? ', nombre => {
    console.log(`Hola, ${nombre}! 👋`);
    readline.close();
});
// primeras lineas de codigo 




// Generador de frases motivacionales
const frases = [
    "Sigue adelante, incluso cuando el camino se complique.",
    "Cada error es una oportunidad de aprendizaje.",
    "La constancia vence al talento cuando el talento no trabaja.",
    "Hazlo con pasión o no lo hagas.",
    "Tu esfuerzo de hoy es tu éxito de mañana."
];

function fraseAleatoria() {
    const index = Math.floor(Math.random() * frases.length);
    return frases[index];
}

console.log("💬 Frase del día:");
console.log(fraseAleatoria());