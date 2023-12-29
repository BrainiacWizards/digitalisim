document.onload = check_login();

//get login form and inputs
const login_form = document.querySelector( ".login_form" );
const login_user = document.querySelector( "#login_user" );
const login_pass = document.querySelector( "#login_pass" );
const login_status = document.querySelector( "#login_status" );

//global variables
var log_pass = null, log_user = null;

//private credentials (temporary)
const admin_creds = {
    "user": "digitalism",
    "pass": "admin"
};

//check if user is already logged in
function check_login () {
    if ( sessionStorage.getItem( 'loggedIn' ) == 'true' ) {
        //redirect to main page
        window.location.href = "./index.html";
    }
}

//logout function


//handle login form submit
login_form.onsubmit = ( e ) => {
    e.preventDefault();

    //get user input
    log_user = login_user.value.trim();
    log_pass = login_pass.value.trim();
    //log user input
    console.log( log_pass, log_user );

    //check if user input is matching with admin credentials
    if ( log_user === admin_creds.user && log_pass === admin_creds.pass ) {
        //redirect to index.html page
        //window.location.href = "./index.html"

        //show login status
        login_status.textContent = "Login successful";
        login_status.style.color = "green";

        //store logins on session storage
        sessionStorage.setItem( 'loggedIn', 'true' );

        //clear input fields
        login_user.value = "";
        login_pass.value = "";

        // check if redirected from URL parameter
        const urlParams = new URLSearchParams( window.location.search );
        const redirectUrl = urlParams.get( 'rdf' );
        if ( redirectUrl ) {
            window.location.href = redirectUrl;
        } else {
            window.location.href = "./index.html";
        }
    } else {
        //show error message
        login_status.textContent = "Invalid credentials";
        login_status.style.color = "red";

        //clear pasword field
        login_pass.value = "";
    }

    //delay then clear login status
    setTimeout( () => {
        login_status.textContent = "";
    }, 3000 );

    //clear global variables for security
    log_user = null;
    log_pass = null;
}

