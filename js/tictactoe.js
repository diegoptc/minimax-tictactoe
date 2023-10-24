const blankSpace = '';

function equals3(a, b, c) {
	return a == b && b == c && a != blankSpace;
}

function emptyCells(board) {
	const cells = [];
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] == blankSpace) {
				cells.push(i);
			}
		}
	}
	return cells;
}

function checkGameOver(board) {
	let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // Diagonal
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  if (winner != null) {
		return playerOne.symbol == winner ? playerOne.winnerNumber : playerTwo.winnerNumber; //Vitoria
  } else if (emptyCells(board).length == 0) {
		return 0; //Empate
  }

	return winner //Nao terminou;
}

const tictactoe = {
	currentPlayer: startPlayer,
	gameOver: false,
	board: [
		[],
		[],
		[]
	],

	start(startState) {
		if (!startState) {
			for (let i = 0; i < 3; i++) {
				this.board[i] = [];
				for (let j = 0; j < 3; j++) {
					this.board[i][j] = blankSpace;
				}
			}
		} else {
			let countX = 0;
			let countO = 0;
			for (let i = 0; i < 3; i++) {
				this.board[i] = [];
				for (let j = 0; j < 3; j++) {
					if (startState[i][j] == 'X') countX++;
					else if (startState[i][j] == 'O') countO++
					this.board[i][j] = startState[i][j];
				}
				if (countX > countO) {
					startPlayer = playerTwo;
				} else {
					startPlayer = playerOne;
				}
			}
		}
		showMessage('');
		this.gameOver = false;
		this.currentPlayer = startPlayer;
		draw(this.board)
		if (this.currentPlayer.play) {
			this.currentPlayer.play();
		}
	},

	play(line, column) {
		if (this.board[line][column] !== blankSpace || this.gameOver) return false;
		
		this.board[line][column] = this.currentPlayer.symbol;
		this.currentPlayer = this.currentPlayer.id === 1 ? playerTwo : playerOne;

		draw(this.board);

		const winnerNumber = checkGameOver(this.board)
		if (winnerNumber != null) {
			if (playerOne.winnerNumber == winnerNumber) {
				showMessage(`${playerOne.name} ganhou!`)
			} else if (playerTwo.winnerNumber == winnerNumber) {
				showMessage(`${playerTwo.name} ganhou!`)
			} else {
				showMessage(`Empate!`)
			}
			this.gameOver = true;
			return false;
		}

		if (this.currentPlayer.play) {
			this.currentPlayer.play();
		}
	}
}
