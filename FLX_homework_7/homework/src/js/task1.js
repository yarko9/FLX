let entryPass
let greetings;
let userPassword;
const currentTime = new Date().getHours();
if (currentTime < 20) {
	greetings = "Good day, dear ";
} else {
	greetings = "Good evening, dear ";
}
const userName = prompt("Enter your name:");
if (!userName || userName === null) {
	alert("Canceled");
} else if (userName.length < 4) {
	alert("I don't know any users having name length less than 4 symbols");
} else if (userName === "Admin") {
	entryPass = "RootPass"; 
	userPassword = prompt("Enter your password:");
	if (userPassword === entryPass) {
		alert(greetings + userName + "!");
	} else {
		alert("Wrong password");
	}
} else if (userName === "User"){
	entryPass = "UserPass";
	userPassword = prompt("Enter your password:");
	if (userPassword === entryPass) {
		alert(greetings + userName + "!");
	} else {
		alert("Wrong password");
	}
} else {
	alert("I don't know you");
}
