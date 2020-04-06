var firebaseConfig = {
    apiKey: "AIzaSyAXFpzBCtlQwpSCCAUXzsVNNCOYh4HYxoM",
    authDomain: "raghavcv-c4a19.firebaseapp.com",
    databaseURL: "https://raghavcv-c4a19.firebaseio.com/",
    projectId: "raghavcv-c4a19",
    storageBucket: "raghavcv-c4a19.appspot.com",
    messagingSenderId: "251730240009",
    appId: "1:251730240009:web:20e87d63fcfacfc0724ed8"
  };
 
  firebase.initializeApp(firebaseConfig);
 

function InsertData(model) {
  firebase.database().ref('ClientRequest').push(model);
}

  $(document).ready(function(){
    //page load
  })

  $('#ContactMeForm').on("submit",async function(e){   
    e.preventDefault();    
    var model={};
    $(this).serializeArray().map(x=>model[x.name]=x.value);
    console.log(model);
    $('#myModal').modal();
    InsertData(model);
    $(this).trigger("reset");    
  })