var numberOfLocks = 3;

var locks = [];

var keys = [];

var answers = [];

var superSecretOrder = [];

var initiallyLocked = true;
var baseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').map((c) => c.toUpperCase());
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').map((c) => c.toUpperCase());
init();

function init(){
	setKeys();
	console.log(keys)
	if(initiallyLocked){
		locks = new Array(numberOfLocks).fill(0);
	}
	else{
		setLocks();
	}
	setSuperSecretOrder();
	console.log(superSecretOrder)
}

function setSuperSecretOrder(){
	while(keys.length){
		var index = Math.floor(Math.random() * keys.length)
		if(index < keys.length){
			superSecretOrder.push(keys.splice(index,1)[0]);			
		}
	}
}

function setLocks(){
	for(var i = 0; i < numberOfLocks; ++i){
		locks.push(Math.round(Math.random()));
	}
}

function setKeys(){
	for(var i = 0; i < numberOfLocks; ++i){
		keys.push(alphabet.splice(0,1)[0]);
	}
}