let boxes = document.querySelectorAll(".box");
let turn0 = true;
const winpatt = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [2, 4, 6], [0, 4, 8]
];

const showWin = (winner) => {
    let msg = document.getElementById("msg");
    let msgcontainer = document.getElementById("msg-container");
    msg.innerText = `Congratulations ${winner}, you won!`;
    msgcontainer.classList.remove("hide");
};

const checkwin = () => {
    for (let pat of winpatt) {
        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWin(pos1);
                boxes.forEach(box => box.disabled = true); // Disable all boxes after a win
                return;
            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            console.log("box was clicked");
            if (turn0) {
                box.innerText = "X";
                turn0 = false;
            } else {
                box.innerText = "O";
                turn0 = true;
            }
            box.disabled = true;
            checkwin();
        }
    });
});

document.getElementById("reset-btn").addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    document.getElementById("msg-container").classList.add("hide");
    turn0 = true;
});
