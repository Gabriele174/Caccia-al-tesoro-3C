

function doLogin () {
  var username = document.getElementById("username").value;
  var psw = document.getElementById("password").value;
  if(username == || psw == ""){
      alert("username e password obbligatori");
  } else {
    fecth (" ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringfy({
        "username": username,
        "password": psw
      })
    })
     then (response => response.json())
    .then(data => {
      console.log(data);
      window.location.href = "game.html"; // Redirectto game.html
    })

    .catch((error) => {
      console.error("Error:". error);
     });
  }
}

  

