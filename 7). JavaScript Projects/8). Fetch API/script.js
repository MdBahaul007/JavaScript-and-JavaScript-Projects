btn=document.getElementById("btn");
content=document.getElementById("content");




// function getData(){
//     url="https://jsonplaceholder.typicode.com/todos";
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);    

//     })

// }
// getData()


//post data
function postData(){
    url="https://dummy.restapiexample.com/api/v1/create"
    data='{"name":"test2321","salary":"123","age":"23"}'
    params={
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body:data

    }
    fetch(url).then(response => response.json())
    .then(data=>console.log(data));
}
postData()

