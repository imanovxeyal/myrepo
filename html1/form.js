
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var isValid = true;
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }
    
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email Address is required";
        isValid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
    
    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Phone Number is required";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }
    
    if (message === "") {
        document.getElementById("messageError").innerHTML = "Message is required";
        isValid = false;
    } else {
        document.getElementById("messageError").innerHTML = "";
    }
    
    if (isValid) {
        alert("Success");
    }
    
    return isValid;
}



document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
const db = []

form.addEventListener('submit', (event) =>  {
    
    event.preventDefault();
    
    const user = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    };
    
    db.push(user);
    console.log('database', db);
    console.log(form);
    
    
    
})

})