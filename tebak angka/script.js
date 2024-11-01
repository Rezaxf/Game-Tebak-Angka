let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 10;
let highScore = Infinity;
function checkGuess() {
    const guessInput = document.getElementById('guess-input');
    const result = document.getElementById('result');
    const guess = Number(guessInput.value);
  
    if (!guess || guess < 1 || guess > 100) {
      result.textContent = 'Masukkan angka antara 1 dan 100.';
      return;
    }
  
    attempts++;
  
    if (attempts >= maxAttempts) {
      result.textContent = "Game Over! Anda telah melebihi batas percobaan.";
      document.getElementById('guess-input').disabled = true;
      return;
    }
  
    if (guess === randomNumber) {
      result.textContent = `Selamat! Anda menebak dengan benar dalam ${attempts} percobaan.`;
      if (attempts < highScore) {
        highScore = attempts;
        document.getElementById('high-score').textContent = `Skor Tertinggi: ${highScore} percobaan`;
      }
      alert("Selamat! Anda telah menyelesaikan permainan!");
    } else if (guess < randomNumber) {
      result.textContent = 'Terlalu rendah, coba lagi!';
      animateFeedback('low');  
      giveHint(guess);
    } else {
      result.textContent = 'Terlalu tinggi, coba lagi!';
      animateFeedback('high'); 
      giveHint(guess);
    }
  
    guessInput.value = '';
  }

function giveHint(guess) {
  const hint = document.getElementById('hint');
  if (Math.abs(guess - randomNumber) <= 10) {
    hint.textContent = 'Hampir benar!';
  } else if (Math.abs(guess - randomNumber) <= 30) {
    hint.textContent = 'Cukup dekat!';
  } else {
    hint.textContent = '';
  }
}
function animateFeedback(type) {
    const result = document.getElementById('result');
    if (type === 'low') {
      result.style.color = 'blue';
    } else if (type === 'high') {
      result.style.color = 'red';
    }
    setTimeout(() => {
      result.style.color = 'black';
    }, 500);
  }

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('result').textContent = '';
  document.getElementById('guess-input').value = '';
  document.getElementById('hint').textContent = '';
  document.getElementById('guess-input').disabled = false;
}
function goToHomePage() {
    window.location.href = 'index.html';
  }
 