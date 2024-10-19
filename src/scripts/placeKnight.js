const squares = document.querySelectorAll(".square");
let knightPlaced = false;
let knightPos = [];
function placeKnight() {
  if (knightPlaced) return;
  else {
    for (const square of squares) {
      square.addEventListener("click", pickSpot);
    }
    knightPlaced = true;
  }
}
function pickSpot(event) {
  const square = event.currentTarget;
  const knightIcon = document.createElement("img");
  knightIcon.id = "knight-icon";
  knightIcon.src = "/imgs/chess-knight-svgrepo-com.svg";
  knightIcon.alt = "Knight";
  square.append(knightIcon);
  knightPos = [
    Number(square.attributes[1].value),
    Number(square.attributes[2].value),
  ];
  for (const square of squares) {
    square.removeEventListener("click", pickSpot);
  }
}
export default placeKnight;
export { knightPos };
export { knightPlaced };
export function setKnightPlaced(value) {
  knightPlaced = value;
}
export function setKnightPos(position) {
  knightPos = position;
}
