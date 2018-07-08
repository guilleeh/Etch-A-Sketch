const container = document.querySelector('.box');

function getRandomColor() {
	var letter = '0123456789ABCDEF';
	var color = '#';
	for( var i = 0; i < 6; i++ ) {
		color += letter[Math.floor(Math.random() * 16)];
	}
	return color;
}

//create board
for( let i = 0; i < 15; i++ ) {
	let row_container = document.createElement('div');
	row_container.classList.add('column');
	for ( let j = 0; j < 15; j++ ) {
		let content = document.createElement('div');
		content.classList.add('row');
		row_container.appendChild(content);
	}
	container.appendChild(row_container);
}


//add left border
let firstChild = document.querySelector('.box');
firstChild = document.querySelector('.column');
let elementList = firstChild.children;
let elementListLength = elementList.length;

for( let i = 0; i < elementListLength; i++ ) {
 	elementList[i].classList.add("left-border");
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
		console.log(e.target);
		console.log(getRandomColor());
		e.target.style.backgroundColor = getRandomColor();
	}
}



