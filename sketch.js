const container = document.querySelector('.box');
var startingSize = 90;
function getRandomColor() {
	var letter = '0123456789ABCDEF';
	var color = '#';
	for( var i = 0; i < 6; i++ ) {
		color += letter[Math.floor(Math.random() * 16)];
	}
	return color;
}

//create board
function createBoard(size) {
	for( let i = 0; i < size; i++ ) {
		let row_container = document.createElement('div');
		row_container.classList.add('column');
		for ( let j = 0; j < size; j++ ) {
			let content = document.createElement('div');
			content.classList.add('row');
			row_container.appendChild(content);
		}
		container.appendChild(row_container);
	}
}

function removeBoard(size){
	var firstChildren = document.querySelector('.box');
	while( firstChildren.firstChild ) {
		var secondChildren = firstChildren.children;
		while( secondChildren.firstChild ) {
			console.log(firstChildren);
			secondChildren.removeChild(secondChildren.firstChild);
			// console.log(secondChildren.children[j]);
			// console.log(secondChildren.children[j]);
			//secondChildren.removeChild(secondChildren.childNodes[j]);
		}
		//firstChildren[i].remove();
		firstChildren.removeChild(firstChildren.firstChild);
	}
}

function resetBoardColors(size){
	let allChildren = document.querySelector('.box');
	let allInnerChildren = allChildren.querySelectorAll('.column');
	console.log(allInnerChildren[0].childNodes);
	for( let i = 0; i < size; i++ ) {
		for( let j = 0; j < size; j++ ) {
			allInnerChildren[i].childNodes[j].style.backgroundColor = "#6F9FD8";
		}
	}
}

//add left border
function addBorders(changeSize = 0) {
	let allBoxes = document.querySelector('.box').children;
	let boxList = allBoxes[0].children;
	let listLength = boxList.length;


	for( let i = 0; i < listLength; i++ ) {
	 	boxList[i].classList.add("left-border");
		// boxList[i].classList.add("change-width");
	}

	//right border
	let lastChild = document.querySelector('.box').lastChild;
	let elementListLast = lastChild.querySelectorAll('.row');
	let elementListLastLength = elementListLast.length;

	for( let i = 0; i < elementListLastLength; i++ ) {
	 	elementListLast[i].classList.add("right-border");
	}

	//bottom, top border
	let allChildren = document.querySelector('.box');
	let allInnerChildren = allChildren.querySelectorAll('.column');
	let allInnerLength= allInnerChildren.length;
	for( let i = 0; i < allInnerLength; i++ ) {
		allInnerChildren[i].firstChild.classList.add('top-border');
		allInnerChildren[i].lastChild.classList.add('bottom-border');
		allInnerChildren[i].onmouseover = function(e) {
			// console.log(e.target);
			// console.log(getRandomColor());
			e.target.style.backgroundColor = getRandomColor();
		}
	}
}

//Change size

let boardSize = document.querySelector(".size-button");
boardSize.addEventListener('click', function(){
	removeBoard(startingSize);
	startingSize = prompt("Please enter your board size (Limit: 2 <= size <= 100 )");
	while( (startingSize < 2 || startingSize > 100) && startingSize != null ){
		startingSize = prompt("Please enter your board size (Limit: 2 <= size <= 100 )");
	}
	createBoard(startingSize);
	addBorders(startingSize);
})

//reset colors
let resetColor = document.querySelector(".reset-button");
resetColor.addEventListener('click', function(){
	resetBoardColors(startingSize);
});

createBoard(startingSize);
addBorders();


