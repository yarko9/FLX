function isBigger(a,b) {
	return a>b;
}
function isSmaller(a,b) {
	return !isBigger(a, b) && !(a === b);
}
isSmaller(5,-1);