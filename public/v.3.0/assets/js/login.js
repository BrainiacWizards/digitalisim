import {
 getApp,
 initializeApp,
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';

import {
 getAuth,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

const login_form = document.querySelector('.login_form');
const login_user = document.querySelector('#login_user');
const login_pass = document.querySelector('#login_pass');
const login_status = document.querySelector('#login_status');
const registerBtn = document.querySelector('#register-btn');

const firebaseConfig = {
 apiKey: 'AIzaSyB1PW1bEv2Ks4FZFWGYJ8btpKelaLpFTDg',
 authDomain: 'digitalisim.firebaseapp.com',
 projectId: 'digitalisim',
 storageBucket: 'digitalisim.appspot.com',
 messagingSenderId: '236908555465',
 appId: '1:236908555465:web:133c7b9bd5f436e00bb118',
 measurementId: 'G-TY251NQVE1',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const Database = getDatabase(app);

const rdUrl = new URL(window.location.href);
const rdf = rdUrl.searchParams.get('rdf');

// check if user is already logged in
if (!sessionStorage.getItem('loggedIn') === 'true') {
 if (rdf) {
  window.location.href = rdf;
 } else {
  window.location.href = '../../';
 }
}

login_form.addEventListener('submit', function (e) {
 e.preventDefault();
 console.log('submit');
 login();
});

registerBtn.addEventListener('click', function (e) {
 e.preventDefault();
 register();
});

async function login() {
 console.log('logging in');
 const username = login_user.value;
 const password = login_pass.value;

 if (!validateEmail(username) || !validatePassword(password)) {
  return;
 }

 try {
  await signInWithEmailAndPassword(auth, username, password);
  login_status.innerHTML = 'Logged in successfully';
  login_status.style.color = 'green';

  setLoginSessionCookie(username);
 } catch (error) {
  login_status.innerHTML = error.message;
  login_status.style.color = 'red';
  login_pass.value = '';

  if (error.code === 'auth/invalid-login-credentials') {
   login_status.innerHTML = 'Invalid email or password';
   throw new Error('Invalid email or password');
  }

  login_status.innerHTML = 'An error occurred';
  throw new Error(`An error occurred:\n${error}`);
 }
}

async function register() {
 console.log('registering');
 const username = login_user.value;
 const password = login_pass.value;

 if (!validateEmail(username) || !validatePassword(password)) {
  //   login_status.innerHTML = 'Invalid email or password';
  return;
 }

 try {
  await createUserWithEmailAndPassword(auth, username, password);
  login_status.innerHTML = 'User created successfully';
  login_status.style.color = 'green';
 } catch (error) {
  login_status.innerHTML = error.message;
  login_status.style.color = 'red';
  login_pass.value = '';

  if (error.code === 'auth/email-already-in-use') {
   login_status.innerHTML = 'Email already in use';
   throw new Error('Email already in use');
  }

  if (error.code === 'auth/weak-password') {
   login_status.innerHTML = 'Password is too weak';
   throw new Error('Password is too weak');
  }

  if (error.code === 'auth/invalid-email') {
   login_status.innerHTML = 'Invalid email';
   throw new Error('Invalid email');
  }

  login_status.innerHTML = 'An error occurred';
  throw new Error('An error occurred');
 }
}

function validatePassword(pass) {
 if (pass.length < 8) {
  login_status.innerHTML = 'invalid password';
  login_status.style.color = 'red';
  return false;
 }

 return true;
}

function validateEmail(email) {
 const emailExpression = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

 if (!emailExpression.test(email)) {
  login_status.innerHTML = 'Invalid email';
  login_status.style.color = 'red';
  return false;
 }

 return true;
}

function setLoginSessionCookie(email) {
 sessionStorage.setItem('loggedIn', 'true');

 setTimeout(() => {
  if (rdf) {
   window.location.href = rdf;
  } else {
   window.location.href = '../../';
  }
 }, 500);
}
