function getMin(a,b,c) {
	let arr = [];
	arr.push(a,b,c);
	let minNum = arr[0];
	for (let i=0; i<= arr.length; i++){
		if (arr[i]<minNum){
			minNum=arr[i];
		}
	}
	return minNum;
}
getMin(3,0,-3);