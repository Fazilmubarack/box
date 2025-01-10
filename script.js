var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 10;
var boxCount = 0;

document.getElementById('btn').addEventListener('click', function () {
    var guess = parseInt(document.getElementById('guessinput').value);

    if (isNaN(guess)) {
        display('Please enter a valid number.');
        return;
    }

    var img = document.querySelector('img');

    if (guess === randomNumber) {
        boxCount++;
        img.src = '1.webp';
        img.classList.add('handshake');
        display("Congratulations! You guessed the number in " + (10 - attempts + 1) + " attempts.");

        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 10;

        setTimeout(() => {
            img.src = '2.jpg';
            img.classList.remove('handshake');
            display('Guess the number to open Box ' + (boxCount + 1) + '.');
            document.getElementById('guessinput').value = '';
        }, 3000);

        if (boxCount === 5) {
            display("Congratulations! You won the game!");
            document.getElementById('btn').disabled = true;
            document.getElementById('guessinput').disabled = true;
        }
        return;
    }

    attempts--;

    if (guess < randomNumber) {
        display('Number is too low. Try a higher number.');
    } else if (guess > randomNumber) {
        display('Number is too high. Try a lower number.');
    }

    img.classList.add('broken-handshake');
    setTimeout(() => img.classList.remove('broken-handshake'), 500);

    if (attempts === 0) {
        display('Game Over! The correct number was ' + randomNumber + '. Try again.');
        resetGame();
    }
});

function display(msg) {
    document.getElementById('msg').textContent = msg;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    boxCount = 0;
    document.getElementById('btn').disabled = false;
    document.getElementById('guessinput').disabled = false;
    document.querySelector('img').src = '2.jpg';
    display('New game started. Guess the number!');
    document.getElementById('guessinput').value = '';
}
