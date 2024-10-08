import "./styles/styles.css";
import "animate.css";
import placeKnight from "./scripts/placeKnight";
import pickEnd from "./scripts/pickEnd";
import startMoves from "./scripts/start";
const placeBtn = document.querySelector("#place-btn");
placeBtn.addEventListener("click", placeKnight);
const endBtn = document.querySelector("#endpoint-btn");
endBtn.addEventListener("click", pickEnd);
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", startMoves);
