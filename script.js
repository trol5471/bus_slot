const symbols = ["🍒", "🍋", "🍊", "🍇", "🔔", "⭐"];
const button = document.getElementById('bus-button');
const result = document.getElementById('result');
const audio = new Audio('misae.mp3');

button.addEventListener('click', () => {
    const slots = [0 , 0, 0].map(() => symbols[Math.floor(Math.random() * symbols.length)]);
    document.getElementById('slot1').textContent = slots[0];
    document.getElementById('slot2').textContent = slots[1];
    document.getElementById('slot3').textContent = slots[2];

    if (slots[0] === slots[1] && slots[1] === slots[2]) {
        new Audio('https://chakushinon123.com/wp-content/uploads/2022/04/%E5%8A%B9%E6%9E%9C%E9%9F%B3%E3%82%B8%E3%83%A3%E3%82%B0%E3%83%A9%E3%83%BC-%E3%83%9A%E3%82%AB%E3%83%AA.mp3').play();
        result.textContent = 'Jackpot! You win!';
        result.style.color = 'yellow';
    }
    else {
        result.textContent = 'Try again!';
        result.style.color = 'red';
    }

    audio.pause();
    audio.currentTime = 0;
    audio.play();

});