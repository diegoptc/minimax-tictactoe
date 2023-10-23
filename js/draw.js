function draw(board) {
	const boardContainer = document.getElementById('board-container');

	boardContainer.innerHTML = '';
	for (let i = 0; i < board.length; i++) {
		const node = document.createElement('div');
		node.classList.add('border-2', 'p-4', 'border-white', 'rounded','text-9xl', 'font-bold', 'text-white', 'text-center', 'cell', 'h-[170px]', 'w-[170px]');
		node.innerHTML = board[i];
		node.setAttribute('data-index', i);
		node.addEventListener('click', () => {
			tictactoe.play(+node.getAttribute('data-index'))
		})
		boardContainer.appendChild(node);
	}
}