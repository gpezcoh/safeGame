console.log("hello");

var room = document.getElementById("room");
var safe = document.getElementById("safe");
var door = document.getElementById("door");
var locks = document.getElementsByClassName("lock");
var button = document.getElementById("button");
var height = window.outerHeight;
var width = window.outerWidth;
var ratio = 1;
var originalHeight = window.outerHeight;
var originalWidth = window.outerWidth;

render();

window.onresize = function(event) {
	height = window.outerHeight;
	width = window.outerWidth;
	ratio = height/originalHeight < width/originalWidth ? height/originalHeight : width/originalWidth;
	render();
};

// this is extremely unnecessary
function render(){
	safe.style.height = height/2;
	// * Math.ceil(numberOfLocks/3);
	safe.style.width = width/2;
	safe.style.top = height/4;
	safe.style.left = width/4;

	height = safe.style.height.slice(0,-2) - 0;
	width = safe.style.width.slice(0,-2) - 0;

	door.style.height = height * 4/5;
	door.style.width = width * 4/5;
	door.style.top = (height/2) - height * 2/5 - ratio * 10;
	door.style.left = (width/2) - width * 2/5 - ratio * 10;
	door.style.border = "solid black " + ratio * 10 + "px";

	height = door.style.height.slice(0,-2) - 0;
	width = door.style.width.slice(0,-2) - 0;

	for(var x = 0; x < numberOfLocks; ++x){
		makeLock(x);
		makeKey(x);
	}

	button.style.height = height/8;
	button.style.width = width/4;
	button.style.top = height/6;
	button.style.left = width/2 - width/8;
}

function makeLock(index){
	var lock = document.getElementById("lock-" + index)
	if(!lock){
		var lock = document.createElement("div");
		lock.className = "lock";
		lock.id = "lock-" + index;
		door.appendChild(lock);
	}

	lock.style.height = height/12;
	lock.style.width = width/5;
	lock.style.top = height/1.6;
	lock.style.left = ((width*((index+1)/(numberOfLocks + 1))) - width/10);
	lock.style.border = "solid black " + (height/originalHeight)/32 + "em";
	lock.style.fontSize = height/200 + "em";
}

function makeKey(index){
	var key = document.getElementById("key-" + index)
	if(!key){
		var key = document.createElement("div");
		key.className = "key";
		key.id = "key-" + index;
		room.appendChild(key);
	}
	key.style.height = height/3;
	key.style.width = width/6;
	key.style.top = height*(((index+1)*2)/(numberOfLocks + 1));
	key.style.left = width/5;
	key.style.border = "solid green " + (height/originalHeight)/4 + "em";
	key.textContent = baseAlphabet[index]
	key.onclick = selection;
	key.style.fontSize = height/60 + "em";
}

function selection(){
	this.style.display = "none";
	answers.push(this.textContent);
	document.getElementById("lock-" + (answers.length-1)).style.background = "gray";
	document.getElementById("lock-" + (answers.length-1)).textContent = this.textContent;
}









