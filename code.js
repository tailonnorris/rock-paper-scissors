let buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        alert(button.textContent);
    });

});


function getComputerChoice(min,max){
    let computerPlay = Math.floor(Math.random() * (max - min + 1) + min);
    return choice(computerPlay)
};

function choice(choice){
    if (choice == 1) choice = "Papel"
    else if (choice == 2) choice = "Piedra"
    else choice = "Tijera";

    return choice;
}
