let price = parseFloat(prompt('Enter a price'));
let userDiscount = parseFloat(prompt('Enter your discount'));
if (price < 0 || price > 9999999 || userDiscount < 0 || userDiscount > 99 || isNaN(price) || isNaN(userDiscount)) {
	alert('Invalid input data');
} else {
	let discountValue = price/100 * userDiscount;
	let discountPrice = price - discountValue;
	let savedMoney = price - discountPrice;
	alert('Price without discount: '+ Math.floor(price*100)/100 +'\nDiscount: '+Math.floor(userDiscount*100)/100+'%'+
		'\nPrice with discount: '+Math.floor(discountPrice*100)/100+'\nSaved: '+Math.floor(savedMoney*100)/100);
}