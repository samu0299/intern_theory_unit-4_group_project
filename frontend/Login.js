document.querySelector("#button").addEventListener("click",login);
async function login(event) {
  event.preventDefault()
  try {
      let loginData = {
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value
      };
      loginData = JSON.stringify(loginData);

      let res = await fetch("http://localhost:5600/login",
          {
              method: "POST",
              body: loginData,
              headers: {
                  "Content-Type": "application/json",
              },
          }
      );
      let user = await res.json();

      if (user.status == true) {
          alert("Login Success !")
          window.location.href = "Landing_Page_Ayaz.html";
      } else {
          alert("Email or Password is incorrect !")
      };

      console.log("user:", user);

  } catch (error) {

      console.log("error:", error);
      alert("Email or Password is incorrect !")
  }
}

  import { navbar } from "./Components/Navbar_ayaz.js";
document.querySelector("#navbar-container").innerHTML= navbar()




import { footer } from "./Components/footer_ayaz.js";
document.querySelector("#footerContainer").innerHTML= footer()