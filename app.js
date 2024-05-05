let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let turnX = true; 
let winMessage = document.querySelector("#winMessage");

const winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                         [0, 3, 6], [0, 4, 8], [1, 4, 7],
                         [2, 5, 8], [2, 4, 6]];


boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("Box Clicked");
        
        if(turnX){
            box.innerText = "x";
            turnX = false;
        }

        else{
            box.innerText = "o";
            turnX = true;
        }

        box.disabled = true;            // disabling the button
        checkWinner();
    })
});


const showWinner = (winner)=>{
    winMessage.innerText = `The winner is '${winner}'. Congratulations!!`;
    winMessage.style.visibility = "visible";
}


const checkWinner = () =>{
    for(pattern of winningPatterns){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            if(pos1Val != ''){
                console.log("winner:", pos1Val);

                boxes[pattern[0]].style.backgroundColor = "rgb(81, 210, 81)";
                boxes[pattern[1]].style.backgroundColor = "rgb(81, 210, 81)";
                boxes[pattern[2]].style.backgroundColor = "rgb(81, 210, 81)";

                showWinner(pos1Val);

                for(box of boxes){
                    box.disabled = true;
                }
            }
        }

    }
}

resetBtn.addEventListener("click", () =>{
    console.log("Reset");
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "white";
    }
    winMessage.style.visibility = "hidden";
    turnX = true;
});

resetBtn.addEventListener("mouseover", ()=>{
    cursor = "pointer";
})