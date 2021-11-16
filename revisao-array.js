const pilotos = ["Senna", "Prost", "Schumacher", "Hamilton"];

// A indexação (index) começa pelo número 0
console.log(pilotos[0]); // Senna do
console.log(pilotos[3]); // Hamilton

// Acessar o tamanho do array
console.log(pilotos.length);

// Iterável
for (let piloto of pilotos) {
  console.log(piloto);
}

// Adicionar elemento
pilotos.push("Alonso");
console.log(pilotos);

// Encontrar um elemento
const senna = pilotos.find((piloto) => piloto === "Senna");
console.log(senna);

// Deletar um elemento
pilotos.splice(1, 1);
console.log(pilotos);
