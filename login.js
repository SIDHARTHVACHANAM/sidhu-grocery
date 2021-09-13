let email = document.getElementById("staticEmail2");
let pwd = document.getElementById("inputPassword2");

function validate(){
   if(email.value==""){
       alert("ENTER YOUR EMAIL ADDRESS");
       email.style.border="2px solid red";
       return false;
   }
    else if(pwd.value==""){
        alert("ENTER YOUR PASSWORD");
        pwd.style.border="2px solid red";
        return false;
    }
    else if(pwd.value.length<=5){
        alert('YOUR PASSWORD IS INCORRECT');
        pwd.style.border="2px solid red";
        return false; 
    }
    else{
        return true;
    }
}