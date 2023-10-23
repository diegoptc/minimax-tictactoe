function min(board, depth) {
  let bestScore = Infinity;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == blankSpace) {
        board[i][j] = playerTwo.symbol;
        const score = minimax(board, depth - 1, true);
        board[i][j] = blankSpace
        bestScore = Math.min(score, bestScore);
      }
    }
  }
  return bestScore;
}

function max(board, depth) {
  let bestScore = -Infinity;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == blankSpace) {
        board[i][j] = playerOne.symbol;
        const score = minimax(board, depth - 1, false);
        board[i][j] = blankSpace
        bestScore = Math.max(score, bestScore);
      }
    }
  }
  return bestScore;
}

function minimax(board, depth, isMaximizing) {
  const gameOver = checkGameOver(board);

  if (gameOver != null || depth == 0) {
    return gameOver;
  }

  if (!isMaximizing) {
    return min(board, depth);
  } else if (isMaximizing) {
    return max(board, depth);
  }
}
