// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { last } from "firebase-tools/lib/utils";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1PW1bEv2Ks4FZFWGYJ8btpKelaLpFTDg",
    authDomain: "digitalisim.firebaseapp.com",
    projectId: "digitalisim",
    storageBucket: "digitalisim.appspot.com",
    messagingSenderId: "236908555465",
    appId: "1:236908555465:web:133c7b9bd5f436e00bb118",
    measurementId: "G-TY251NQVE1"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const analytics = getAnalytics( app );
const database = firebase.database();

document.onload = check_login();

//get login form and inputs
const login_form = document.querySelector( ".login_form" );
const login_user = document.querySelector( "#login_user" );
const login_pass = document.querySelector( "#login_pass" );
const login_status = document.querySelector( "#login_status" );

//global variables
var log_pass = null, log_user = null;

//check if user is already logged in
function check_login () {
    if ( sessionStorage.getItem( 'loggedIn' ) == 'true' ) {
        //redirect to main page
        window.location.href = "./index.html";
    }
}

//logout function


//handle login form submit
// login_form.onsubmit = ( e ) => {
//     e.preventDefault();

//     //get user input
//     log_user = login_user.value.trim();
//     log_pass = login_pass.value.trim();
//     //log user input
//     console.log( log_pass, log_user );

//     //check if user input is matching with admin credentials
//     if ( log_user === admin_creds.user && log_pass === admin_creds.pass ) {
//         //redirect to index.html page
//         //window.location.href = "./index.html"

//         //show login status
//         login_status.textContent = "Login successful";
//         login_status.style.color = "green";

//         //store logins on session storage
//         sessionStorage.setItem( 'loggedIn', 'true' );

//         //clear input fields
//         login_user.value = "";
//         login_pass.value = "";

//         // check if redirected from URL parameter
//         const urlParams = new URLSearchParams( window.location.search );
//         const redirectUrl = urlParams.get( 'rdf' );
//         if ( redirectUrl ) {
//             window.location.href = redirectUrl;
//         } else {
//             window.location.href = "./index.html";
//         }
//     } else {
//         //show error message
//         login_status.textContent = "Invalid credentials";
//         login_status.style.color = "red";

//         //clear pasword field
//         login_pass.value = "";
//     }

//     //delay then clear login status
//     setTimeout( () => {
//         login_status.textContent = "";
//     }, 3000 );

//     //clear global variables for security
//     log_user = null;
//     log_pass = null;
// };

login_form.onsubmit = ( e ) => {
    e.preventDefault();

    log_user = login_user.value.trim();
    log_pass = login_pass.value.trim();

    if ( log_user && log_pass ) {
        register();
    }
}


function register () {
    const username = log_user;
    const password = log_pass;
    const auth = getAuth();

    if ( !validateEmail() || !validatePassword() ) {
        return;
    }

    createUserWithEmailAndPassword( auth, username, password )
        .then( ( userCredential ) => {
            // Signed in 
            const user = userCredential.user;
            var ref = database.ref( 'users/' + user.uid );

            const userData = {
                email: user.email,
                uid: user.uid,
                last_login: Date.now()
            };

            ref.set( userData );
        } )
        .catch( ( error ) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert( errorMessage );
        } );
}

function validatePassword () {
    if ( log_pass.length < 8 ) {
        alert( "Password must be at least 8 characters long" );
        return false;
    }

    return true;
}

function validateEmail () {
    const emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if ( !emailExpression.test( log_user ) ) {
        alert( "Invalid email address" );
        return false;
    }

    return true;
}
