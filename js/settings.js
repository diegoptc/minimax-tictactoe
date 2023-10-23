function playWithMax() {
  const board = [...tictactoe.board];
  let bestScore = -Infinity;
  let bestMove = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == blankSpace) {
        board[i][j] = this.symbol;
        const score = minimax(board, emptyCells(board).length, false)
        board[i][j] = blankSpace;
        if (score > bestScore) {
          bestScore = score;
          bestMove = {i, j}
        }
      }
    }
  }
  tictactoe.play(bestMove.i, bestMove.j);
}

function playWithMin() {
  const board = [...tictactoe.board];
  let bestScore = Infinity;
  let bestMove = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == blankSpace) {
        board[i][j] = this.symbol;
        const score = minimax(board, emptyCells(board).length, true)
        board[i][j] = blankSpace;
        if (score < bestScore) {
          bestScore = score;
          bestMove = {i, j}
        }
      }
    }
  }
  tictactoe.play(bestMove.i, bestMove.j);
}

const playerHuman = {
  type: 'HUMAN',
  name: 'Humano'
}

const playerIaMax = {
  type: 'IA',
  name: 'IA MAX',

  play: playWithMax
}

const playerIaMin = {
  type: 'IA',
  name: 'IA MIN',

  play: playWithMin
}

function changePlayerOneAndTwo(one, two) {
  playerOne = one;
  playerOne.id = 1;
  playerOne.symbol = 'X';
  playerOne.winnerNumber = 10;

  playerTwo = two;
  playerTwo.id = 2;
  playerTwo.symbol = 'O';
  playerTwo.winnerNumber = -10;

  startPlayer = playerOne;
}

changePlayerOneAndTwo(playerIaMax, playerHuman);