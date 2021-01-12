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

const auth = firebase.auth();
const db = firebase.firestore();

// update firestore settings
db.settings({ timestampsInSnapshots: true });

//CHECK IF USER ios logged in
auth.onAuthStateChanged(user => {

    if(user)
    {
        console.log("user logged in", user);
      
    }
    else
    {
        console.log("user logged out");
    }
  })

//Register FUNCTION
const registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = registerForm['register-email'].value;
  const password = registerForm['register-pass'].value;

  // create the user in
  firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
   
    window.location.href = "dashboard/Dashboard.html"; 

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error)
    
  });
});