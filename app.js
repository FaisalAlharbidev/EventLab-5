let box= document.getElementById("box")
box.style.backgroundColor = "blue";
box=document.getElementById("box").style.width = "40%";
box=document.getElementById("box").style.height = "30%";
box=box=document.getElementById("box").style.borderRadius = "2%";

let WidthChang=document.getElementById("changWidth")

let HeightChang=document.getElementById("changHeight")

let RadiusChang=document.getElementById("changRadius")

let BgColorChang=document.getElementById("changBgColor")


WidthChang.addEventListener("click", function(){width()});
function width(){
    box.style.width="70%"
}


HeightChang.addEventListener("click", function(){height()});
function height(){
    box.style.height="90%"
}

RadiusChang.addEventListener("click", function(){borderRadius()});
function borderRadius(){
    box.style.height="10%"
}


BgColorChang.addEventListener("click",()=>{    box.style.backgroundColor="blueviolet"
});



{/* <button id="changWidth">تغير العرض</button>
<button id="changHeight">تغير الطول </button>
<button id="changRadius">تغير الحواف</button>
<button id="changBgColor">تغير اللون</button> */}