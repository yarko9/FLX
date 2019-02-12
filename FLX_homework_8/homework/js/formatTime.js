function formatTime(min) {
	let d;
	let h;
	let m;
	d = Math.floor(min/1440);
	h = Math.floor((min - (d*1440))/60);
	m = Math.floor(min - ((d*1440)+(h*60)));
	let currentTime = d + " day(s) " + h + " hour(s) " + m + " minute(s)";
	return currentTime; 
}
formatTime(120);
formatTime(59);
formatTime(3601);