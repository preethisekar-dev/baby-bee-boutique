//login form
function validateform() {
    var name = document.myform.name.value;
    var password = document.myform.password.value;

    if (name === "" || password === "") {
        alert("Username and Password must be filled");
        return false;
    } else {
        window.location.href = "home.html"; // redirect
        return false; // stop form reload
    }
}

//contact form
function SubmitData() {
  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !contact || !email || !message) {
    alert("Please fill out all fields!");
    return;
  }

  alert(`Form submitted!\nName: ${name}\nContact: ${contact}\nEmail: ${email}\nMessage: ${message}`);

  // ✅ Clear the form fields
  document.getElementById("myform").reset();
}
