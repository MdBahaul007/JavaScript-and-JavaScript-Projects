let location1 = document.getElementById("location");
let tempIcon= document.getElementById("temp-icon");
let tempValue= document.getElementById("temp-value");
let climate= document.getElementById("climate");
let date=document.getElementById("date")

let iconFile;

//we will trigger the this fn as soon as user come on page this fn will basically laod the wether detail based on cordinates. We can fetch weather using city name etc but here we are using latitude and longitude.
window.addEventListener("load",()=>{
    let long;
    let lat;
    let today=new Date();
    // this will ask user to give location permission
    // getCurrentPosition will get the user current cordinates
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy= 'https://cors-anywhere.herokuapp.com/'
            const api=//api is hidden

            fetch(api).then((response)=>{
                return response.json();

            }).then(data=>{
                console.log(data);
                //this is object destructuring read about it from vlog
                const {name}= data;
                const {feels_like}=data.main;
                const {id,main}=data.weather[0];

                location1.textContent=name;
                climate.textContent=main;
                tempValue.textContent=Math.round(feels_like-273);

                date.textContent=today;

            })


        })

    } 

})