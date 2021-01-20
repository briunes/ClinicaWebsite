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
  
  //CHECK IF USER ios logged in
  auth.onAuthStateChanged(user => {

    if(user)
    {
        console.log("user logged in", user);


        const specieltyForm = document.querySelector('#add-Specialty');
        specieltyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const especialidade =       specieltyForm['especialidade'].value;
        
            //firebase.database().ref("Specialties").child("Specialty").set(especialidade);
            //firebase.database().ref("Specialties").push({name: especialidade}); //Correto
        
            firebase.database().ref("Specialties").push({name: "Neurologia"});
            firebase.database().ref("Specialties").push({name: "Pneumologia"});
            firebase.database().ref("Specialties").push({name: "Medicina física"});
            firebase.database().ref("Specialties").push({name: "Reabilitação"});
            firebase.database().ref("Specialties").push({name: "Cuidados paliativos"});
        
        })
        
            
            
        
        
        
        const signupForm = document.querySelector('#add-Medic');
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const MedicUid =      signupForm['medic'].value;
        
        
            firebase.database().ref("Users/" + user.uid + "/ChatLists").push({
                medicUid: MedicUid
              });
              console.log("Users/" + auth.uid + "/ChatLists")
        
        })

        
        const chatForm = document.querySelector('#chat-form');
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const newMessage =      chatForm['mensage'].value;


            firebase.database().ref("Chats").push({
              issen : "false",
              message :  newMessage,
              messageid : "",
              receiver : "",
              sender : user.uid
              });
              console.log(newMessage);
        })

        

        const createAppointment = document.querySelector('#create-appointment');
        createAppointment.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const especialidade =      createAppointment['especialidade'].value;
            const hora =      createAppointment['hora'].value;
            const mes =      createAppointment['mes'].value;
            const ano =      createAppointment['ano'].value;
            const dia =      createAppointment['dia'].value;
            
            
      
        
            firebase.database().ref("Users/" + user.uid + "/Appointments").push({
              speciality: especialidade,
              hour: hora,
              month: mes,
              year: ano,
              day: dia,
              confirmed: "false",
              visible: "true",
              medic: ""
            });
        
        })


        const createMedic = document.querySelector('#create-Medic');
        createMedic.addEventListener('submit', (e) => {
            e.preventDefault();
                    
        
            firebase.database().ref("Medics/").push({

                MedicUid: "-AASDWASD3232FSDF342523",
                Name: "Rui Ferreira",
                Especialidade: "Neurologia",
                ProcessNumber: "-21341245sasas"
                
              });

              firebase.database().ref("Medics/").push({

                MedicUid: "-A5423f325f",
                Name: "Antonio Costa",
                Especialidade: "Medicina física",
                ProcessNumber: "-21341245sasas"
                
              });
              firebase.database().ref("Medics/").push({

                MedicUid: "-as23cfsawfesd",
                Name: "Andre Araujo",
                Especialidade: "Reabilitação",
                ProcessNumber: "-21341245sasas"
                
              });
              firebase.database().ref("Medics/").push({

                MedicUid: "-AS2DS2DA",
                Name: "Sergio Ferreira",
                Especialidade: "Pneumologia",
                ProcessNumber: "-21341245sasas"
                
              });
        
        })





    }
    else
    {
        console.log("user logged out");
    }


    })

