var email = document.getElementById("email");
var password = document.getElementById("pwd");


// email validation start

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

// email validation end

// password validation start

function passwordvalidate(passwordinput){
    var rules = document.getElementsByClassName("passwordcheck");
    const eightChar = new RegExp('(?=.{8,})');
    const lowercase = new RegExp('(?=.*[a-z])');
    const uppercase = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    

    if(eightChar.test(passwordinput)==true){
       rules[0].style.color = "springgreen";
       
      
    }
    else{
        rules[0].style.color = "grey";
        flag=0;
        
    }

    if(lowercase.test(passwordinput)==true){
        rules[1].style.color = "springgreen";
        
        
    }
    else{
        rules[1].style.color = "grey";
        flag=0;
        
    }

    if(uppercase.test(passwordinput)==true){
        rules[2].style.color = "springgreen";
        
        
    }
    else{
        rules[2].style.color = "grey";
        flag=0;
        
    }

    if(number.test(passwordinput)==true){
        rules[3].style.color = "springgreen";
        
        
    }
    else{
        rules[3].style.color = "grey";
        flag=0;
        
    }
}

// password validation end

// validation of password strength start
function passwordstrength(passwordinput2){
    var msg = document.getElementById("message");
    var str = document.getElementById("strength");

    if(passwordinput2.length > 0){
        msg.style.display = "block";
        if(passwordinput2.length < 4){
            str.innerHTML = "weak";
            msg.style.color = "red";
            flag=0;
        }
        else if(passwordinput2.length >=4 && passwordinput2.length <8){
            str.innerHTML = "medium";
            msg.style.color = "orange";
            flag=0;
        }
        else if(passwordinput2.length >=8){
            str.innerHTML = "strong";
            msg.style.color = "springgreen";
            flag=1;
        }
    }
    else{
        msg.style.display = "none";
    }
}
// validation of password strength end



// validate function start
function validate(){
    if(flag==1){
        return true;
    }
    else{
        return false;
    }
}
// validate function end

    