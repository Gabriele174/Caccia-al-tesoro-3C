function doLogin (d) {
  var username = document.getElementById("username").value;
  var psw = document.getElementById("password").value;
  if(username == "" || psw == "")   {
      alert("username e password obbligatori");
  }
  else {
          fetch('https://www.cacciaapi.altervista.org/login.php/loginIpad', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  "exampleInputUsername": username,
                  "exampleInputPassword": password
              })
          })
          .then(response => responsive.json())
          .then(data => console.log(data))
          .catch((error) =>{
              console.error('Error:', error);
          });
      }
}
