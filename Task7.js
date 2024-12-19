document.getElementById('startButton').addEventListener('click', function() {
    const startRange = parseInt(document.getElementById('startRange').value);
    const endRange = parseInt(document.getElementById('endRange').value);

    // Validate the range input
    if (isNaN(startRange) || isNaN(endRange) || startRange >= endRange) {
        document.getElementById('gameInfo').textContent = "Invalid range. Please ensure the start is less than the end.";
        console.log("Invalid range entered. Please ensure the start number is less than the end number.");
        return;
    }

    // Generate the random number
    const randomNum = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
    
    // Display the message on the page
    document.getElementById('gameInfo').textContent = `Try to guess the number between ${startRange} and ${endRange}.`;
    document.getElementById('gameInfo').style.color = '#34495e';
    
    // Log the game start and random number to the console
    console.log(`Game started! The number to guess is between ${startRange} and ${endRange}.`);
    
    // Show guessing input section
    document.querySelector('.guessing-section').style.display = 'block';

    // Handle the guessing process
    document.getElementById('guessButton').addEventListener('click', function() {
        const guess = parseInt(document.getElementById('guessInput').value);

        // Validate the guess input
        if (isNaN(guess)) {
            document.getElementById('resultMessage').textContent = "Please enter a valid number.";
            document.getElementById('resultMessage').style.color = '#e74c3c';
            console.log("Invalid guess entered. Please enter a valid number.");
            return;
        }

        // Provide feedback on the guess
        if (guess < randomNum) {
            document.getElementById('resultMessage').textContent = "Too low! Try again.";
            document.getElementById('resultMessage').style.color = '#e74c3c';
            console.log(`Guess ${guess} was too low.`);
        } else if (guess > randomNum) {
            document.getElementById('resultMessage').textContent = "Too high! Try again.";
            document.getElementById('resultMessage').style.color = '#e74c3c';
            console.log(`Guess ${guess} was too high.`);
        } else {
            document.getElementById('resultMessage').textContent = "Congratulations! You've guessed the number!";
            document.getElementById('resultMessage').style.color = '#2ecc71';
            console.log(`Correct guess! The number was: ${randomNum}`);
        }
    });
});
