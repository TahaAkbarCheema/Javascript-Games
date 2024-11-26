let message;
let compScore=0;
let playerScore=0;

const result = (playerId, compId) => {
  if (playerId === compId) {
    message = "It's a tie";
 }
   else if (
    (playerId === "rock" && compId === "scissors") ||
    (playerId === "paper" && compId === "rock") ||
    (playerId === "scissors" && compId === "paper")
  )
   {
    message = "Congratulations! You Win!";
    playerScore = playerScore + 1;
  }
   else {
    message = "Too close! Better luck next time.";
    compScore = compScore + 1;
  }
};

const btn = document.querySelectorAll(".choice");
let playerId;
let compId;

btn.forEach((choice) => {
  choice.addEventListener("click", () => {
    playerId = choice.id;
   
    const computer = () => {
      const options = ["rock", "paper", "scissors"];
      compId = options[Math.floor(Math.random() * options.length)];
    };

    computer();

    
    result(playerId, compId);

    const para = document.getElementById("msg");
    para.innerText = message;
    para.style.display = "block"; 

    const computerScore = document.getElementById("computerScore");
    computerScore.innerText = compScore;

    const userScore = document.getElementById("userScore");
    userScore.innerText = playerScore;
  });
});


const reset = document.querySelector(".msgContainer1");
reset.addEventListener("click", ()=>{
    playerScore = 0;
    compScore = 0;
    
    const computerScore = document.getElementById("computerScore");
    computerScore.innerText = compScore;

    const userScore = document.getElementById("userScore");
    userScore.innerText = playerScore;
    
})





















// let message;
// const result = (playerId, compId) => {
     
//     if (playerId === compId) {
//         message = "It's a tie";
        
//     }
//     else if (playerId === "rock" && compId === "scissors") {
//         message ="Congartulations You Wins";
        
//     }
//     else if (playerId === "paper" && compId === "rock") {
//         message =  "Congartulations You Wins";
       
//     }
//     else if (playerId === "scissors" && compId === "paper") {
//          message ="Congartulations You Wins";
       
//     }

//     else if (playerId === "scissors" && compId === "rock") {
//          message ="Too close Better luck next time";
         
//     }
//     else if (playerId === "rock" && compId === "paper") {
//          message ="Too close Better luck next time"
       
//     }
//     else if (playerId === "paper" && compId === "scissors") {
//          message ="Too close Better luck next time"
        
//     }
// }





// let btn = document.querySelectorAll(".choice")
// let playerId;
// let compId;


// let player =()=>{btn.forEach((choice) => {
// choice.addEventListener("click", ()=>{
//     playerId= choice.id;
//     console.log("PlayerChoice  : "+playerId)


    
// function computer () {
//     let options = ["rock", "paper", "scissors"];
//     let id = options[Math.floor(Math.random() * options.length)];
//     compId = id;
//   console.log("CompChoice  : " +id)
  
// }
//  computer()

//  result (playerId, compId)
// })
    
// });


// }


// player()




// let para = document.getElementById("msg1 hide")
// para.innerText=message;