var email = document.getElementById("email");
var password = document.getElementById("password");


// email validation starts

function emailvalidate(emailinput){
    let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(emailinput)==true){
        error1.innerHTML = "Email is valid";
        error1.style.visibility = "visible";
        error1.style.color = "green";
        // return true;
        flag=1;
    }
    else{
        error1.innerHTML = "Email is invalid";
        error1.style.visibility = "visible";
        error1.style.color = "red";
        // return false;
        flag =0;
    }

}

// email validation ends


// password validation starts

function passwordvalidate(passwordinput){
    var rules = document.getElementsByClassName("passwordcheck");
    const lowercase = new RegExp('(?=.*[a-z])');
    const uppercase = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const eightChar = new RegExp('(?=.{8,})');
    
    if(eightChar.test(passwordinput)==true){
        rules[0].style.color = "green";
    }
    else{
        rules[0].style.color = "red";
        // return false;
        flag=0;
    }

    if(lowercase.test(passwordinput)==true){
        rules[1].style.color = "green";
    }
    else{
        rules[1].style.color = "red";
        // return false;
        flag=0;
    }

    if(uppercase.test(passwordinput)==true){
        rules[2].style.color = "green";
    }
    else{
        rules[2].style.color = "red";
        // return false;
        flag=0;
    }

    if(number.test(passwordinput)==true){
        rules[3].style.color = "green";
    }
    else{
        rules[3].style.color = "red";
        // return false;
        flag=0;
    }


}

// password strength evaluation starts

function passwordstrength(passwordinput2){
    var msg = document.getElementById("message");
    var str = document.getElementById("strength");

    if(passwordinput2.length > 0){
        msg.style.display="block";
        if(passwordinput2.length < 4){
            str.innerHTML = "weak";
            msg.style.color = "red";
            return false;
        }
        else if(passwordinput2.length >=4 && passwordinput2.length <8){
            str.innerHTML = "medium";
            msg.style.color="orange";
            return false;
        }
        else if(passwordinput2.length >=8){
            str.innerHTML = "strong";
            msg.style.color = "green";
            return true;
        }
    }
    else{
        msg.innerHTML = "";
    }
}

// password strength evaluation ends



//confirm password validation starts

var flag=1;  // 1 -> no error | 0 -> yes error
function confirmpasswordvalidate(pwdinput3){
    if(pwdinput3.length > 0){
        error4.style.display = "block";
        if(pwdinput3 != password.value){
                document.getElementById("error4").innerText = "Passwords does not match";
                flag=0;
        }
        else{
                document.getElementById("error4").innerText = "";
                flag=1;
        }
    }
    else{
        document.getElementById("error4").innerText = "Please enter Confirm Password";
        flag=0;
    }

}

// validate function starts

function validate(){
    if(flag==1){
        return true;
    }
    else{
        return false;
    }
}

// validate function ends


// confirm password validation ends


// phone number validation starts

function phonenovalidate(phonenoinput){
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phonenoinput.match(phoneno)){
        document.getElementById("error2").innerText = "Valid phone number";
        error2.style.color = "green";
        flag=1;
    }
    else{
        document.getElementById("error2").innerText = "Not a valid phone number";
        error2.style.color = 'red';
        flag=0;
    }

}
