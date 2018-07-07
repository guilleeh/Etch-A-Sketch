const container = document.querySelector('.box');


for( let i = 0; i < 15; i++ ) {
	let row_container = document.createElement('div');
	row_container.classList.add('row');
	for ( let j = 0; j < 15; j++ ) {
		let content = document.createElement('div');
		content.classList.add('column');
		row_container.appendChild(content);
	}
	container.appendChild(row_container);
}
