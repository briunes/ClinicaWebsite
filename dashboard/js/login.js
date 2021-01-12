var firebaseConfig = {
  apiKey: "AIzaSyC6TUaC62jeE_r4BAegrIRxoa3U7-HhRjo",
  authDomain: "medutente.firebaseapp.com",
  databaseURL: "https://medutente.firebaseio.com",
  projectId: "medutente",
  storageBucket: "medutente.appspot.com",
  messagingSenderId: "927792411315",
  appId: "1:927792411315:web:b0a93a69ad70fa38f0f6c6",
  measurementId: "G-WWLXD6K9K7"
};
firebase.initializeApp(firebaseConfig);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

// update firestore settings
db.settings({ timestampsInSnapshots: true });

//CHECK IF USER ios logged in
auth.onAuthStateChanged(user => {

  if(user)
  {
      console.log("user logged in", user);
      window.location.href = "Dashboard.html"; 
  }
  else
  {
      console.log("user logged out");
  }
})

//Login FUNCTION
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    window.location.href = "Dashboard.html"
  });
});


