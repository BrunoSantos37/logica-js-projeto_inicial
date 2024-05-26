let name = prompt("Bem vindo jogador! Qual seu nome?") || "player ";
let randomNumber = Math.random() * (10 - 2) + 2;

let roundNumber = Math.round(randomNumber);

console.log(roundNumber);

let response = prompt(
     `Olá ${name}! Dúvido acertar o número que eu estou pensando de 1 a 10! Tente!`
);

let tentativas = 0;

//If the response is wrong, it start in the loop
for (let i = 1; response != roundNumber; i++) {
     tentativas = i;
     console.log(`${i}° tentativa`);
     if (response > roundNumber) {
          alert("O número é MENOR");
          response = prompt("Tente Novamente!");
     } else {
          alert("O número é MAIOR");
          response = prompt("Tente Novamente!");
     }
}

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

h1.style.display = "block";
h2.style.display = "block";

h2.innerText += ` O número era ${roundNumber} e você acertou em ${
     tentativas + 1
} tentativas!`;
