const blankSpace = '';
const startPlayer = playerOne;

function equals3(a, b, c) {
	return a == b && b == c && a != blankSpace;
} 

function checkGameOver(board) {
	const winnersSequence = [
		[0,1,2],
		[3,4,5],
		[6,7,8],

		[0,3,6],
		[1,4,7],
		[2,5,8],

		[0,4,8],
		[2,4,6]
	]

	for (let i = 0; i < winnersSequence.length; i++) {
		if (equals3(board[winnersSequence[i][0]], board[winnersSequence[i][1]], board[winnersSequence[i][2]])) {
			return board[winnersSequence[i][0]] === playerOne.symbol ? playerOne.winnerNumber : playerTwo.winnerNumber
		}
	}

	for (let i = 0; i < board.length; i++) {
		if (board[i] == blankSpace) {
			return null;
		}
	}

	return 0;
}

const tictactoe = {
	currentPlayer: playerOne,
	gameOver: false,
	board: [],

	start() {
		this.currentPlayer = playerOne;
		this.gameOver = false;
		this.board = new Array(9).fill(blankSpace);
		draw(this.board)
		if (this.currentPlayer.play) {
			this.currentPlayer.play();
		}
	},

	play(position) {
		if (this.board[position] !== blankSpace || this.gameOver) return false;
		
		this.board[position] = this.currentPlayer.symbol;
		this.currentPlayer = this.currentPlayer.id === 1 ? playerTwo : playerOne;

		draw(this.board);

		const winnerNumber = checkGameOver(this.board)
		if (winnerNumber) {
			this.gameOver = true;
			return false;
		}

		if (this.currentPlayer.play) {
			this.currentPlayer.play();
		}
	}
}
