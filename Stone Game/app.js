let user=0;
let comp=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");

const gen_comp_choice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const draw=()=>{
    console.log("Game was draw");
    msg.innerText="Game was Draw, Play Again!";
    msg.style.backgroundColor="#081b31";
};

const show_win=(userwin,user_choice,comp_choice)=>{
    if(userwin){
        user++;
        user_score.innerText=user;
        console.log("You wins!");
        msg.innerText=`You Wins!, Your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor="green";
    } else{
        comp++;
        comp_score.innerText=comp;
        console.log("You lose");
        msg.innerText=`You Lose!, Computer ${comp_choice} beats your ${user_choice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(user_choice)=>{
    console.log(user_choice,"was clicked");
    //Generate computer choice
    const comp_choice=gen_comp_choice();
    console.log(comp_choice,"was clicked");

    if(user_choice===comp_choice){
        draw();
    } else{
        let userwin=true;
        if(user_choice==="rock"){
            // scissores, paper
            userwin= comp_choice=== "paper" ? false : true;
        } else if(user_choice==="paper"){
            // rock, scissors
            userwin=comp_choice=== "scissors" ? false : true;
        } else{
            // rock, paper
            userwin=comp_choice==="rock" ? false : true;
        }
        show_win(userwin,user_choice,comp_choice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     const user_choice=choice.getAttribute("id");     
    //  console.log("choice was clicked",user_choice);
     playGame(user_choice);   
    });
})