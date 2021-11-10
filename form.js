let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

function validate(){
    if(email.value=="" || pwd.value==""){
        alert("The fields cannot be empty");
        return false;
    }
    else{
        // alert("the validation is proper");
        return true;
      
    }

}