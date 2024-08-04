function signup(event){
      event.preventDefault();

      var email = document.querySelector("#email");
      var username = document.querySelector("#username");
      var pass = document.querySelector("#password");

      console.log("Email: " + email.value + " UserName: " + username.value + " Senha: " + pass.value);

      // var user = {
      //       email: email,
      //       username: username,
      //       password: pass
      // };

      // var json = JSON.stringify(user);
      // localStorage.setItem(username, json)
      // alert("User added successfully")

}     