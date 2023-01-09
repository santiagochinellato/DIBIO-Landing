const contactButton = document.getElementById("contactButton");
const contactButtonBack = document.getElementById("contactButtonBack");
const contactForm = document.getElementById("contactForm");
// formulario
const form_consultas = document.getElementById("form_consultas");
const selectSucursal = document.getElementById("selectSucursal");
// checkboxes
const consultas = document.getElementById("consultas");
const solicitar_turno = document.getElementById("solicitar_turno");
const extraccion_domicilio = document.getElementById("extraccion_domicilio");
const trabajar = document.getElementById("trabajar");
const nombre = document.getElementById("nombre");
const dni = document.getElementById("dni");
const nacimiento = document.getElementById("nacimiento");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const archivo = document.getElementById("archivo");
const mensaje = document.getElementById("mensaje");

contactButton.addEventListener("click", translateForm);
contactButtonBack.addEventListener("click", removeTranslateForm);

function onlyOne(checkbox) {
  const checkboxes = document.getElementsByName("check");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}
function translateForm() {
  contactForm.classList.remove("contactForm");
  contactForm.classList.add("contactFormChanged");
}
function removeTranslateForm() {
  contactForm.classList.add("contactForm");
  contactForm.classList.remove("contactFormChanged");
}

form_consultas.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData();
  if (consultas.checked) {
    formData.append("asunto", consultas.value);
  }
  if (solicitar_turno.checked) {
    formData.append("asunto", solicitar_turno.value);
  }
  if (extraccion_domicilio.checked) {
    formData.append("asunto", extraccion_domicilio.value);
  }
  if (trabajar.checked) {
    formData.append("asunto", trabajar.value);
  }
  formData.append("selectSucursal", selectSucursal.value);
  formData.append("nombre", nombre.value);
  formData.append("dni", dni.value);
  formData.append("nacimiento", nacimiento.value);
  formData.append("email", email.value);
  formData.append("telefono", telefono.value);
  formData.append("file", archivo.files[0]);
  formData.append("mensaje", mensaje.value);

  if (
    consultas.value === "" ||
    solicitar_turno.value === "" ||
    extraccion_domicilio.value === "" ||
    trabajar.value === "" ||
    selectSucursal.value === "" ||
    nombre.value === "" ||
    dni.value === "" ||
    nacimiento.value === "" ||
    email.value === "" ||
    telefono.value === "" ||
    archivo.value === "" ||
    mensaje.value === ""
  ) {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    return Toast.fire({
      icon: "warning",
      title: "Todos los campos son obligatorios",
    });
  }
  sendEmail(formData);
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  e.target.reset();
  return Toast.fire({
    icon: "success",
    title: "Email enviado correctamente",
  });
});

const sendEmail = async (formData) => {
  try {
    //despues cambiar url localhost por la url del servidor
    await fetch("https://backend-dibio-production.up.railway.app//api/send", {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    console.log(error);
  }
};
