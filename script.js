function computerPlay() {
	const plays = ["paper", "rock", "scisors"];
	let play = plays[Math.floor(Math.random() * plays.length)];
	return play;
}

function playRound(playerSelection, computerPlay) {
	// making player selection case sensitive
	playerSelection = playerSelection.toLowerCase();
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

// tests
/*
let i = 0;
while (i < 10) {
	console.log(computerPlay());
	i+=1;
}
*/


console.log(playRound("Paper", "paper"));
console.log(playRound("pAper", "scisors"));
console.log(playRound("paPer", "rock"));

console.log(playRound("rocK", "rock"));
console.log(playRound("rock", "paper"));
console.log(playRound("rock", "scisors"));

console.log(playRound("scisors", "scisors"));
console.log(playRound("scisors", "rock"));
console.log(playRound("scisors", "paper"));
