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

