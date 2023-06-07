

export class interfazUsuario {
    /**
     * @param {Object} tarea 
     */
    
    addTarea(tarea) {
      const tareaList = document.getElementById("tarea-list");
      const element = document.createElement("div");
      element.innerHTML = `
              <div class="card text-center mb-4">
                  <div class="card-body">
                      <strong>Tarea</strong>: ${tarea.nombre}  - 
                      <strong>Detalle</strong>: ${tarea.detalle}  -  
                      <strong>Prioridad</strong>: ${tarea.prioridad}
                      <a href="#" class="btn btn-danger" name="delete">Borrar</a>
                      <a href="#" class="btn btn-edit" name="edit">Editar</a>
                  </div>
              </div>
          `;
        tareaList.appendChild(element);
    }
  
  
    resetForm() {
      document.getElementById("tarea-form").reset();
    }
  
    editTarea(element) {

      if (element.name === "edit") {
        element.parentElement.parentElement.remove();
        this.showMessage("Tarea editada realizada", "success");
      }
    }
  
    deleteTarea(element) {
      if (element.name === "delete") {
        element.parentElement.parentElement.remove();
        this.showMessage("Tarea eliminada completamente", "success");
      }
    }
    


    showMessage(message, cssClass) {
      const div = document.createElement("div");
      div.className = `alert alert-${cssClass} mt-2`;
      div.appendChild(document.createTextNode(message));
  
    
      const container = document.querySelector(".container");
      const app = document.querySelector("#App");
  
   
      container.insertBefore(div, app);
  
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 2000);
    }


  }
  