let name = prompt("Bem vindo jogador! Qual seu nome?") || "player ";

let response = prompt(
     `Olá ${name}! Dúvido acertar o número que eu estou pensando de 1 a 10! Tente!`
);

let randomNumber = Math.random() * (10 - 2) + 2;

let roundNumber = Math.round(randomNumber);
let tentativas;
for (let i = 1; response != roundNumber; i++) {
     if (response > roundNumber) {
          alert("O número é MENOR");
          response = prompt("Tente Novamente!");
     } else {
          alert("O número é MAIOR");
          response = prompt("Tente Novamente!");
     }
     // console.log(`${i}° tentativa`);
     tentativas = i;
}

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

h1.style.display = "block";
h2.style.display = "block";

alert(
     `Parabens! O Número era ${roundNumber} e você acertou em ${tentativas} tentativas`
);
