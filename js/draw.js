function draw(board) {
	const boardContainer = document.getElementById('board-container');

	boardContainer.innerHTML = '';
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			const node = document.createElement('div');
			node.classList.add('border-2', 'p-4', 'border-white', 'rounded','text-9xl', 'font-bold', 'text-white', 'text-center', 'cell', 'h-[170px]', 'w-[170px]', 'select-none');
			node.innerHTML = board[i][j];
			node.setAttribute('data-line', i);
			node.setAttribute('data-column', j);
			node.addEventListener('click', () => {
				tictactoe.play(i, j)
			})
			boardContainer.appendChild(node);
		}
	}
}

function showMessage(message) {
	const messageElement = document.getElementById('message');
	messageElement.innerHTML = message;
}