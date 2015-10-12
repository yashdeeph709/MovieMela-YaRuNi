var localstorage = window.localStorage;

function loadXMLDoc(url) {
   if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
   } else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
   }
   xmlhttp.open("GET", url, false);
   xmlhttp.send(null);
   document.getElementById("frame").innerHTML = xmlhttp.response;
   profile();
}

function movie(id) {
   loadXMLDoc('detail/detailf.html');
   var movies = JSON.parse(localstorage.getItem('movies'));
   document.getElementById('director').innerHTML = movies[id].director;
   document.getElementById('producer').innerHTML = movies[id].producer;
   document.getElementById('screenplay').innerHTML = movies[id].screenplay;
   document.getElementById('description').innerHTML = movies[id].description;
}

function logout() {
   localstorage.removeItem("loggedin");
   profile();
}

function profile() {
   var data = localstorage.getItem("loggedin") ? JSON.parse(localstorage.getItem("loggedin")) : [];
   var optional = document.getElementById('optional');
   if (!localstorage.getItem("loggedin")) {
      console.log("user not logged in");
      optional.innerHTML = "<a onclick=\"loadXMLDoc('detail/form.html')\">SignUp</a>";
   } else {
      console.log("user not logged in");
      optional.innerHTML = "<a onclick=\"logout()\">logout</a>";
   }
}

function signup() {
   var data = localstorage.getItem("users") ? JSON.parse(localstorage.getItem("users")) : [];
   var object = {}
   object.firstname = document.getElementById('fname').value;
   object.lastname = document.getElementById('lname').value;
   object.email = document.getElementById('mailid').value;
   object.username = document.getElementById('username').value;
   object.password = document.getElementById('password').value;
   object.rpassword = document.getElementById('rpassword').value;
   data.push(object);
   localStorage.setItem('users', JSON.stringify(data));
   console.log(object);
}

function login() {
   var data = localstorage.getItem("users") ? JSON.parse(localstorage.getItem("users")) : [];
   var username = document.getElementById("usernameLogin").value;
   var password = document.getElementById("passwordLogin").value;
   for (i = 0; i < data.length; i++) {
      console.log(data[0]);
      if (data[0].username === username) {
         console.log("username found");
         if (data[0].password === password) {
            console.log("password matched");
            localstorage.setItem('loggedin', JSON.stringify(data[0]));
            loadXMLDoc('detail/action.html');
            profile();
         }
      }
   }
}

function isLogged() {
   if (localstorage.getItem('loggedin')) {
      return true;
   } else {
      return false;
   }
}

function comment() {

}
