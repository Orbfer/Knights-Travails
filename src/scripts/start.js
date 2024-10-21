import getKnightsRoute from "./getKnightsRoute";
import { endPoint } from "./pickEnd";
import { knightPos } from "./placeKnight";
const knightSquare = document.querySelector("#knight-square");
let translateX = 0;
let translateY = 0;
function startMoves() {
  console.log("knightPos:", knightPos);
  console.log("endPoint:", endPoint);
  if (knightPos.length === 0 || endPoint.length === 0)
    alert("You have to pick a start and an end point.");
  else {
    const path = getKnightsRoute(knightPos, endPoint);
    animatePath(path);
  }
}
function animatePath(path) {
  let i = 1;
  function animateStep() {
    if (i < path.length) {
      moveAnimation(path[i - 1], path[i]);
      i++;
      setTimeout(animateStep, 1000);
    } else {
      const moveLog = document.querySelector("#move-log");
      moveLog.textContent = `Number of moves took: ${path.length - 1}`;
    }
  }
  animateStep();
}
function moveAnimation(start, end) {
  const knight = document.querySelector("#knight-icon");
  const board = document.querySelector("#board");
  const boardWidth = board.offsetWidth;
  const boardHeight = board.offsetHeight;
  const deltaY = end[0] - start[0];
  const deltaX = end[1] - start[1];
  if (deltaX === 1 && deltaY === 2) {
    translateX = boardWidth / 8;
    translateY = boardHeight / -4;
    knightPos[1] += 1;
    knightPos[0] += 2;
  } else if (deltaX === 1 && deltaY === -2) {
    translateX = boardWidth / 8;
    translateY = boardHeight / 4;
    knightPos[1] += 1;
    knightPos[0] -= 2;
  } else if (deltaX === -1 && deltaY === 2) {
    translateX = boardWidth / -8;
    translateY = boardHeight / -4;
    knightPos[1] -= 1;
    knightPos[0] += 2;
  } else if (deltaX === -1 && deltaY === -2) {
    translateX = boardWidth / -8;
    translateY = boardHeight / 4;
    knightPos[1] -= 1;
    knightPos[0] -= 2;
  } else if (deltaX === 2 && deltaY === 1) {
    translateX = boardWidth / 4;
    translateY = boardHeight / -8;
    knightPos[1] += 2;
    knightPos[0] += 1;
  } else if (deltaX === 2 && deltaY === -1) {
    translateX = boardWidth / 4;
    translateY = boardHeight / 8;
    knightPos[1] += 2;
    knightPos[0] -= 1;
  } else if (deltaX === -2 && deltaY === 1) {
    translateX = boardWidth / -4;
    translateY = boardHeight / -8;
    knightPos[1] -= 2;
    knightPos[0] += 1;
  } else if (deltaX === -2 && deltaY === -1) {
    translateX = boardWidth / -4;
    translateY = boardHeight / 8;
    knightPos[1] -= 2;
    knightPos[0] -= 1;
  }

  knight.style.transform = `translate(${translateX}px, ${translateY}px)`;
  knight.addEventListener("transitionend", changeKnightPos, { once: true });
}
function changeKnightPos() {
  translateX = 0;
  translateY = 0;
  const knight = document.querySelector("#knight-icon");
  const squares = document.querySelectorAll(".square");
  knight.remove();
  for (const square of squares) {
    if (
      square.getAttribute("dataX") == knightPos[0] &&
      square.getAttribute("dataY") == knightPos[1]
    ) {
      square.append(knight);
      square.style.backgroundColor = "#2d862d";
      knight.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
  }
}
export default startMoves;
