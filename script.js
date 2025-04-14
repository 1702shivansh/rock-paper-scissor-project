let buttons = document.querySelectorAll(".choice");
let cntmy=0;
let cntcomp=0;
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        if(button.classList[1]=="one")
        {
            result(0);
        } 
        if(button.classList[1]=="two")
        { 
            result(1);
        }   
        if(button.classList[1]=="three")
        {
            result(2);
        }   
    });   
});
const showMessage = (text) => {
    const msgBox = document.querySelector(".final-mssg");
    const winnerText = document.getElementById("winner-text");

    winnerText.textContent = text;
    msgBox.style.display = "block";
};
const draw=()=>{
    showMessage("Its a Draw!!")
};
const win=(my,comp)=>{
    const winMatrix = [
        [0, 1, 0], // Rock
        [0, 0, 1], // Paper
        [1, 0, 0], // Scissors
    ];

    const win=winMatrix[my][comp]===1;
    if(win)
    {
        cntmy++;
        let mypoint=document.getElementById("mypoint");
        mypoint.innerText=cntmy;
        showMessage("You win!!");
    }
    else {
        cntcomp++;
        let compScore = document.getElementById("compoint");
        compScore.innerText=cntcomp;
        showMessage("Computer Wins!");
    }

};
const result=(val)=>{
    let no=Math.floor(Math.random() * 3);
    if(val===no)
        draw();
    else
        win(val,no);
};
document.getElementById("play-again").addEventListener("click", () => {
    // Hide message
    document.querySelector(".final-mssg").style.display = "none";

    // Reset score counters
    cntmy = 0;
    cntcomp = 0;

    // Reset score display
    document.getElementById("mypoint").innerText = "0";
    document.getElementById("compoint").innerText = "0";
});

