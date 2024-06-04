let buttons = document.querySelectorAll(".btn");
let humanScore = 0;
let computerScore = 0;

let board = document.querySelector(".results");
let scores = document.createElement("div")
board.appendChild(scores)



buttons.forEach(button => {
    button.addEventListener('click', function(e){
        playRound(e.target.textContent,getComputerChoice(1,3))
    });
});


function getComputerChoice(min,max){
    let computerPlay = Math.floor(Math.random() * (max - min + 1) + min);
    return choice(computerPlay);
};

function choice(choice){
    if (choice == 1) choice = "Papel"
    else if (choice == 2) choice = "Piedra"
    else choice = "Tijera";

    return choice;
}

function playRound(human,computer){
    let scoreBoard = document.querySelector(".marcador");
    scoreBoard.textContent = "";
    
    if(humanScore == 5 || computerScore == 5){
        scores.textContent = "Fin del juego!"
        return
    }

    if (human === computer){
        scoreBoard.textContent = `${human} empata con ${computer}`;
    }
    else if(human == "Piedra" && computer == "Tijera" || human == "Tijera" && computer == "Papel" || human == "Papel" && computer == "Piedra") {
        scoreBoard.textContent = `${human} Gana a ${computer}!!`;
        humanScore++;
    }
    else{
         scoreBoard.textContent = `${computer} Gana a ${human}!!`;
         computerScore++;
    };
    scores.textContent = `El jugador tiene ${humanScore} - La maquina tiene ${computerScore}`

}
