let numeros = [1, 2, 2];
numeros.unshift(0);
console.log(numeros);

let numerais = [1,2]
numeros.unshift(0)
console.log(numerais);

let nomes = ["Carlos", "Ana ", "Bruno"];
nomes.sort();
console.log(nomes)

let notas = [85, 92, 78];
notas.sort((a, b) => a - b); // Crescente: [78, 85, 92]
notas.sort ((a, b) => b - a) // decrescente: [92, 85, 78]
console.log(notas);

let sequencia = [1, 2, 3]
sequencia.reverse(); // sequencia agora é [3, 2, 1]
console.log(sequencia);