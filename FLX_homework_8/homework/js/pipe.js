function addOne(x){
	return x+1;
}
function pipe(num){
	for(let i=0; arguments.length; i++){
		if (typeof arguments[i] === 'function') {
			num=addOne(num);
		}
	}
	return num;
}
pipe(1,addOne);
pipe(1,addOne,addOne);