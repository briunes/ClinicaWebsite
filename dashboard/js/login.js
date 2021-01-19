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

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.database();

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


