const symbols = ['🍒','🍋','🍊','⭐️','🔔'];
const button = document.getElementById('bus-button');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    const slots = [0 , 0, 0].map(() => symbols[Math.floor(Math.random() * symbols.length)]);
    document.getElementById('slot1').textContent = slots[0];
    document.getElementById('slot2').textContent = slots[1];
    document.getElementById('slot3').textContent = slots[2];

    if (slots[0] === slots[1] && slots[1] === slots[2]) {
        result.textContent = 'Jackpot! You win!';
        result.style.color = 'yellow';
    }
    else {
        result.textContent = 'Try again!';
        result.style.color = 'red';
    }

    // new Audio('https://www.soundjay.com/button/sounds/button-3.mp3').play();

});