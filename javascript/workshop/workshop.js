function password(){
 let password = prompt("Enter a password");

 if(password.length < 8){
    console.log("password must be minimum 8 character.");
 }

 else if (!/[A-Z]/.test(password)){
    console.log("Password must have one uppercase .");
 }

 else if (!/[0-9]/.test(password)){
    console.log("Password must have one number .");
 } else{
    console.log("Password created Successfully");
 }
 
}

password();