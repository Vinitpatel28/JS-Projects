function rollDice() {
    // Get the selected player (either Player 1 or Player 2)
    const player1Radio = document.getElementById("player1");
    const player2Radio = document.getElementById("player2");

    // If no player is selected, return
    if (!player1Radio.checked && !player2Radio.checked) {
        alert("Please select a player to roll the dice.");
        return;
    }

    // Generate random dice roll (1-6)
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    // Display the result in the appropriate player's section
    if (player1Radio.checked) {
        document.getElementById("player1Dice").innerText = diceRoll;
        console.log(`Player 1 rolled a ${diceRoll}`);
    } else if (player2Radio.checked) {
        document.getElementById("player2Dice").innerText = diceRoll;
        console.log(`Player 2 rolled a ${diceRoll}`);
    }

    // Determine the winner based on both players' rolls
    const player1Roll = parseInt(document.getElementById("player1Dice").innerText);
    const player2Roll = parseInt(document.getElementById("player2Dice").innerText);
    
    let winnerMessage = "";

    if (player1Roll > player2Roll) {
        winnerMessage = "Player 1 Wins!";
        console.log(`Player 1 wins with a roll of ${player1Roll} vs ${player2Roll}.`);
    } else if (player2Roll > player1Roll) {
        winnerMessage = "Player 2 Wins!";
        console.log(`Player 2 wins with a roll of ${player2Roll} vs ${player1Roll}.`);
    } else {
        winnerMessage = "It's a Tie!";
        console.log(`It's a tie with both players rolling ${player1Roll}.`);
    }

    // Display the winner message
    document.getElementById("winner").innerText = winnerMessage;
}
