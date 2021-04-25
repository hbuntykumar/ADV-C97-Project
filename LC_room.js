
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD5taGLyqyhZnMIutH-bLXmU24LjKymxNs",
  authDomain: "kwitter-eee0e.firebaseapp.com",
  databaseURL: "https://kwitter-eee0e-default-rtdb.firebaseio.com",
  projectId: "kwitter-eee0e",
  storageBucket: "kwitter-eee0e.appspot.com",
  messagingSenderId: "134428707555",
  appId: "1:134428707555:web:d2e4fc5809dfac031a53d6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_n = localStorage.getItem("user_name");
  document.getElementById("user_names").innerHTML = "Welcome "+user_n+"!";

  function add_room() {
    Room_n = document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_n).update({purpose : "adding room name"});
    localStorage.setItem("room_name" , Room_n);
    window.location = "LC_pg.html";
  }

function getData() {
  firebase.database().ref("/").on('value', function(snapshot)
   {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      //sconsole.log("Room name - " +Room_n);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name) {
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "LC_pg.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }