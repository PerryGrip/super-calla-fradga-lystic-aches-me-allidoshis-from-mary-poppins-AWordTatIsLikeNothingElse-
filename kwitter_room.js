var firebaseConfig = {
      apiKey: "AIzaSyAB31Y4N1u1G-iDXIbpRefa-gCf2hp6u_Q",
           authDomain: "chatappkwitter-66dc3.firebaseapp.com",
            databaseURL: "https://chatappkwitter-66dc3-default-rtdb.firebaseio.com",
             projectId: "chatappkwitter-66dc3",
              storageBucket: "chatappkwitter-66dc3.appspot.com",
               messagingSenderId: "486235772415",
                appId: "1:486235772415:web:ebfeefa3c4005f71b603ca"
    };
    //ADD YOUR FIREBASE LINKS
    firebase.initializeApp (firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room() {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);
    
      window.location = "kwitter_page.html";
    }
    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room_name- " + Room_names );
row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" +Room_names+ "</div> <hr>";
getElementById ("output").innerHTML += row;
//End code
});});}

getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
    }
    
    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }




