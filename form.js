var email = document.getElementById("email");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var pwd = document.getElementById("pwd");

// const form=document.getElementsByClassName("loginclass");

// form.addEventListener('submit',function(event){
//     // event.preventDefault();
//     if(validate()==false || passCheck()==false || passWordstrength()==false){
//         return false;
//     }
//     else{
//         return true;
//     }
// }

function validate(){
    // if(email.value=="" || pwd.value==""){
    //     alert("The fields cannot be empty");
    //     return false;
    // }
    // else{
    //     // alert("the validation is proper");
    //     return true;
      
    // }

    let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error1.innerHTML="Email is valid";
        error1.style.visibility="visible";
        error1.style.color="green";
        return true;
    }
    else{
        error1.innerHTML="Invalid email";
        error1.style.visibility="visible";
        error1.style.color="red";
        return false;
    }
}

function passCheck(data){
    var password = document.getElementsByClassName("passwordcheck");
    const eightChar = new RegExp('(?=.{8,})');
    const lowercase = new RegExp('(?=.*[a-z])');
    const uppercase = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    

    if(eightChar.test(data)){
       password[0].style.color = "springgreen";
       
      
    }
    else{
        password[0].style.color = "grey";
        return false;
        
    }

    if(lowercase.test(data)){
        password[1].style.color = "springgreen";
        
        
    }
    else{
        password[1].style.color = "grey";
        return false;
        
    }

    if(uppercase.test(data)){
        password[2].style.color = "springgreen";
        
        
    }
    else{
        password[2].style.color = "grey";
        return false;
        
    }

    if(number.test(data)){
        password[3].style.color = "springgreen";
        
        
    }
    else{
        password[3].style.color = "grey";
        return false;
        
    }

    // if(eightChar.test(data)==false || lowercase.test(data)==false || uppercase.test(data)==false || number.test(data)==false)
    // {
    //     return false;
    // }
    // else{
    //     return true;
    // }

}

function passWordstrength(data2){
    var msg = document.getElementById("message");
    var str = document.getElementById("strength");

    if(data2.length > 0){
        msg.style.display = "block";
        if(data2.length < 4){
            str.innerHTML = "weak";
            msg.style.color = "red";
            return false;
        }
        else if(data2.length >=4 && data2.length <8){
            str.innerHTML = "medium";
            msg.style.color = "orange";
            return false;
        }
        else if(data2.length >=8){
            str.innerHTML = "strong";
            msg.style.color = "springgreen";
            return true;
        }
    }
    else{
        msg.style.display = "none";
    }
}

function validation(){
    if( validate()==false || passCheck()==false || passWordstrength()==false)
    {
        return false;
    }
    else{
        return true;
    }
}

    