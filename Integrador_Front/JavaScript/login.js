document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();

    if (correo === "" || password === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }

    const usuarioPrueba = {
      correo: "admin@vaquitasoft.com",
      password: "Alejandra_12"
    };

    if (correo === usuarioPrueba.correo && password === usuarioPrueba.password) {
      alert("Inicio de sesión exitoso. ¡Bienvenido a VaquitaSoft!");
      window.location.href = "../Page/home.html";
    } else {
      alert("Correo o contraseña incorrectos. Inténtalo de nuevo.");
    }
  });
});
