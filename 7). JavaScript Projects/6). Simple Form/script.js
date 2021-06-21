function animatedForm(){
    const arrows=document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow =>{
        arrow.addEventListener('click',()=>{
            const input=arrow.previousElementSibling;
            const parent=arrow.parentElement;
            // console.log(parentArrow);
            const getNextFormElement=parent.nextElementSibling;
            // console.log(getNextFormElement);

            //checking validation
            if(input.type==="text" && userValidate(input)){
                nextSlide(parent,getNextFormElement);
                
            }
            else if(input.type==='email' && validateEmail(input)){
                nextSlide(parent,getNextFormElement);
            }

            else if(input.type==='password' && userValidate(input)){
                nextSlide(parent,getNextFormElement);
            }
    
        });
    });


}

function userValidate(user){
    if(user.value.length<6){
        console.log("Atleast 6 char are reqired");
        error("rgb(189,87,87)");
    }
    else{
        error("rgb(87,189,130)");
        return true;
    }
}
function validateEmail(email) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

  if(String(email).match(reEmail)) {
    alert("Invalid email address");
    return false;
  }

  return true;

}


    


// }

function nextSlide(parent,getNextFormElement){
    parent.classList.add("inactive");//jo prensently active hai wo inactive ho jaigai  
    parent.classList.remove("active");
    getNextFormElement.classList.add("active") //jo nya form aaiga jaise email usko active kr dege.
}


function error(color){
    document.body.style.backgroundColor=color;
}







animatedForm();