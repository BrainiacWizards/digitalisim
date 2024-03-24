import { firebase } from "firebase/app";
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
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

//get login form and inputs
const login_form = document.querySelector( ".login_form" );
const login_user = document.querySelector( "#login_user" );
const login_pass = document.querySelector( "#login_pass" );
const login_status = document.querySelector( "#login_status" );

login_form.addEventListener( "submit", function ( e ) {
    e.preventDefault();
    register();
} );


function register () {
    const username = login_user;
    const password = login_pass;
    const auth = getAuth();

    if ( !validateEmail( username ) || !validatePassword( password ) ) {
        login_status.innerHTML = "Invalid email or password";
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

function validatePassword ( pass ) {
    if ( pass.length < 8 ) {
        login_status.innerHTML = "invalid password";
        return false;
    }

    return true;
}

function validateEmail ( email ) {
    const emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if ( !emailExpression.test( email ) ) {
        login_status.innerHTML = "Invalid email";
        return false;
    }

    return true;
}
