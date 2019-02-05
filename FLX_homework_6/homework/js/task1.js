let x1, x2, d, x, a, b, c;
a = parseFloat(prompt('Enter A value:'));
b = parseFloat(prompt('Enter B value:'));
c = parseFloat(prompt('Enter C value:'));
if(a===0 || isNaN(a)|| isNaN(b) || isNaN(c)) {
	alert('Invalid input data');
} else {
	d = (Math.pow(b,2)) - 4 * a * c;
	if (d === 0) {
		x = (-b) / (2 * a);
		alert('x1=x2='+ x);
	} else if (d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		alert('x1='+ x1 + ' x2='+ x2);
	} else if (d < 0) {
		alert('No solution');
	}
}