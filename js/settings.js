let visitedNodes = 0;
let elapsedTime = 0;
let algorithm = 'minimax'

function playWithMax() {
  visitedNodes = 0;
  elapsedTime = 0;
  const board = [...tictactoe.board];
  let bestScore = -Infinity;
  let bestMove = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == blankSpace) {
        board[i][j] = this.symbol;
        const score = algorithm == 'minimax' ? minimax(board, emptyCells(board).length, false) : minimax(board, emptyCells(board).length, false, -Infinity, Infinity)
        board[i][j] = blankSpace;
        if (score > bestScore) {
          bestScore = score;
          bestMove = {i, j}
        }
      }
    }
  }
  showMessage(`Nós visitados: ${visitedNodes}<br>Tempo de Execução: ${elapsedTime}ms`)
  setTimeout(() => {
    tictactoe.play(bestMove.i, bestMove.j);
  }, 1000)
}

function playWithMin() {
  visitedNodes = 0;
  elapsedTime = 0;
  const board = [...tictactoe.board];
  let bestScore = Infinity;
  let bestMove = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == blankSpace) {
        board[i][j] = this.symbol;
        const score = algorithm == 'minimax' ? minimax(board, emptyCells(board).length, true) : minimax(board, emptyCells(board).length, true, -Infinity, Infinity)
        board[i][j] = blankSpace;
        if (score < bestScore) {
          bestScore = score;
          bestMove = {i, j}
        }
      }
    }
  }
  showMessage(`Nós visitados: ${visitedNodes}<br>Tempo de Execução: ${elapsedTime}ms`)
  setTimeout(() => {
    tictactoe.play(bestMove.i, bestMove.j);
  }, 1000)
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