

let inputElem = document.querySelector("#cityName");

let searchElem = document.querySelector("#search");

let cityElem = document.querySelector("#city");



let tempElem = document.querySelector("#temp");

let descElem = document.querySelector("#desc");

let humidElem = document.querySelector("#humid")

let windyElem = document.querySelector("#windy")

let weatherImgElem = document.querySelector("#weather-img")

let apiInfo = [];




const apiCall = async(cityName)=>{
   let api = ` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=971129f09ef3f19d667640afe53f1b2b`
   
   try{
    const res = await fetch(api);
    const data = await res.json()
   apiInfo.push(data);
 if(apiInfo[0].cod==404){
    cityElem.innerHTML="City Not Found";
    return;
  }else{
    cityElem.innerHTML=`Weather in ${cityName}`
    
    let kelvin = apiInfo[0].main.temp;  
    let celsius = kelvin - 273.15;
    tempElem.innerHTML = `Feels like ${celsius.toFixed(2)} °C`;
   
    
    descElem.innerHTML=`${apiInfo[0].weather[0].description}`;

    humidElem.innerHTML=`Humidity : ${apiInfo[0].main.humidity}`
    windyElem.innerHTML=`Wind Speed : ${apiInfo[0].wind.speed} km/h`


    const iconCode = apiInfo[0].weather[0].icon;

   const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

     weatherImgElem.src=iconUrl;
    
   }

   
    
    

   }
   catch(error){
    console.log("Got Error while Fetching",error);
    
   }
    

}




searchElem.addEventListener('click',()=>{
    
     
    let cityName = inputElem.value.toLowerCase();
    apiCall(cityName)
    inputElem.value=""
    inputElem.focus()
    
    // console.log(cityName); // here we r getting the input value in console after clicking on the search.
    
   
    
    
})