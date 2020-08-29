const contactForm = document.getElementById( "contactForm" );
const myEmail = "krisztina.pap@outlook.com";


function sendMail() {
    const eAddress = document.getElementById( "emailAddress" ).value;
    const eSubject = document.getElementById( "emailSubject" ).value;
    const eBody = document.getElementById( "emailBody" ).value;

    // Citation:
    //      https://stackoverflow.com/questions/21028939/mailto-using-javascript
    //      https://www.webdeveloper.com/d/229947-javascript-mailto-form
    //      The below two lines of code build the email message from the variables we prompted the user for and then we use the user's email software in a new window to send the message
    const yourEmailMessage = `mailto:${myEmail}?cc=${eAddress}&subject=${eSubject}&body=${eBody}`;
    window = window.open(yourEmailMessage, 'emailWindow');

    contactForm.reset();
};

