let userscore = 0;
let compscore = 0;

const results = document.getElementById("results");
const score = document.getElementById("score");
    
    function getCompChoice() {
      let random = Math.floor(Math.random() * 3);

      if(random === 0) return "rock";
      if(random === 1) return "paper";
      return "scissors";
    }
  
   
  function playRound(playerSelection) {
    const compSelection = getCompChoice();

    if(playerSelection === compSelection) {
        results.textContent = `Tie! you both chose ${playerSelection}`;
    }
    else if (
        (playerSelection === "rock" && compSelection === "scissors") ||
        (playerSelection === "paper" && compSelection === "rock") ||
        (playerSelection === "scissors" && compSelection === "paper")
     ) {
        userscore++;
        results.textContent = `you win! ${playerSelection} beats ${compSelection}`;
      }
     
     else {
     compscore++;
     results.textContent = `you lose! ${compSelection} beats ${playerSelection}`;
    }

    score.textContent = `Player: ${userscore} | computer: ${compscore}`;

    if(userscore === 5 || compscore === 5) {
        if(userscore > compscore){
            results.textContent = "you won the game!";
        }
        else {
            results.textContent = "computer won the game!";
        }

        userscore = 0;
        compscore = 0;

        score.textContent = `Player: ${userscore} | computer: ${compscore}`;

    }

  }
document.getElementById("rock").addEventListener("click" , () => playRound("rock"));
document.getElementById("paper").addEventListener("click" , () => playRound("paper"));
document.getElementById("scissors").addEventListener("click" , () => playRound("scissors"));
