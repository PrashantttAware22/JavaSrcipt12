let startBtn = document.querySelector("#startBtn");
let resetBtn = document.querySelector("#resetBtn");
let boxes = document.querySelectorAll(".box");
let result = document.querySelector("#resultTxt");

let turnO = true;
let gameStarted = false;

const WinningPattern = [
  [0, 4, 8],
  [0, 1, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

function checkWinner() {
  for (let pattern of WinningPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (
      pos1Val !== "" &&
      pos1Val === pos2Val &&
      pos2Val === pos3Val
    ) {
      return pos1Val;
    }
  }
  return null;
}

startBtn.addEventListener("click", GameStart);

function GameStart() {
  // Prevent from restart the game.
  if (gameStarted) return;

  // Continue normally ...
  gameStarted = true;

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      // If the box already contains X or O, don't allow clicking again.
      if (box.innerText !== "") return;

      if (turnO) {
        box.innerText = "O";
        box.style.backgroundColor = "#FFE52A";
        turnO = false;
      } else {
        box.innerText = "X";
        box.style.backgroundColor = "#fb802e";
        turnO = true;
      }

      let winner = checkWinner();

      if (winner) {
        result.innerText = `Winner is ${winner}`;
        result.style.display = "block";
        disableBoxes();
      } else {
        // Match Tie condition , When no box is empty ; but no one winning the game ..
        let filled = [...boxes].every(box => box.innerText !== "");
        if (filled) {
          result.innerText = "Match Tie";
          result.style.display = "block";
        }
      }
    });
  });
}

function disableBoxes() {
  boxes.forEach(box => box.disabled = true);
}

resetBtn.addEventListener("click", resetgame);

function resetgame() {
  boxes.forEach(box => {
    box.style.backgroundColor = "#001F3D";
    box.innerText = "";
    box.disabled = false;
  });

  turnO = true;
  gameStarted = false;
  result.innerText = "";
  result.style.display = "none";
}
 