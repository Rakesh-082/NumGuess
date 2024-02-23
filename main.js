const containerEl = document.querySelector(".container");
const btnPlayEl = document.querySelector(".btn_again");
const btnCheckEl = document.querySelector(".btn_check");
const hideNumEl = document.querySelector(".hide_num");
const msgEl = document.querySelector(".message");
const inputNumEl = document.querySelector(".input_number");
const highScoreEl = document.querySelector(".high_score");
const scoreEl = document.querySelector(".score");

//generate Random number from 1 to 20;

let secretNum =Math.trunc(Math.random()*20);
let score =20;
let high_score = 0;


console.log(secretNum);
//event to check the hide num

btnCheckEl.addEventListener("click" , () => {
    const guess = Number(inputNumEl.value);
    
    //check empty input

    if (guess){
        

        //not match hide number
        if (guess != secretNum){
            if (score > 1){
                score--;
                scoreEl.textContent=score;

               displayMessage(guess > secretNum ? "Too high" :"Too Low");
                scoreEl.textContent =score;

            }
            else{
               displayMessage("You've loss the game :(");
                containerEl.computedStyleMap.backgroundcolor="#fff";
                scoreEl.textContent =0;
            }
        }
        else{
            hideNumEl.textContent = secretNum;
            hideNumEl.style.width ="50%";
            hideNumEl.style.transition ="all 0.5s ease-in";
            containerEl.style.backgroundcolor ="#e0d8d3";
            displayMessage("Congratulation you've won the game :)");
            
        }
    }
    else{
        displayMessage("Please Enter the number:(");

    }
});


//display Message

const displayMessage =function (message){
    msgEl.textContent=message;
}

//reset the game


btnPlayEl.addEventListener("click", () => {
    score = 20;
    secretNum =Math.floor(Math.random() * 20);
    scoreEl.textContent =score;
    hideNumEl.textContent = "?";
    hideNumEl.style.width= "25%";
    hideNumEl.style.transition ="all 0.5s ease-in";
    inputNumEl.value = "";
    containerEl.style.backgroundcolor ="#ddd";
    displayMessage("Start Guessing.......");
    console.log(secretNum);
})