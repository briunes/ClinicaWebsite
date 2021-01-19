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

auth.onAuthStateChanged(user => {

    if(user)
    {
        console.log("user logged in", user);
      
        document.getElementById("user-email").innerText = user.email
    }
    else
    {
        console.log("user logged out");
        window.location.href = "login.html"; 
    }
  })


  //LOGOUT FUNCTION
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) =>{
    e.preventDefault();
    auth.signOut().then(() =>{
      console.log('User sign out')
      window.location.href = "login.html"; 

    })
  })

