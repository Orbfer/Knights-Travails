const squares = document.querySelectorAll(".square");
let endPoint = [];
let endPointPicked = false;
function pickEnd() {
  if (endPointPicked) return;
  else {
    for (const square of squares) {
      square.addEventListener("click", pickEndPoint);
    }
    endPointPicked = true;
  }
}
function pickEndPoint(event) {
  const square = event.currentTarget;
  square.style.backgroundColor = "#ea6662";
  endPoint = [
    Number(square.attributes[1].value),
    Number(square.attributes[2].value),
  ];
  for (const square of squares) {
    square.removeEventListener("click", pickEndPoint);
  }
}
export default pickEnd;
export { endPoint };
