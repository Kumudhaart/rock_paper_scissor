const closeBtn=document.querySelector('.close-btn');
const ruleBox=document.querySelector('.rule-box');
const rulesBtn=document.querySelector('.rule-btn');
const rock=document.querySelector('.rock');
const paper=document.querySelector('.paper');
const scissor=document.querySelector('.scissor');
const userPick=document.querySelector('#user');
const computerPick=document.querySelector('#computer');
const userImg=document.querySelector('#userimg');
const computerImg=document.querySelector('#computerimg');
const resultSection=document.querySelector(".result-section");
const gameSection=document.querySelector(".main");
const result=document.querySelector('#winner');
const nextBtn=document.querySelector('.next');
const userScoreValue=document.querySelector("#user_score");
const computerScoreValue=document.querySelector("#computer_score");
const playAgain=document.querySelector('#play');
const userwiningIndicator = document.querySelector("#userwiningIndicator");
const computerwiningIndicator = document.querySelector("#computerwiningIndicator");


let userScore=localStorage.getItem("userScore") || 0;
let computerScore=localStorage.getItem("computerScore") || 0;
let userChoice;
let computerChoice;

userScoreValue.innerHTML=userScore;
computerScoreValue.innerHTML=computerScore;

rulesBtn.addEventListener('click',()=>{
    ruleBox.classList.toggle('close-rule');
});

closeBtn.addEventListener('click',()=>{
    ruleBox.classList.toggle('close-rule');
});


const generateChoice=()=>{
    const choices=['rock','paper','scissor'];
    const randomIndex=Math.floor(Math.random()* choices.length);
    return choices[randomIndex];
}

const userWins=()=>{
    userScore++;
    result.textContent="YOU WIN";
    nextBtn.style.display="block";
    localStorage.setItem("userScore",userScore);
    userScoreValue.textContent=userScore;
    userwiningIndicator.style.display = "flex";

}

window.onload = function () {
    reset();
  };

const computerWins=()=>{
    computerScore++;
    result.textContent="YOU LOST";
    nextBtn.style.display="none";
    localStorage.setItem("computerScore",computerScore);
    computerScoreValue.textContent=computerScore;
    computerwiningIndicator.style.display = "flex";

}

const tieUp=()=>{
    result.textContent="TIE UP";
    nextBtn.style.display="none";
    playAgain.textContent="REPLAY";
}

const reset=()=>{
    resultSection.style.display="none";
    gameSection.style.display="grid";
    userPick.classList.remove(userChoice);
    userImg.src='';
    computerPick.classList.remove(computerChoice);
    computerImg.src='';
    userwiningIndicator.style.display = "none";
    computerwiningIndicator.style.display = "none";
    playAgain.style.display=none;
}
rock.addEventListener('click',()=>{
    console.log(rock);
    userChoice=rock.dataset.value;
    console.log(userChoice);
    userPick.classList.add(userChoice);
    userImg.src='images/'+userChoice+'.png';

    resultSection.style.display="block";
    gameSection.style.display="none";
    
    computerChoice=generateChoice();
    computerPick.classList.add(computerChoice);
    computerImg.src='images/'+computerChoice+'.png';

    if(userChoice==='rock' && computerChoice==='scissor'){
        userWins();
    }else if(userChoice===computerChoice){
        tieUp();
    }else{
        computerWins()
    }
  
});

scissor.addEventListener('click',()=>{
    console.log(rock);
    userChoice=scissor.dataset.value;
    console.log(userChoice);
    userPick.classList.add(userChoice);
    userImg.src='images/'+userChoice+'.png';

    resultSection.style.display="block";
    gameSection.style.display="none";
    
    computerChoice=generateChoice();
    computerPick.classList.add(computerChoice);
    computerImg.src='images/'+computerChoice+'.png';

    if(userChoice==='scissor' && computerChoice==='paper'){
        userWins();
    }else if(userChoice===computerChoice){
        tieUp();
    }else{
        computerWins()
    }
  
});

paper.addEventListener('click',()=>{
    console.log(rock);
    userChoice=paper.dataset.value;
    console.log(userChoice);
    userPick.classList.add(userChoice);
    userImg.src='images/'+userChoice+'.png';

    resultSection.style.display="block";
    gameSection.style.display="none";
    
    computerChoice=generateChoice();
    computerPick.classList.add(computerChoice);
    computerImg.src='images/'+computerChoice+'.png';

    if(userChoice==='paper' && computerChoice==='rock'){
        userWins();
    }else if(userChoice===computerChoice){
        tieUp();
    }else{
        computerWins()
    }
  
});

playAgain.addEventListener('click',()=>{
    reset();
})


