import knightImage from "../assets/images/chess-knight-svgrepo-com.svg";
const page = document.querySelector("#page");
const startScreen = document.createElement("div");
function startGame() {
  startScreen.id = "start-screen";
  page.append(startScreen);
  const startScreenTitle = document.createElement("div");
  startScreenTitle.id = "start-screen-title";
  startScreenTitle.textContent = "Knights Travails";
  startScreen.append(startScreenTitle);
  const knightImg = document.createElement("img");
  knightImg.id = "knight-img-start-screen";
  knightImg.src = knightImage;
  startScreen.append(knightImg);
  const startGameButtonCont = document.createElement("div");
  startGameButtonCont.classList.add("start-btn-cont");
  startScreen.append(startGameButtonCont);
  const startGameButton = document.createElement("button");
  startGameButton.classList.add("start-btn");
  startGameButton.textContent = "Start Game";
  startGameButtonCont.append(startGameButton);
  startGameButton.addEventListener("click", startAnimation);
}
function startAnimation() {
  startScreen.classList.add("animate__animated", "animate__fadeOut");
  startScreen.addEventListener("animationend", openSite);
}
function openSite() {
  const backgroundMusic = document.getElementById("background-music");
  backgroundMusic.play();
  startScreen.remove();
}
export { startGame };
