const contactForm = document.getElementById( "contactForm" );
const myEmail = "krisztina.pap@outlook.com";
let isMessageBad = false;


function sendMail() {
    const eAddress = document.getElementById( "emailAddress" ).value;
    const eSubject = document.getElementById( "emailSubject" ).value;
    const eBody = document.getElementById( "emailBody" ).value;
    
    let badWordArray = [
      "feldercarb",   // Swear word in Battlestar Galactica
      "frack",        // Swear word in Battlestar Galactica
      "skinjob",      // Swear word in Battlestar Galactica
      "vulgacarb",    // Swear word in Battlestar Galactica
      "goram",
      "gorram",       // Swear word in Firefly/Serenity 
      "guay",         // Swear word in Firefly/Serenity 
      "bizui",        // Swear word in Firefly/Serenity 
      "bhijoi"        // Swear word in Firefly/Serenity 
    ];


    // Citation:
    //    https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp
    // The below line of code replaces all characters except for lower and uppercase letters, numbers, the character "'", spaces, and tabs. The caret means "everything else" and the "gi" means "global" and "case insensitive"
  
    let cleanText = eBody.replace( /[^a-zA-Z0-9' \t]/gi, "" ); // 
    let userMessage = cleanText.split(" ");

    for ( let i = 0; i < userMessage.length; i++ )
    {
      if ( badWordArray.includes( userMessage[i] ))
      {
        isMessageBad = true;
      }
    }

    if ( isMessageBad === true )
    {
      alert("Let's stay professional, please!");
    }
    else {
      // Citation:
      //      https://stackoverflow.com/questions/21028939/mailto-using-javascript
      //      https://www.webdeveloper.com/d/229947-javascript-mailto-form
      //      The below two lines of code build the email message from the variables we prompted the user for and then we use the user's email software in a new window to send the message
      const yourEmailMessage = `mailto:${myEmail}?cc=${eAddress}&subject=${eSubject}&body=${eBody}`;
      // Citation:
      //      https://stackoverflow.com/questions/21461589/javascript-mailto-using-window-open
      //      Further improved the form by not opening a new browser tab every time the user clicks send.
      location.href = yourEmailMessage;
    }
    isMessageBad = false;
    contactForm.reset();
};

const allSkillLists = document.querySelectorAll("#skills-anchor li");

const frontEnd = document.getElementById("frontEnd");
const backEnd = document.getElementById("backEnd");
const databases = document.getElementById("databases");
const devOps = document.getElementById("devOps");
const dataScience = document.getElementById("dataScience");
const softSkills = document.getElementById("softSkills");

const freelancer = document.getElementById("freelancer");
const eslInstructor = document.getElementById("eslInstructor");
const executiveAssociate = document.getElementById("executiveAssociate");
const timeEntryLead = document.getElementById("timeEntryLead");
const trainingSpecialist = document.getElementById("trainingSpecialist");

const certificates = document.getElementById("certificates");

//Citation:
//      https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
//      The below code block hides/shows my nav menu
function myMenu() {
    let x = document.getElementById("myMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

//Citation:
//      https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
//      The below code block was modified to show/hide blocks of the code (expanding buttons)
function showHideMyInfo( button ) {
  let x = button.nextElementSibling;
  
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


