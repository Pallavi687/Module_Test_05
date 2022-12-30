function submitForm() {
    // 1. get all the user input values
    let number = document.getElementById('name').value;
    let name = document.getElementById('last name').value;
    let email = document.getElementById('email').value;
    let check = document.getElementById('Reason for Contacting').checked;
    console.log(name, last name, email, Reason for Contacting);
    // check if all the inputs are filled
    if (name != null && last name != null && email != null && Reason for Contacting != false) {
        // show the alert only if all inputs are filled
         alert("Form submitted successfully!")
    } else {
        alert("All fields are required!")
    }
}