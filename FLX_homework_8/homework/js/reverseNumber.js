function reverseNumber(num) {
	let revNum = 0;
	while(num!==0){
		revNum += num%10;
		num -= num%10;
		num /=10;
		revNum *= 10;
	}
	return revNum/10;
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);