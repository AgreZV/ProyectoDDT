import { Tareas } from "./Tareas.js";
import { interfazUsuario } from "./interfazUsuario.js";

/*const ourTitle = document.getElementById("titleSection");
ourTitle.textContent = "LISTA DE TAREAS";
console.log(title);*/

// DOM Events
document
  .getElementById("tarea-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // obtengo los valores del Form
    //const id = document.getElementById("Id").value;
    const nombre = document.getElementById("nombre").value;
    const detalle = document.getElementById("detalle").value;
    const prioridad = document.getElementById("prioridad").value;

    // const filtro = Tareas.filter((tarea) => tarea.prioridad === "1");
    // console.log('Array tarea: ', filtro);

    // creo una nueva Tarea
    const tarea = new Tareas(nombre, detalle, prioridad);

    // crea una nueva instancia de interfaz
    const ui = new interfazUsuario();

    // validacion simple
    if (nombre === "" || detalle === "" || prioridad === "") {
        ui.showMessage("Favor insertar datos en todas los campos", "danger");
    } else {
    // guarda tarea
        ui.addTarea(tarea);
        ui.showMessage("Tarea creada", "success");
        ui.resetForm();
    }
  });
  export function crearHtml () {
    const mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';

  }
document.getElementById("tarea-list").addEventListener("click", (e) => {
  const ui = new interfazUsuario();
  ui.deleteTarea(e.target);
  e.preventDefault();
});


