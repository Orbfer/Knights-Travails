import { setKnightPlaced, setKnightPos } from "./placeKnight";
import { setEndPoint, setEndPointPicked } from "./pickEnd";
function clearBoard() {
  const moveLog = document.querySelector("#move-log");
  moveLog.textContent = "Number of moves took:";
  const squares = document.querySelectorAll(".square");
  for (const square of squares) {
    if (square.classList.contains("light")) {
      square.style.backgroundColor = "#ecb176";
    } else if (square.classList.contains("dark")) {
      square.style.backgroundColor = "#a67b5b";
    }
    const knightIcon = square.querySelector("#knight-icon");
    if (knightIcon) {
      knightIcon.remove();
    }
  }
  setKnightPlaced(false);
  setKnightPos([]);
  setEndPoint([]);
  setEndPointPicked(false);
}
export default clearBoard;
