
let listaInscritos = [];  


listaInscritos.push("João Silva", "Maria Santos", "Ana Pereira");



console.log("Lista inicial de inscritos:", listaInscritos);
console.log("Quantidade de inscritos:", listaInscritos.length);

console.log("\nAntes de adicionar Ana Pereira:", listaInscritos);
listaInscritos.push("Ana Pereira");
console.log("Depois de adicionar Ana Pereira:", listaInscritos);


console.log("\nAntes de adicionar Carlos Mendes:", listaInscritos);
listaInscritos.unshift("Carlos Mendes");
console.log("Depois de adicionar Carlos Mendes:", listaInscritos);


let removidoUltimo = listaInscritos.pop();
console.log("\nParticipante removido (último):", removidoUltimo);
console.log("Lista atualizada após remoção do último:", listaInscritos);


let removidoPrimeiro = listaInscritos.shift();
console.log("\nParticipante removido (primeiro):", removidoPrimeiro);
console.log("Lista atualizada após remoção do primeiro:", listaInscritos);


console.log("\nAntes da ordenação alfabética:", listaInscritos);
listaInscritos.sort();
console.log("Depois da ordenação alfabética:", listaInscritos);
