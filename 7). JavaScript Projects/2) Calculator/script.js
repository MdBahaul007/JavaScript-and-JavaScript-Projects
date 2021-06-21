function getHistory(){
    return document.querySelector(".history-value").innerText;
}
// alert(getHistory());

function printHistory(num){
    return document.querySelector(".history-value").innerText=num; /*this will print what we have passed in num what */
}
// alert(printHistory("9*9+81"));

function getOutput(){
    return document.querySelector(".output-value").innerText;
}
// alert(getOutput());

function printOutput(num){
    if(num==""){  
        document.getElementsByClassName(".output-value").innerText=num;
    }
    else{
        return document.getElementsByClassName(".output-value").innerText=getFormattedNumber(num);
    }

    }
  

/*to seprate number with comma like 999,123,111 we are using this function*/
function getFormattedNumber(num){
    var n = Number(num);
    var value=n.toLocaleString("en");
    return value;
}

// alert(printOutput("10999"));

//to convert comma seprated number into original format
function reverseNumberFormat(num)
{
    return Number(num.replace(/,/g,''));
    // it will replace comma with empty space

}


// alert(reverseNumberFormat("19977"))

//when we click on the operator we can retrive which operator we have clicked
let operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        alert("The operator clicked is "+ this.id);
    })
}

//when we click on the nuber we can retrive which operator we have clicked
let number=document.getElementsByClassName("number");
for(let i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        // to print the number on above screen when we click it.
        // alert("The number clicked is "+this.id);
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){  //if o/p is number
            output=output.this.id;
            printOutput(output);
        }

    });
}


