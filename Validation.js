let firstName = document.getElementById("firstName");
let middleName = document.getElementById("middleName");
let lastName = document.getElementById("lastName");
let emailId = document.getElementById("email-id");
let phoneNo = document.getElementById("phone-no");




 document.getElementById("firstName").addEventListener("keyup", function() {
    firstName = document.getElementById("firstName").value;
    if (firstName.length == 0){
        document.getElementById("first-error").classList.remove("no-error");
        document.getElementById("first-error").classList.add("error");       
    }
    else{
        document.getElementById("name-display").innerHTML = firstName;
        document.getElementById("first-error").classList.remove("error");
        document.getElementById("first-error").classList.add("no-error");
    }
   
  });

  document.getElementById("middleName").addEventListener("keyup", function() {
    middleName = document.getElementById("middleName").value;
    if (middleName.length == 0){
        document.getElementById("middle-error").classList.remove("no-error");
        document.getElementById("middle-error").classList.add("error");
    }else{
        document.getElementById("name-display").innerHTML = firstName +" "+  middleName;
        document.getElementById("middle-error").classList.remove("error");
        document.getElementById("middle-error").classList.add("no-error");
    }
   
  });
  document.getElementById("lastName").addEventListener("keyup", function() {
    lastName = document.getElementById("lastName").value;
    if(lastName == 0){
        document.getElementById("last-error").classList.remove("no-error");
        document.getElementById("last-error").classList.add("error");
    }
    else{
        document.getElementById("name-display").innerHTML = firstName +" "+  middleName + " " + lastName;
        document.getElementById("last-error").classList.remove("error");
        document.getElementById("last-error").classList.add("no-error");
    }
   
  });


//   function checkError( index ){
//     var arr = ['"first-error"','"middle-error"','"last-error"'];
//     var showclass = arr[index];
//     document.getElementById(arr[index]).classList.remove("no-error");
//     document.getElementById(arr[index]).classList.add("error");
// }

