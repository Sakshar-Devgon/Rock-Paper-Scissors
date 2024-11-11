let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score")

const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    // rock , paper , scissors 
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const showWinner = (userwin) =>{
    if(userwin){
         userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = "YOu Win!";
       
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = "You Lose";
       
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    // generate computer choice -> modular
    const compChoice = genCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice == compChoice){
        //draw 
        console.log("Draw");
        msg.innerText = "Draw.Play Again!";
    }else{
        let userwin = true;
        if(userChoice == "rock"){
            userwin = compChoice === "paper"? false : true;
        } else if( userChoice === "paper"){
            userwin = compChoice === "scissors" ? false : true;
        }else{
            userwin = compChoice === "rock"? false : true;
        }
        showWinner(userwin);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('user-score').textContent = '0';
    document.getElementById('comp-score').textContent = '0';
    document.getElementById('msg').textContent = 'Play your move!';
});
