const quizData=[
    {
        question:"Virat Kholi Plays?",
        a:"Cricket",
        b:"FoothBall",
        c:"Hockey",
        d:"Chess",
        correct:"a"
    },
    {
        question:"Capital of India?",
        a:"Sydney",
        b:"Washigton DC",
        c:"New Delhi",
        d:"Istanbul",
        correct:"c"
    },
    {
        question:"Olympics 2021 will held in which country?",
        a:"India",
        b:"Australia",
        c:"China",
        d:"Japan",
        correct:"d"
    },
    {
        question:"Computer mouse is?",
        a:"Input Device",
        b:"Output Device",
        c:"Both",
        d:"Can't say",
        correct:"a"
    }
];
const answersEle=document.querySelectorAll(".answer");
const quizheading =document.getElementById("quiz-heading");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const quiz=document.getElementById("quiz");
const submitBTN=document.getElementById("submitBTN");


let currentQuiz=0;
let score=0;
function loadData(){
    deSelectAns();
    const currentQuizData=quizData[currentQuiz];
    quizheading.innerText=currentQuizData.question;
    
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

    // quizQuestion++;
}

function selectAns(){
    
    let answer=undefined;

    answersEle.forEach((answerEle)=>{
        if (answerEle.checked){
            answer=answerEle.id
    


        }
    });
    return answer;

 }
 function deSelectAns(){
    answersEle.forEach((answerEle)=>{
        if (answerEle.checked){
            answerEle.checked=false;


        }
    });


 }

submitBTN.addEventListener('click',()=>{
   
    
    const answer=selectAns();
    if (answer){
        if (answer===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
                loadData();
        
            }
            else{
               quiz.innerHTML=`<h2>Your score is ${score}  out of ${quizData.length}</h2>`
            }
            

    }

})

loadData();
