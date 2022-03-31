import { navbar } from "./Components/Navbar_ayaz.js";
document.querySelector("#navbar-container").innerHTML= navbar()


import { footer } from "./Components/footer_ayaz.js";
document.querySelector("#footerContainer").innerHTML= footer()













document.querySelector("#optionIcon").addEventListener("click",opensideBar)
function opensideBar(){

   var sidebar= document.querySelector("#sidebar_container")
   sidebar.style.display="flex"

}





document.querySelector("#optionforcloseside").addEventListener("click",closesideBar)
function closesideBar(){

    var sidebar= document.querySelector("#sidebar_container")
   sidebar.style.display="none"
   
}





document.querySelector("#myoptionredirect").addEventListener("change",mynewfun)

function mynewfun(){
   window.location="internship.html"

  
}

document.querySelector("#myoptionredirect2").addEventListener("change",mynewfun2)

function mynewfun2(){
   window.location="internship.html"

  
}
document.querySelector("#myoptionredirect3").addEventListener("change",mynewfun3)

function mynewfun3(){
   window.location="internship.html"

  
}