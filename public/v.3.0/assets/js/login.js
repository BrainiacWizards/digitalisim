import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";

const login_form = document.querySelector( ".login_form" );
const login_user = document.querySelector( "#login_user" );
const login_pass = document.querySelector( "#login_pass" );
const login_status = document.querySelector( "#login_status" );

const firebaseConfig = {
    apiKey: "AIzaSyB1PW1bEv2Ks4FZFWGYJ8btpKelaLpFTDg",
    authDomain: "digitalisim.firebaseapp.com",
    projectId: "digitalisim",
    storageBucket: "digitalisim.appspot.com",
    messagingSenderId: "236908555465",
    appId: "1:236908555465:web:133c7b9bd5f436e00bb118",
    measurementId: "G-TY251NQVE1"
};

const app = initializeApp( firebaseConfig );
const database = getDatabase( app );
const auth = getAuth();

login_form.addEventListener( "submit", function ( e ) {
    e.preventDefault();
    console.log('submit')
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

    createUserWithEmailAndPassword( auth, email, password )
        .then( ( userCredential ) => {
            // Signed up 
            const user = userCredential.user;
            var ref = database.ref( 'users/' + user.uid );

            const userData = {
                email: user.email,
                uid: user.uid,
                last_login: Date.now()
            };

            ref.set( userData );

            login_status.innerHTML = "User created";
            alert( "User created" );
        } )
        .catch( ( error ) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            login_status.innerHTML = errorMessage;
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
