
function test() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var emailStore = localStorage.setItem("email", email);
  var passwordStore = localStorage.setItem("password", password);

}