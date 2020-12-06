var login = document.getElementById("login");
var register = document.getElementById("register");

function loginfunc(e) {
   register.style.display = "none";
   login.style.display = "block";
   console.log("test");
   e.prevent.default();
}
function regfunc(e) {
    register.style.display = "block";
    login.style.display = "none";
    console.log("test2");
    e.prevent.default();
 }
