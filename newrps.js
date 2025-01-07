var Human = 0; 
var Comp = 0; 

function CompChoice()
{
    var arr = ["R","P","S"];
    var cmp = Math.floor(Math.random()*3);
    return arr[cmp];
}

function HumanChoice()
{
    var hum = prompt("Input your choice (R/P/S): ");
    return hum;
}

function Round()
{
    HChoice = HumanChoice();
    CChoice = CompChoice();
    console.log("Computer chooses: ",CChoice);

    if (HChoice === CChoice){
        console.log("TIE");
    }
    else if ((HChoice === "R" && CChoice === "P")||(HChoice === "P" && CChoice === "S")||(HChoice === "S" && CChoice === "R")){
        console.log("Comp wins current round");
        Comp++;
    }
    else{
        console.log("You win current round");
        Human++;
    }

    console.log("Your score: ",Human);
    console.log("Comp score: ",Comp);
}

function Game(){
    console.log("Game starts, play for 5 rounds: ");
    for (var i = 0; i < 5; i++){
        Round();
    }
    
    if (Human > Comp){
        console.log("YOU WIN :)");
    }
    else if (Human === Comp){
        console.log("BLOODY STALEMATE!!!!");
    }
    else{
        console.log("YOU LOSE :<");
    }
}

Game(); 
