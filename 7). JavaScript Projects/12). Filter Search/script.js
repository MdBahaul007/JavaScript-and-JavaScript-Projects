
const search =()=>{

  let inputText=document.getElementById('input').value.toUpperCase();

  let table=document.getElementById('table');

  //inorder to fetch table first coloum
  let tr=table.getElementsByTagName('tr');

  for(let i=0;i<tr.length;i++){
      let td=tr[i].getElementsByTagName('td')[0];

      if(td){
          let textValue=td.textContent || td.innerHTML;

          if(textValue.toUpperCase().indexOf(inputText)>-1){
              tr[i].style.display="";


          }
          else{
              tr[i].style.display="none";
          }
          
      }
  }

}



search()
// userInput.addEventListener('input',startMatch);

// function startMatch(){
//     console.log(userInput.value);
// }
