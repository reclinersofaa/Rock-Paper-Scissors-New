var Human = 0; 
var Comp = 0; 
var rounds = 0;

btns = document.querySelectorAll("button");
HScore = document.querySelector(".HScore");
CScore = document.querySelector(".CScore");
CSel = document.querySelector(".CSel");
RoundRes = document.querySelector(".RoundRes");
resback = document.querySelector(".result");


function CompChoice()
{
    var arr = ["R","P","S"];
    var cmp = Math.floor(Math.random()*3);
    return arr[cmp];
}

btns.forEach(btn => {
    btn.addEventListener("click", function(event) {
        resback.style.backgroundColor = "black";
        HChoice = event.target.value;
        if (rounds <= 5) {
            Round(HChoice);
        } 
        if (rounds > 5) { 
            Game();
        }
    });
});

function Round() 
{
    CChoice = CompChoice();
    CSel.textContent = `Computer chooses ${CChoice}`;

    if (HChoice === CChoice){
        RoundRes.textContent = "Tied"
    }
    else if ((HChoice === "R" && CChoice === "P")||(HChoice === "P" && CChoice === "S")||(HChoice === "S" && CChoice === "R")){
        RoundRes.textContent = "Comp wins current round";
        Comp++;
    }
    else{
        RoundRes.textContent = "You win current round";
        Human++;
    }

    HScore.textContent = `You: ${Human}`;
    CScore.textContent = `Computer: ${Comp}`;
    rounds++; 
}

function Game() {
    console.log("Game starts, play for 5 rounds: "); 
    resback.style.backgroundColor = "black";

    if (Human > Comp) { 
        RoundRes.textContent = "YOU WIN!!!";
        CSel.textContent = " ";
        RoundRes.style.fontSize = "65px";
        resback.style.backgroundColor = "green";
    } 
    else if (Human === Comp) {
        RoundRes.textContent = "DAMN STALEMATE!!!";
        CSel.textContent = " ";
        RoundRes.style.fontSize = "65px";
    } 
    else {
        RoundRes.textContent = "YOU LOSE!!!";
        CSel.textContent = " ";
        RoundRes.style.fontSize = "65px";
        resback.style.backgroundColor = "red";
    }

    rounds = 1;
    Human = 0;
    Comp = 0;
}


