function min(board, depth, alpha, beta) {
  let bestScore = Infinity;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == blankSpace) {
        board[i][j] = playerTwo.symbol;
        bestScore = Math.min(bestScore, minimax(board, depth - 1, true, alpha, beta));
        board[i][j] = blankSpace
        if (beta != null) beta = Math.min(beta, bestScore) 
        if (alpha != null && bestScore < alpha) break;
      }
    }
  }
  return bestScore;
}

function max(board, depth, alpha, beta) {
  let bestScore = -Infinity;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == blankSpace) {
        board[i][j] = playerOne.symbol;
        bestScore = Math.max(bestScore, minimax(board, depth - 1, false, alpha, beta));
        board[i][j] = blankSpace
        if (alpha != null) alpha = Math.max(alpha, bestScore)
        if (beta != null && bestScore > beta) break;
      }
    }
  }
  return bestScore;
}

function minimax(board, depth, isMaximizing, alpha, beta) {
  const inicio = performance.now();
  visitedNodes += 1;
  const gameOver = checkGameOver(board);

  if (gameOver != null || depth == 0) {
    return gameOver;
  }

  elapsedTime += performance.now() - inicio;
  if (!isMaximizing) {
    return min(board, depth, alpha, beta);
  } else if (isMaximizing) {
    return max(board, depth, alpha, beta);
  }
}