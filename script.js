let wins = 0;
let losses = 0;
let rounds = 0;

const resultsText = document.querySelector('.results');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
		button.addEventListener('click', (event) => {
		resultsText.textContent = game(event.target.className);
		winsText.textContent = wins;
		lossesText.textContent = losses;
	});
});

const winsText = document.querySelector('.wins');
winsText.textContent = wins;
const lossesText = document.querySelector('.losses');
lossesText.textContent = losses;

const it = document.querySelector('.i');


function computerPlay() {
	const plays = ["paper", "rock", "scisors"];
	let play = plays[Math.floor(Math.random() * plays.length)];
	return play;
}

function playRound(playerSelection, computerPlay) {
	let result = '';

	// check for a draw
	if (computerPlay === playerSelection) {
		result = "It's a Draw!";	

	} else if (playerSelection === "paper") {
		// check for loss
		if (computerPlay === "scisors") {
			result = "You Lose! Scisors beats Paper"

		// check for win
		} else {
			result = "You Win! " + 
								playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + 
								" beats " + 
								computerPlay.charAt(0).toUpperCase() + computerPlay.slice(1);
		}
	} else if (playerSelection === "rock") {
		if (computerPlay === "paper") {
			result = "You Lose! Paper beats Rock"
		} else {
			// winning
			result = "You Win! " + 
								playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + 
								" beats " + 
								computerPlay.charAt(0).toUpperCase() + computerPlay.slice(1);
		}
	} else if (playerSelection === "scisors") {
		if (computerPlay === "rock") {
			result = "You Lose! Rock beats Scisors"
		} else {
			result = "You Win! " + 
								playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + 
								" beats " + 
								computerPlay.charAt(0).toUpperCase() + computerPlay.slice(1);
		}
	} 
	return result;
}


function game (playerSelection) {
	if (wins == 5 || losses == 5) {
		if (wins == 5) {
			return "You win by " + wins + " to " + losses;
		} else if (losses == 5) {
			return "You lose by " + losses + " to " + wins;
		}
		return "Game over";
	} else {
		result = playRound(playerSelection, computerPlay());
		if (result[4] == 'W') {
			wins += 1;
		} else if (result[4] == 'L') {
			losses += 1;
		} 
		return result;
	}
}

