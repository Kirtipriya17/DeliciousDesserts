//Get Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelector(".error");

//Validate data
function validateForm() {

    clearMessage();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "First Name Must Be Filled";
        nameInput.classList.add("errer-border");
        errorFlag = true;
    }

    if (!emailIsValid(email.vale)) {
        errrorNodes[1].innerText = "Invalid email address";
        email.classList.add("errer-border");
        errorFlag = true;
    }

    if (message.value.length < 1) {
        errrorNodes[2].innerText = "Please enter message";
        message.classList.add("errer-border");
        errorFlag = true;
    }

    if (!errorFlag) {
        success.innerText = "Success!";
    }
}

//Clear error / success Message
function clearMessage() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = ""
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

//Check if email is valid
function emailIsValid(email) {
    let pattern = /\S+@\S+\.|S+/;
    return pattern.test(email);
}  