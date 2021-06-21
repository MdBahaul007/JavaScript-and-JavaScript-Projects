window.addEventListener('load',init);
let score=0;
let time=6;
let isPlaying="";
let prev_score=0;


const word=document.getElementById("word");
const getInputText=document.getElementById("input-text");
const timeLeft=document.getElementById("timeLeft");
const scoreHtml=document.getElementById("scoreHtml");
const message=document.getElementById("message");
const topSecCounter=document.getElementById("topSecCounter");
// const prevScore=document.getElementById("prevScore");

function init(){
    console.log("Game Loaded!!!")
    // calling showWord fn as soon as the program start.
    // showWord()
    getData();


    //to match the word with input word
    


    //Checking the count down every sec so inordr to check 5 sec of game is over or not
    setInterval(countDown,1000);

    //game status check krega 50 hr milisec me check krta rhega 
    setInterval(statusGame,50);

}
//to get word from API
function getData(){
    api="http://localhost:3000/wordArray";
    fetch(api).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        function showWord1(){

            const randomIndex=Math.floor(Math.random() *data.length); 

            word.innerHTML=data[randomIndex];
            
            
        
        }
        
        showWord1();

        //to check if the input word matches with displayed word.
        getInputText.addEventListener('input',startMatch);

        function startMatch(){
            if(matchedWord()){
                // console.log("matched");
                isPlaying=true;
                time=6;
                getInputText.value='';
                score++;
               
            



            }
            scoreHtml.innerHTML=score;
            }
       
       
        
        function matchedWord(){
            if(getInputText.value===word.innerHTML){
                message.innerHTML="correct";
                return true;
            }
            else{
                message.innerHTML="";
                return false;
            }
            
        }
    })
    
   
    
}
function countDown(){
    if(time>0){
        time--;
        console.log(time);
    }
    else if(time===0){
        isPlaying=false;

    }
    timeLeft.innerHTML=time;
}

function statusGame(){
    if(!isPlaying && time===0){
        message.innerHTML="Game Over!!"
        score=0;
        return true;


        ///to reeset score
    
        // scoreHtml.innerHTML=0;
        // setTimeout(function(){
        //     window.location.reload(1);
        //  }, 5000);
        // console.log(score);
    


    }
}




wordArray=["punch",
    "rapid", 
    "rapidly",
    "request",
    "responsible",
    "responsive",
    "review",
    "the same",
    "schedule",
    "serious, seriously, seriousness",
    "should",
    "shout",
    "sight",
    "similar",
    "similarity",
    "solid",
    "solve", 
    "solution",
    "song",
    "sing",
    "sort",
    "sufficient",
    "insufficient",
    "translate", 
    "translator",
    "translation",
    "unique",
    "raise"];


