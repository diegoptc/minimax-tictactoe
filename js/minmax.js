function minmax(board, depth, isMaximizing) {
  const gameOver = checkGameOver(board);

  if (gameOver) {
    return gameOver;
  }

  if (isMaximizing) {
    let score = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] == blankSpace) {
        board[i] = playerOne.symbol;
        score = Math.max(score, minmax(board, depth+1, false));
      }
    }
    return score;
  } else if (!isMaximizing) {
    let score = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] == blankSpace) {
        board[i] = playerTwo.symbol;
        score = Math.min(score, minmax(board, depth+1, true));
      }
    }
    return score;
  }
}
