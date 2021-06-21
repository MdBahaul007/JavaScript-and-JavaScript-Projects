// $(document).ready(function(){
//     init()



//     function init(){
//         var url="https://api.covid19api.com/summary";
//         $.get(url,function(data){
//             console.log(data);
//         })
//     }
// })

getData();

function getData(){
    url="https://api.covid19api.com/summary"
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data.Global); //will only give data in global obj.

        data=`
        <td>${data.Global.TotalConfirmed}</td>
        <td>${data.Global.TotalDeaths}</td>
        <td>${data.Global.TotalRecovered}</td>
        `

        $("#data").html(data);



        

    })

}
