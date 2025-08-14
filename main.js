
//prints user a welcome message
function welcomeMessage()
{
console.log("hello world, Welcome to: !")
console.log("ROCK PAPER SCISSORS GAME!!!")
}
        

//creatfunction for computer choice **use math.random functin 
//random choice will be from 0 to .99, future update range will be different 
//three choices, .33,.66,and .99
//for testing purposes, ouput computer choice


//create function for users choice, using prompt ask user for their input
//task assumes user input will be correct, i will use a while loop in case of typo
// double check it matches the options if not, then let user know
// and add option of transformin answer regardless if its capitalized differently, as
// long as wording is correct, it will continue 
//be sure to return the user's and computer answer
// outside on the global scope, set 2 variables and initialize to 0 for future use when keeping score

//create function for 1 round, it will two paramaters: humanChoice and computerChoice
//using if statement first double check for tie and output a message if its a tie
//next either use computer's or user's choice to determine the winner,
//for example. humans/computer options = rock beats paper, paper beats rock, scissor beats paper 
//this part is what outputs the winning message, use ` $(variable)` to make it cleaner
//before printing the message, make sure to increment whichever option for winning score, 

//for this ill use human choice for ex humanChoice === "rock" && computerChoice === "scissor"...etc

//else output the winning message for the computer choice and increment their score

// now using a for loop, write a function called playgame that runs 5 times, 

//all code should be written at this point and all left to do is call them correctly inside this function
function getComputerChoice() {
    let randomChoice = Math.random();
    let computerChoice;

    if (randomChoice < 0.33) {
        computerChoice = "rock";
    } else if (randomChoice < 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }

    console.log("Computer chose " + computerChoice);
    return computerChoice;
}


function getHumanChoice() {
    let humanChoice = prompt("Enter a choice: rock, paper, or scissor").toLowerCase();
    //ensure it transforms answer to lower case, must be correct or else error

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor") {
        console.log("Sorry, choice is incorrect. Choose again :)");
        humanChoice = prompt("Enter a choice: rock, paper, or scissor").toLowerCase();
    }

    console.log("User's choice is " + humanChoice);
    return humanChoice;
}


let humanScore = 0, computerScore = 0;


function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) 
        {
            console.log("It's a tie! Both chose " + humanChoice);
        
        } 
    else if 
        (
            (humanChoice === "rock" && computerChoice === "scissor") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissor" && computerChoice === "paper")
        ) 
        {
            humanScore++;
            console.log(`human wins! ${humanChoice} beats ${computerChoice}`);
        } 
    else 
        {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }

        console.log(`Scores => You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame(){

    //call welcome message;
    welcomeMessage();

    //for loop 
    for (let i = 1; i <= 5; i++){
        
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        //calling playround function
        playRound(humanChoice,computerChoice);

        //output a final score message
        console.log(`final score Human: ${humanScore} ----- Computer: ${computerScore}`);
        console.log("____Next round____")
    }
}

playGame();
// this is for 1 round, use this for the playgame of 5 rounds
// welcomeMessage();

// let computerChoice = getComputerChoice();
// let humanChoice = getHumanChoice();

// playRound(humanChoice, computerChoice);



