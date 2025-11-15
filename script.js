

let body=document.querySelector("body");
let missile=document.querySelector("#missile");
let plan=document.querySelector("#imgtage");
let explo=document.querySelector("#explosior");
let btn=document.querySelector("#herobtn");
btn.addEventListener("click",()=>{
alert("you are comform to lunch ")  
plan.style.animation="fly 4s linear 1"
plan.style. visibility = "visible";
missile.style.animation="missile 4s linear 1"
missile.style. visibility = "visible";
explo.style.animation=" explo 4s linear 1"
explo.style.transform="scale(1)"
setTimeout(()=>{
      explo.remove()
},4200)
})


