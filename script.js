document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.getElementsByName("minor-radio");
  const minorFields = document.querySelector(".minor-checkbox");

  let lastChecked = null; // Variable para almacenar el último radio button seleccionado

  // Función para manejar el clic en el radio button
  function handleRadioClick() {
    // Si se hace clic en el mismo radio button que estaba seleccionado
    if (lastChecked === this) {
      // Desmarcarlo
      this.checked = false;
      lastChecked = null; // Reiniciar la variable
      minorFields.style.display = "none"; // Ocultar los campos
    } else {
      // Si se hace clic en un radio button diferente
      lastChecked = this; // Actualizar el último radio button seleccionado
      if (this.value === "Soy menor de edad") {
        minorFields.style.display = "block"; // Mostrar los campos
      } else {
        minorFields.style.display = "none"; // Ocultar los campos si no es "Soy menor de edad"
      }
    }
  }

  // Agregar evento a cada radio button
  radioButtons.forEach(function (radio) {
    radio.addEventListener("click", handleRadioClick);
  });
});
