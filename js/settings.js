const playerOne = {
  id: 1,
  symbol: 'X',
  type: 'IA',
  winnerNumber: 1,

  play() {
    const board = [...tictactoe.board];
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === blankSpace) {
        board[i] = this.symbol;
        const score = minmax(board, 0, false)
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    tictactoe.play(bestMove);
  }
}

const playerTwo = {
  id: 2,
  symbol: 'O',
  type: 'HUMAN',
  winnerNumber: -1
}