let visitedSquares = [];
function getKnightsRoute(start, end) {
  visitedSquares = [];
  if (!isValid(start) || !isValid(end)) {
    console.error("Invalid start or end position");
    return;
  }

  const queue = [[start]];

  while (queue.length > 0) {
    const path = queue.shift();
    const currentPosition = path[path.length - 1];

    if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
      console.log("Shortest path:", path);
      console.log("Number of steps:", path.length - 1);
      return path;
    }

    const possibleMoves = methods(currentPosition[0], currentPosition[1]);

    for (const move of possibleMoves) {
      if (isValid(move)) {
        visitedSquares.push(move.toString());
        queue.push([...path, move]);
      }
    }
  }

  console.error("No path found.");
}

function isValid([x, y]) {
  return (
    x >= 1 &&
    x <= 8 &&
    y >= 1 &&
    y <= 8 &&
    !visitedSquares.includes([x, y].toString())
  );
}

function methods(x, y) {
  const moves = [
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
  ];

  const validMoves = [];
  for (const move of moves) {
    if (isValid(move)) {
      validMoves.push(move);
    }
  }
  return validMoves;
}

export default getKnightsRoute;
