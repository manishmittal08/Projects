let userseq=[];
let gameseq=[];
let btns=["blue","yellow","red","violet"];
let started=false;
let level=0;
let score =0;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    };
});
let h3=document.querySelector("h3");
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level is ${level}`;
    let idx=Math.floor(Math.random()*4);
    let randclr=btns[idx];
    let randbtn=document.querySelector(`.${randclr}`);
    gameflash(randbtn);
    gameseq.push(randclr);
    console.log(gameseq);
}
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },1000);
}
function userflash(btn){
    btn.classList.add("green");
    setTimeout(function() {
        btn.classList.remove("green");
    },500);
}
function btnpress(){
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    console.log(userseq);
    check(userseq.length-1);
}
let all=document.querySelectorAll(".div");
for(btn of all){
    btn.addEventListener("click",btnpress);
}
function check(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup(),1500);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="bisque";
        },2000);
        if(score<level){
            score=level;
        }
        h3.innerHTML=`Game Over! Your score was <b>${level}</b>and Hishest score is <b>${score} <br> Press any key to re-start.`;
        reset();
    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}