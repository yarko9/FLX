if(confirm("Do you want to play a game?")) {
	let roundPrize
	let attempsLeft;
	let startPrize = 10;
	let min = 1;
	let max = 5;
	let prize = 0;
	do {
		let winNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		roundPrize = startPrize;
		attempsLeft = 3;
		for(attempsLeft; attempsLeft >=1; attempsLeft--) {
			let userNumber = parseInt(prompt("Enter number from " + min + " to " + max + "\nAttemps left: "
				+ attempsLeft + "\nTotal Prize: "+ prize + "\nPossible prize on current attemp: " + roundPrize));
				if(userNumber === winNumber) {
					startPrize*=3;
					prize+=roundPrize;
					max*=2;
					break;
				} else {
					roundPrize=Math.floor(roundPrize/2);
				}
			}
		if (attempsLeft === 0) {
			break;
		}	
	} while (confirm("Congratulation! Your prize is " + prize + "$!" + " Do you want to continue?"));
		alert("Thank you for a game. Your prize is " + prize + "$!");
} else {
	alert("You did not become a millionaire, but can");
}
