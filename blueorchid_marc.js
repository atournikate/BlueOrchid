/**
 * Validates the form fields of this document after the following rules:
 *    
 * ! All input fields must contain an "expected" value.  
 * 
 * @returns {Boolean} Returns true if the form fields are valid and false
 *                    if not.                     
 */
 function validateFormFields() {
    var firstName = getInputText("#conFirstName");
    var lastName = getInputText("#conLastName");

    // If any text input is empty then leave function immediately, returning false.
    
    if (firstName == "") return false;         
   
    if (lastName == "") return false; 
    
    
    
   
    // If we land here then all input element are valid.
    alert("Thanks for your message - we will respond shortly.")
    return true; 

    
    
    
}

/**
 * Gets the text value of the indicated text input.
 * 
 * @param {String} selector  The selector of the input element to get its value.   
 * 
 * @returns {String} Returns the text value.                    
 */
function getInputText(selector) { 
    var element = document.querySelector(selector);

    if (element) {
        log(selector, element.value);
        return element.value;
    }
    else {
        alert("Input element '" + selector + "' could not be found.");
        return "";
    }
}

/**
 * Logs the indicated item to the browser's console.
 * 
 * @param {String} label 
 * @param {any} value 
 * 
 * @returns {String} Returns the text value.                    
 */
function log(label, value) {
    console.log(label + ': ' + value);
}