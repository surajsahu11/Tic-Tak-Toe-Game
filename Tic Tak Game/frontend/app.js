let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO=true;
const winpattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () =>{
    turnO = true;
    enablleboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerHTML ="O";
            turnO = false;
        } else {
            box.innerHTML ="X";
            turnO = true;
        }
    box.disabled = true;

    chakewinner();
    });
}); 

const disabelboxes = () => {
    for( let box of boxes){
        box.disabled = true;
    }
}

const enablleboxes = () => {
    for( let box of boxes){
        box.disabled = false;
        box.innerHTML= "";
    }
}

const showWinner = (winner) => {
msg.innerHTML =`Congratulatiions, Winner is ${winner}`;
msgcontainer.classList.remove("hide");cl
};


const chakewinner = () => {
    for ( let pattern of winpattern){
        let val1pos = boxes[pattern[0]].innerHTML;
        let val2pos = boxes[pattern[1]].innerHTML;
        let val3pos = boxes[pattern[2]].innerHTML;
         
        if (val1pos != ""&& val2pos != ""&& val3pos != ""){
            if(val1pos === val2pos && val2pos === val3pos){
                console.log("winner",val1pos);
                showWinner(val1pos);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click", resetgame);