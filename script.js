let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbutton=document.querySelector("#new");
let nnbutton=document.querySelector("#nn");
let msgcontainer=document.querySelector(".msg-container");
let drawcontainer=document.querySelector(".draw");
let count=0;
let turno=true;


const winpattern = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{
    turno=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
    drawcontainer.classList.add("shadow");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("hyy you enter the box");
        // box.innerHTML="ABC";
        if(turno)
        {
            box.innerHTML="O"
            turno=false;
        }
        else
        {
            box.innerHTML="X";
            turno=true;
        }
        box.disabled = true;
        count++;
        checkWinner();
        if(count===9)
        {
            gameDraw();
        }
    });
});
const enableBoxes = () =>{
    turno=true;
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};
const disableBoxes = () =>{
    turno=true;
    for(box of boxes)
    {
        box.disabled=true;
    }
};
const showWinner = (winner) =>
{
    win.innerText = `Congratulation, the winner is ${winner}`; 
    msgcontainer.classList.remove("hide"); 
    disableBoxes();
};
const gameDraw = () =>{
    dd.innerText = `The Game is Draw, you both played very well`; 
    drawcontainer.classList.remove("shadow"); 
    disableBoxes();
};
const checkWinner = () =>{
    for(let pattern of winpattern)
    {
        let pos1val=boxes[pattern[0]].innerHTML;
        let pos2val=boxes[pattern[1]].innerHTML;
        let pos3val=boxes[pattern[2]].innerHTML;

        if(pos1val!=="" && pos2val!=="" && pos3val!=="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("winner",pos1val);
                showWinner(pos1val);
            }

        }
    }
};

newbutton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
nnbutton.addEventListener("click",resetGame);