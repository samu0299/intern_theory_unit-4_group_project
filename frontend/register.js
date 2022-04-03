document.querySelector("#submitId").addEventListener("click", register);


    async function register(event) {
        event.preventDefault();
        try {
            let registerData = {
              user: document.querySelector("#firstname").value,
               number: document.querySelector("#mobile").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            };

            registerData = JSON.stringify(registerData);

            let res = await fetch("http://localhost:5600/register", {
                method: "POST",
                body: registerData,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            let user = await res.json();

            if(user.status == true){
                alert("Registration Success !")
                window.location.href = "login.html";
            }else{
                alert("Email already exist !")
            };

            console.log("user:", user);
        } catch (error) {
            console.log("error:", error);
            
        }
    }
// var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
// function CONTINUE(event) {
//   event.preventDefault()
//   var email = document.querySelector("#email").value;
//   var password = document.querySelector("#password").value;
//   var user = document.querySelector("#firstname").value;
//   var mobile = document.querySelector("#mobile").value;

//   var userCred = {
//     emailAdd: email,
//     pass: password,
//     userName: user,
//     mobile: mobile,
//   };
//   userData.push(userCred);
//   localStorage.setItem("userDatabase", JSON.stringify(userData));
  
// }
//  document.querySelector("#submitId").addEventListener("click", function () {
//    alert("Succesfully Registered")
//         window.location.href = "login.html"
//     })






    import { navbar } from "./Components/Navbar_ayaz.js";
    document.querySelector("#navbar-container").innerHTML= navbar()
    
    
    
    
    import { footer } from "./Components/footer_ayaz.js";
    document.querySelector("#footerContainer").innerHTML= footer()