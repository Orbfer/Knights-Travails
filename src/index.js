import "./styles/styles.css";
import "animate.css";
import placeKnight from "./scripts/placeKnight";
import pickEnd from "./scripts/pickEnd";
import startMoves from "./scripts/start";
import clearBoard from "./scripts/clearBoard";
import { startGame } from "./scripts/startGame";
const placeBtn = document.querySelector("#place-btn");
placeBtn.addEventListener("click", placeKnight);
const endBtn = document.querySelector("#endpoint-btn");
endBtn.addEventListener("click", pickEnd);
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", startMoves);
const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", clearBoard);
startGame();
