const data = 
      [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

function findTypes(){
	let arr = [];
	for(let i=0;i<arguments.length;i++){
		arr[i]=typeof(arguments[i]);
	}
	return arr;
}
findTypes('number');
findTypes(null, 5, "hello");

function executeforEach(arr, funct) {
	for (let i = 0; i < arr.length; i++) {
		funct(arr[i]);
	}
}
executeforEach([1,2,3], function(el) { 
	console.log(el) 
}); 

function mapArray(arr,funct){
	let arrA = [];
	executeforEach(arr, function(el) {
		arrA.push(funct(el));
	});
}
mapArray([2, 5, 8], function(el) {
	return el + 3 
});

function filterArray(arr,funct) {
	let arrA = [];
	executeforEach(arr, function(el) {
		if(funct(el)) {
			arrA.push(el);
		}
	});
	return arrA;
}
filterArray([2, 5, 8], function(el) {
	return el > 3 
});

function getAmountOfAdultPeople(data){
	let amountOfAdult = filterArray(data,function(el){
		return el.age > 18;
	}).length;
	return amountOfAdult;
}
getAmountOfAdultPeople(data);

function getGreenAdultBananaLovers(data){
	let adultBananaLovers = [];
	filterArray(data,function(el){
		if(el.age > 18 && el.eyeColor ==="green" && el.favoriteFruit === "banana"){
			adultBananaLovers.push(el.name);
		}
	});
	return adultBananaLovers;
}
getGreenAdultBananaLovers(data);

function keys(obj) {
	this.obj=obj;
	console.log(Object.keys(obj));
}
keys({keyOne: 1,keyTwo: 2,keyThree: 3
});

function values(obj) {
	this.obj = obj;
	console.log(Object.values(obj));
}
values({keyOne: 1, keyTwo: 2, keyThree: 3
}); 

function showFormattedDate(inputDate) {
	let date = inputDate;
	let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	console.log(`Date: ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()}`);
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date){
	let currentYear = date.getFullYear();
	return currentYear %2 === 0;
}
isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(date){
	let currentMonth = date.getMonth();
	return currentMonth %2 !== 0;
}
isEvenMonth(new Date('2019-02-27T01:10:00'));