function validateForm() {
      var name = document.getElementById("name").value;
      var age = document.getElementById("age").value;
      var address = document.getElementById("address").value;
      var email = document.getElementById("email").value;

      if(name == ""){
            alert("Name is required")
            return false;
      }

      if(age == 0){
            alert("Age is required")
            return false;
      } else if(age < 1){
            alert("Age must be not be 0 or less than zero")
            return false;
      }

      if(address == ""){
            alert("Address is required")
            return false;
      }

      if(email == ""){
            alert("E-mail is required")
            return false;
      }else if(!email.includes("@")) {
            alert("Invalid E-mail address")
            return false;
      }

      return true
}

function showData(){
      var peopleList;
      if(localStorage.getItem("peopleList") == null) {
            peopleList = [];

      }
      else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"))
      }

      var html = "";

      peopleList.forEach(function (element, index){
            html += "<tr>";
            html += "<td>" + element.name + "</td>";
            html += "<td>" + element.age + "</td>";
            html += "<td>" + element.address + "</td>";
            html += "<td>" + element.email + "</td>";
            html += '<td><button onclick="deleteData('+ index +')" class="btn btn-danger">Delete</button> <button onclick="deleteData('+ index +')" class="btn btn-warning">Edit</button></td>'
      })
}