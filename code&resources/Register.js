function printerror(a){
    let error = document.getElementById("Error");
    error.innerHTML = a;
    return false;
}

function validasi(){
    // alert("Hello");
    let Name = document.getElementById("NameTxt").value;
    let Email = document.getElementById("EmailTxt").value;
    let Password = document.getElementById("PasswordTxt").value;
    let ConfirmPass = document.getElementById("ConfirmPassTxt").value;
    // let genderMale = document.getElementById("MaleRad").checked;
    // let genderFemale = document.getElementById("FemaleRad").checked;
    // let TC = document.getElementsById("CB").checked;

    if (Name == ""){
        return printerror("Name Must Be Filled");
    }

    if (Email == ""){
        return printerror("Email Must Be Filled")
    }
    else if(Email.indexOf("@gmail") == -1){
        return printerror("Email Must Include @gmail");
    }

    else if(!Email.endsWith(".com")){
        return printerror("Email Must Ends With .com");
    }

    if (Password == ""){
        return printerror("Password Must Be Filled");
    }

    if (ConfirmPass == ""){
        return printerror("Confirm Password Must Be Filled");
    }

    else if (ConfirmPass != Password){
        return printerror("Confirm Password Must Be The Same as Password");
    }

    // else if (document.getElementById("MaleRad").checked == false || document.getElementById("FemaleRad").checked == false){
    //     return printerror("You Must Choose Gender");
    // }

    if (document.getElementsById("CB").checked == false){
        return printerror("You Must Agree With The Terms & Conditions");
    }

} 
