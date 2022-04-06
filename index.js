const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('#player1dice').innerHTML = `<img class="diceImg" src="images/dice${randomNumber1}.png" alt="dice face of ${randomNumber1}"></div>
`;

document.querySelector('#player2dice').innerHTML = `<img class="diceImg" src="images/dice${randomNumber2}.png" alt="dice face of ${randomNumber2}"></div>
`;

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = `&#128681; Player 1 wins!`;
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = `Player 2 wins! &#128681;`;
} else {
    document.querySelector('h1').innerHTML = `Draw!`;
}