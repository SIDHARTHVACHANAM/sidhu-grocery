var email = document.getElementById("email");
var eerror = document.getElementById("eerror");
var phno =document.getElementById("phonenumber");
var pherror =document.getElementById("pherror");
var conpwd =document.getElementById("conpassword");
var coerror =document.getElementById("coerror");
var pwd = document.getElementById("Password");
var perror =document.getElementById("perror");
function validate1(){
    var regexp=/^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        eerror.innerHTML = "VALID";
        eerror.style.color = "green";
        return true;
    }
    else{
        eerror.innerHTML = "INVALID";
        eerror.style.color = "red";
        email.style.border = "solid 3px red";
        return false;
    }
}
function validate2(){
    var regexp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if(regexp.test(phno.value)){
        pherror.innerHTML = "VALID";
        pherror.style.color = "green";
        return true;
    }
    else{
        pherror.innerHTML = "INVALID";
        pherror.style.color = "red";
        phno.style.border= "solid 3px red";
        return false;
    }
}
function validate3(){
    var regexp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
    if(regexp.test(pwd.value)){
        perror.innerHTML = "STRONG";
        perror.style.color = "green";
        return true;
    }
    else if(regexp.test(pwd.value.length<8)){
        perror.innerHTML = "MEDIUM";
        perror.style.color = "orange";
        pwd.style.border= "solid 3px orange";
        return false;
        }
    else{
        perror.innerHTML = "POOR";
        perror.style.color = "red";
        pwd.style.border= "solid 3px red";
        return false;
       }
}
function validate(){
    if(pwd.value==conpwd.value){
        coerror.innerHTML = "MATCHED";
        coerror.style.color = "green";
        return true;
    }
    else{
        coerror.innerHTML = "PASSWORD DOES NOT MATCH";
        coerror.style.color = "red";
        conpwd.style.border= "solid 3px red";
        return false;
    }
}