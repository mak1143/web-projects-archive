/*Contact Us
--First Name * 

--Last Name* 

--Email Address* 

--Query Type *
 -General Enquiry
 -Support Request


-- Message*
-I consent to being contacted by the team *
--Submit*/
// --contact-First-name
// --contact-last-name
// --contact-email
// --team-support
// --btn


// first-name
function validation(){


let firstNameEl = document.getElementById("contact-First-name").value;
// first of all what's the meaning of value am using here

// last-name
let lastNameEl = document.getElementById("contact-last-name");

// email-contact
let emailEl = document.getElementById("contact-email");



// condition code here
if (firstNameEl === " ") {
    document.getElementById("contact-First-name").innerHTML = "** Please fill the Name field";
    return false;
    // what is the wrong with using return without function and return 
}



}



