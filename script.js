function computerPlay() {
	const plays = ["rock", "paper", "scisors"];
	let play = plays[Math.floor(Math.random() * plays.length)];
	return play;
}

let i = 0;
while (i < 10) {
	console.log(computerPlay());
	i+=1;
}