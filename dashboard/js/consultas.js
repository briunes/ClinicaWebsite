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
const db = firebase.database();

// update fiwrestore settings
//db.settings({ timestampsInSnapshots: true });

auth.onAuthStateChanged(user => {

    if(user)
    {
        console.log("user logged in", user);
      
        document.getElementById("user-email").innerText = user.email
        
        var ref = "Users/" + user.uid;
        
        //var database = firebase.database().ref(ref);

        var ref = "Users/" + user.uid + "/Appointments";
        //var ref = "Users/HA5VvWUtWpVfcgEO9z2Eh6paFBB2/Appointments";
        
    
        var database = firebase.database().ref(ref);

        console.log(ref)
        database.on('value', function (snapshot) {
            if (snapshot.exists()) {
                var content = [];
                var data = snapshot.val();
                for (var i in data) {
                    var confirmed = data["confirmed"];
                    var day = data[i]["day"];
                    var hour = data[i]["hour"];
                    var medic = data[i]["medic"];
                    var month = data[i]["month"];
                    var speciality = data[i]["speciality"];

              
                    content += '<tr>';
                    content += '<td>' + speciality + '</td>'; 
                    content += '<td>' + medic + '</td>'; 
                    content += '<td>' + hour    +"/" + day + "/"+ month+ '</td>'; 
                    content  += '</tr>';
                }
                document.getElementById("table-body").innerHTML = content;

                console.log(content);
            }
        });
        
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


  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#table-body tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });