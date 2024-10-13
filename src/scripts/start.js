import getKnightsRoute from "./getKnightsRoute";
import { endPoint } from "./pickEnd";
import { knightPos } from "./placeKnight";
function startMoves() {
  if (knightPos.length === 0 || endPoint.length === 0)
    alert("You have to pick a start and an end point.");
  else {
    const path = getKnightsRoute(knightPos, endPoint);
    for (let i = 1; i < path.length; i++) {
      moveAnimation(path[i - 1], path[i]);
    }
  }
}
function moveAnimation(start, end) {
  const knight = document.querySelector("#knight-icon");
  if (start[0] + 1 === end[0] && start[1] + 2 === end[1]) {
  }
  if (start[0] + 1 === end[0] && start[1] - 2 === end[1]) {
  }
  if (start[0] - 1 === end[0] && start[1] + 2 === end[1]) {
  }
  if (start[0] - 1 === end[0] && start[1] - 2 === end[1]) {
  }
  if (start[0] + 2 === end[0] && start[1] + 1 === end[1]) {
  }
  if (start[0] + 2 === end[0] && start[1] - 1 === end[1]) {
  }
  if (start[0] - 2 === end[0] && start[1] + 1 === end[1]) {
  }
  if (start[0] - 2 === end[0] && start[1] - 1 === end[1]) {
  }
}
export default startMoves;
