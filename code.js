
function getComputerChoice(min,max){
    let computerPlay = Math.floor(Math.random() * (max - min + 1) + min);
    return choice(computerPlay)
};

function getHumanChoice(){
    let humanChoice = prompt("Elige un numero siendo 1 Papel 2 piedra y 3 tijeras");

    return (choice(humanChoice))
};

function choice(choice){
    if (choice == 1) choice = "Papel"
    else if (choice == 2) choice = "Piedra"
    else choice = "Tijera";

    return choice;
}


function playGame(){
    let computerScore = 0;
    let humanScore = 0; 
    let round = 1;

    for (let i = round; i <= 5; i++) {
        round = i
        console.log("Ronda numero " + round)
        console.log("El marcador es " + humanScore + " - " + computerScore) 
        console.log("")
        playRound()
    }
  
    if(humanScore > computerScore){
        console.log("El ganador eres tu")
    }else console.log("Gana la maquina!")

    function playRound(){
         let humanChoice = getHumanChoice();
         let computerChoice = getComputerChoice(1,3);
        
        if (humanChoice === computerChoice){
            console.log("Es un empate! " + humanChoice + " " + computerChoice);
            playRound();
        }else if(humanChoice == "Piedra" && computerChoice == "Tijera" || humanChoice == "Tijera" && computerChoice == "Papel" || humanChoice == "Papel" && computerChoice == "Piedra") {
            console.log("Tu ganas! " + humanChoice + " le gana a "+computerChoice );
            humanScore++
        }else{
             console.log("Tu pierdes! " + computerChoice + " le gana a "+humanChoice);
             computerScore++
        }
    }

        

}


playGame()