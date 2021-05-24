/**
 * Validate the form fields of the document after the following rules:
 * !All input fields must contain an "expected" value.
 * @returns {Boolean} Returns true if the form fields are valid, and false if not.
 */

function validateFormFields() {
    var firstName = getInputText("#inputFirstName");
    var lastName = getInputText("#inputLastName");
    var email = getInputText("#inputEmail");
    var rsvpEvent = getInputText("#inputEvent");

    //if any text input is empty then leave function immediately, returning false.
    if (firstName == "") return false;
    if (lastName == "") return false;
    if (email == "") return false;
    if (rsvpEvent == "") return false;
    

    //if we land here then all input elements are valid.
    alert("Thank you!");
    return true;
}

function getInputText(selector) {
    var element = document.querySelector(selector);

    if (element) {
        log(selector, element.value);
        return element.value;
    }

    else {
        alert("Input element " + selector + " could not be found");
        return "";
    }
}

function log(label, value) {
    console.log(label + ': ' + value);
}
