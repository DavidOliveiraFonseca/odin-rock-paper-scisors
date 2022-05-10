function computerPlay() {
	const plays = ["paper", "rock", "scisors"];
	let play = plays[Math.floor(Math.random() * plays.length)];
	return play;
}

function playRound(playerSelection, computerPlay) {
	// draw
	if (computerPlay === playerSelection) {
		return "It's a Draw!";		
	}
	// losses
	if (playerSelection === "paper") {
		if (computerPlay === "scisors") {
			return "You Lose! Scisors beats Paper"
		}
		
	} else if (playerSelection === "rock") {
		if (computerPlay === "paper") {
			return "You Lose! Paper beats Rock"
		}
	} else if (playerSelection === "scisors") {
		if (computerPlay === "rock") {
			return "You Lose! Rock beats Scisors"
		}
	}
	// capitalizing the first letter of the choices for printing
	playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
	computerPlay = computerPlay.charAt(0).toUpperCase() + computerPlay.slice(1);
	// winning
	return "You Win! " + playerSelection + " beats " + computerPlay;
}

function playerInput() {
	let message = "Pick between: Rock, Paper or Scisors?";
	let messageError = "You picked a wrong choice\n";
	let input = prompt(message);
	// making player selection case sensitive
	input = input.toLowerCase();
	while(input !== "rock" && input !== "paper" && input !== "scisors") {
		input = prompt(messageError + message);
		// making player selection case sensitive
		input = input.toLowerCase();
	}
	return input;
}

function game () {
	for (let i = 0; i < 5; i++) {
		let playerSelection = playerInput();
		let result = playRound(playerSelection, computerPlay());
		console.log(result);
	}
}

//playerInput();

game();

// tests
/*
let i = 0;
while (i < 10) {
	console.log(computerPlay());
	i+=1;
}
*/

/*
console.log(playRound("Paper", "paper"));
console.log(playRound("pAper", "scisors"));
console.log(playRound("paPer", "rock"));

console.log(playRound("rocK", "rock"));
console.log(playRound("rock", "paper"));
console.log(playRound("rock", "scisors"));

console.log(playRound("scisors", "scisors"));
console.log(playRound("scisors", "rock"));
console.log(playRound("scisors", "paper"));
*/

