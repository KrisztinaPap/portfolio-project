// SendMail function
//    Inputs: values of user email, subject, and message input fields
//    Outputs: (if passes the "bad words" test); A pre-populated new email in the user's email client
//    Purpose: To take the information the user gives us, validate it, then put it into a new email so the user only has to press send to email us.

function sendMail() {
  const contactForm = document.getElementById( "contactForm" );
  const eAddress = document.getElementById( "emailAddress" ).value;
  const eSubject = document.getElementById( "emailSubject" ).value;
  const eBody = document.getElementById( "emailBody" ).value;
  const myEmail = "krisztina.pap@outlook.com";
  let isMessageBad = false;
  const badWordArray = [
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

  if ( eAddress.length === 0 || eSubject.length === 0 || eBody.length === 0 )
  {
    const errorArea = document.getElementById( "errorArea" );
    const newUL = document.createElement( 'UL' );
    newUL.style.display = "block";
    newUL.style.color = "#A6122D";

    if ( eAddress.length === 0 )
    {
      const newLI = document.createElement( 'LI' );
      newLI.textContent = "You need to enter an email address";
      newUL.appendChild( newLI );
    }
    if ( eSubject.length === 0 )
    {
      const newLI = document.createElement( 'LI' );
      newLI.textContent = "You need to enter an email subject";
      newUL.appendChild( newLI );
    }
    if ( eBody.length === 0 )
    {
      const newLI = document.createElement( 'LI' );
      newLI.textContent = "You need to enter a message (the body of the email)";
      newUL.appendChild( newLI );
    }
    errorArea.innerHTML = "";
    errorArea.appendChild( newUL );
  }
  else 
  {
    let cleanText = eBody.replace( /[^a-zA-Z0-9' \t]/gi, "" );
    let lowerText = cleanText.toLowerCase(); 
    let userMessage = lowerText.split(" ");
  
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
      //      Further improved the form by not opening a new browser tab every time the user clicks send
      location.href = yourEmailMessage;
    }
    isMessageBad = false;
    errorArea.innerHTML = "";
    contactForm.reset();
  }
};


// MyMenu function
//    Inputs: Buttonclick
//    Outputs: The style display attribute toggles between "block" and "none" on the nav items
//    Purpose: To hide and show the menu items when the user clicks on the menu button

//Citation:
//      https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
//      The below code block hides/shows my nav menu
function myMenu() {
    const myMenu = document.getElementById("myMenu");
    if (myMenu.style.display === "block") {
      myMenu.style.display = "none";
    } else {
      myMenu.style.display = "block";
    }
}

// showHideMyInfo function
//    Inputs: Buttonclick
//    Outputs:  The style display attribute toggles between "block" and "none" on the lists under the expanding buttons
//    Purpose: To show and hide the skills, work experience, and certificates detailed information

//Citation:
//      https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
//      The below code block was modified to show/hide blocks of the code (expanding buttons)
//      It also adds/removes the appropriate icon classes to display a '+' or '-' icon (showing whether the area is expanded or not)
function showHideMyInfo( button ) {
  let expandButton = button.nextElementSibling;
  let myIcon = button.firstChild;

  if (expandButton.style.display === "block") {
    expandButton.style.display = "none";
    myIcon.classList.remove("fa-minus-square");
    myIcon.classList.add("fa-plus-square");
  } else {
    expandButton.style.display = "block";
    myIcon.classList.remove("fa-plus-square");
    myIcon.classList.add("fa-minus-square");
  }
}