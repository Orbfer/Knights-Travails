import getKnightsRoute from "./getKnightsRoute";
import { endPoint } from "./pickEnd";
import { knightPos } from "./placeKnight";
function startMoves() {
  if (knightPos.length === 0 || endPoint.length === 0)
    alert("You have to pick a start and an end point.");
  else {
    const path = getKnightsRoute(knightPos, endPoint);
  }
}
export default startMoves;
