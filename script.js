const symbols = ["🍒", "🍋", "🍊", "🍇", "🔔", "⭐"];
const button = document.getElementById('bus-button');
const result = document.getElementById('result');
const audio = new Audio('misae.mp3');
let credit = 100;


button.addEventListener('click', () => {
    const bet = parseInt(document.getElementById('bet').value);
    if (credit < bet) {
        alert("クレジットが足りません！");
        return;
      }

    credit -= bet;
    
    const slots = [0 , 0, 0].map(() => symbols[Math.floor(Math.random() * symbols.length)]);
    document.getElementById('slot1').textContent = slots[0];
    document.getElementById('slot2').textContent = slots[1];
    document.getElementById('slot3').textContent = slots[2];

    const win = Math.random() < 0.3;

  if (win) {
    new Audio('https://chakushinon123.com/wp-content/uploads/2022/04/%E5%8A%B9%E6%9E%9C%E9%9F%B3%E3%82%B8%E3%83%A3%E3%82%B0%E3%83%A9%E3%83%BC-%E3%83%9A%E3%82%AB%E3%83%AA.mp3').play();
    const winnings = bet * 2;
    credit += winnings;
    alert(`勝ちました！+${winnings}クレジット`);
  } else {
    alert(`負けました... -${bet}クレジット`);
  }
    

    audio.pause();
    audio.currentTime = 0;
    audio.play();
    document.getElementById('credit').textContent = `クレジット: ${credit}`;
});