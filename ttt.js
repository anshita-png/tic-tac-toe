let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function disableBoxes() { //To disable the boxes, however It's not working idk why
    boxes.forEach(box => box.disabled = true);
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
       if (turnO) {
        box.textContent = "O";
        turnO = false;
       } else {
        box.textContent = "X";
        turnO = true;
       }
       disableBoxes();
       checkwinner();
});
});

const checkwinner = () => {
    for (let pattern of winPatterns) {
       let pos1val = boxes [pattern[0]].textContent;
       let pos2val = boxes [pattern[1]].textContent;
       let pos3val = boxes [pattern[2]].textContent;

       if (pos1val != "" && pos2val != "" && pos3val != "") {
        if (pos1val === pos2val && pos2val === pos3val) {
            alert("player " + pos1val + " wins!");
            disableBoxes();
        };
   }}};

//reset controls 
reset.addEventListener("click", resetBoard);

function checkWin(player) {
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return boxes[index].innerHTML === player;
        });
    });
};

function resetBoard() {
    boxes.forEach(box => box.innerHTML = "");
    turnO = true;
};
