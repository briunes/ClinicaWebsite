var firebaseConfig = {
  apiKey: "AIzaSyAEzFxZevbsMcvWXQ7mcL-pYpqstH07XsI",
  authDomain: "messegerapp-d957e.firebaseapp.com",
  databaseURL: "https://messegerapp-d957e-default-rtdb.firebaseio.com",
  projectId: "messegerapp-d957e",
  storageBucket: "messegerapp-d957e.appspot.com",
  messagingSenderId: "392477905883",
  appId: "1:392477905883:web:2e97cdd7ce7eb381f5cdfe",
  measurementId: "G-VK2PQKLPK9"
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