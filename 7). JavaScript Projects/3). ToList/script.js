const inputFeild = document.getElementById('inputFeild');
const clickButton =document.getElementById('toButton');
const todoContainer=document.getElementById('todoContainer')


clickButton.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.innerText=inputFeild.value;
    todoContainer.appendChild(paragraph);
    paragraph.classList.add('paraStyle');
    paragraph.style.cursor='pointer';
    //to empty input box after we click on +
    inputFeild.value="";
    //now we we click on para text first line cut should come
    paragraph.addEventListener('click',function(){
        // paragraph.style.cursor='pointer';
        paragraph.style.textDecoration='line-through';
      
    

    })
    paragraph.addEventListener('dblclick',function(){
        // paragraph.style.cursor='pointer';
    todoContainer.removeChild(paragraph);
    
    })
  
    
})








// const inputFeild = document.getElementById("inputFeild");
// const clickButton=document.getElementById("toButton");
// const todoContainer=document.getElementById("todoContainer");

// clickButton.addEventListener('click',function(){
//     var paragraph=document.createElement('p');
//     paragraph.innerText=inputFeild.value;
   
//     todoContainer.appendChild(paragraph);
//     paragraph.classList.add('paraStyle');
// })
