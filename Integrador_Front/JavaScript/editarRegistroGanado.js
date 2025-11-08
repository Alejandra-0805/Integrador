document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("btnEditar");
const iconoUsuario = document.querySelector(".icono-usuario img");
     iconoUsuario.addEventListener("click", () => {
        window.location.href = "verUsuario.html";
    });
  btnEditar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const arete = document.getElementById("arete").value;
    const raza = document.getElementById("raza").value;
    const fechaRegistro = document.getElementById("fechaRegistro").value;
    const peso = document.getElementById("peso").value;
    const sexo = document.getElementById("sexo").value;
    const fechaMuerte = document.getElementById("fechaMuerte").value;
    
    
    

    if (!nombre || !arete) {
      alert("⚠️ Por favor, completa todos los campos obligatorios.");
      return;
    }

    alert(`✅ Registro actualizado con éxito`);

    window.location.href = "visualizarRegistroGanado.html";
  });
});

