

function doLogin () {
  var username = document.getElementById("username").value;
  var psw = document.getElementById("password").value;
  if(username == || psw == ""){
      alert("username e password obbligatori");
  }
}
function doLogin (event) {

var username = document.getElementById("username").value; var psw = document.getElementById("password").value;

if (username == "" || psw == "") {

alert("Username and password are mandatory.");

} else {

fetch("https://www.cacciaapi.altervista.org/login.php/loginIpad", {

method: "POST"

headers: {

"Content-Type": "application/json",

},

body: JSON.stringify({

"username": username,

"password": psw

})
