let boxes = document.querySelectorAll(".gameBox");
let resetbtn = document.querySelector("#resetbtn");
let newGame = document.querySelector("#newGamebtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnO = true;

let enableBoxes = function () {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const resetGame = function () {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    //Player-O
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
      //Player-X
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = function () {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;

    let disableBoxes = function () {
      for (let box of boxes) {
        box.disabled = true;
      }
    };

    const showWinner = function (winner) {
      msg.innerHTML = `<h5 class="mt-4 " id="msg"> <i class="fa-solid fa-trophy fa-lg" style="color: black;" ></i><br><b>Congratulation, Winner is ${winner}!</b></h5>`;
      msgContainer.classList.remove("hide");
      disableBoxes();
    };

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner", pos1);
        showWinner(pos1);
      }
    }
  }
};

newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
