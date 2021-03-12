var login = document.getElementById("login");
var register = document.getElementById("register");

function loginfunc(e) {
   register.style.display = "none";
   login.style.display = "block";
   console.log("test");
   document.getElementById("login-out").style.display = "none";
   
   document.getElementById("register-out").style.display = "block";
  
}
function regfunc(e) {
    register.style.display = "block";
    login.style.display = "none";
    console.log("test2");
    document.getElementById("login-out").style.display = "block";
   document.getElementById("register-out").style.display = "none";

    
 }

 