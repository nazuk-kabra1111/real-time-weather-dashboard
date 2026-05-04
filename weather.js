const base_url="https://api.openweathermap.org/data/2.5/weather?";
let main_box=document.querySelector(".wtr");
let inp=document.querySelector(".city input");
let btn1=document.querySelector(".btn");
let city=document.querySelector(".citydisp");
let temper=document.querySelector(".temp");
let tmin=document.querySelector(".min");
let tmax=document.querySelector(".max");
let flike=document.querySelector(".fl");
let humi=document.querySelector(".hum2");
let windy=document.querySelector(".win2");
let img=document.querySelector(".res img");
let ch=document.querySelector(".check");
const now=new Date();
const hours=now.getHours();
let k;
if((hours>=19 && hours<=23) || (hours>=0 && hours<=4)){
    main_box.classList.remove("body1");
    main_box.classList.add("body2");
    img.src="moon.png";
    k=1;
}
else{
    main_box.classList.remove("body2");
    main_box.classList.add("body1");
    k=0;
}
btn1.addEventListener("click",async ()=>{
    let inp1=inp.value.toLowerCase();
    let url=`${base_url}q=${inp1}&appid=bc2775834334caa14b5712bb95a80c06&units=metric`;
    let response= await fetch(url);
    let newcity=await response.json();
    if(newcity.cod!==200){
        inp.value="City Not Found";
        return;
    }
    let len=inp1.length;
    city.innerText=inp1.charAt(0).toUpperCase() + inp1.slice(1);
    temper.innerText=newcity.main.temp+"\u00B0";
    tmin.innerText="Temp-min: "+newcity.main.temp_min+"\u00B0";
    tmax.innerText="Temp-max: "+newcity.main.temp_max+"\u00B0";
    flike.innerText="Feels like: "+newcity.main.feels_like+"\u00B0";
    humi.innerText=newcity.main.humidity+"%";
    windy.innerText=newcity.wind.speed+" km/hr";
    let weather=newcity.weather[0].main;
    ch.innerText=weather;
    if(weather==="Clear" && k==1){
        img.src="moon.png";
    }
    else if(weather==="Clouds" && k==1){
        img.src="ncloud.png";
    }
    else if(weather==="Thunderstorm" && k==1){
        img.src="nthunder.png";
    }
    else if(weather==="Haze" && k==1){
        img.src="haze.png";
    }
    else if(weather==="Mist" && k==1){
        img.src="mist.png";
    }

    if(weather==="Clear" && k==0){
        img.src="clear.png";
    }
    else if(weather==="Clouds" && k==0){
        img.src="cloudy.png";
    }
    else if(weather==="Thunderstorm" && k==0){
        img.src="thunderstorm.png";
    }
    else if(weather==="Haze" && k==0){
        img.src="haze.png";
    }
    else if(weather==="Mist" && k==0){
        img.src="mist.png";
    }
})


