function cargarDom(lista) {
  let contenedor = document.getElementById("lista");
  lista.forEach((element) => {
    let item = document.createElement("tr");
    ["id", "tarea", "todo"].forEach((field) => {
      let campo = document.createElement("td");
      campo.textContent = element[field];
      if (field == "todo") {
        let newEstado = element[field] ? false : true;
        campo.addEventListener("click", () => {
          cambiar_estado(element["id"], element["tarea"], newEstado);
        });
      }
      console.log(element[field]);
      item.appendChild(campo);
    });
    let campo = document.createElement("td");
    let accion = document.createElement("span");
    accion.textContent = "Borrar";
    accion.addEventListener("click", () => {
      eliminar_tarea(element["id"]);
    });
    campo.appendChild(accion);
    item.appendChild(campo);
    contenedor.appendChild(item);
  });
}
host = "http://172.16.12.97:3000/";

function cambiar_estado(id, tarea, estado) {
  fetch(host + `tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      tarea: tarea,
      todo: estado,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Estado de tarea modificado:", data);
      // Puedes hacer algo más después de modificar el estado de la tarea
    })
    .catch((error) =>
      console.error("Error al modificar el estado de la tarea:", error)
    );
}

function eliminar_tarea(id) {
  fetch(host + `tasks/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Tarea Eliminada:", data);
      // Puedes hacer algo más después de modificar el estado de la tarea
    })
    .catch((error) => console.error("Error al borrar la tarea:", error));
}

function enviar_nuevo() {
  let ntarea = document.getElementById("tarea").value;
  let newTask = {
    tarea: ntarea,
    todo: false,
  };
  fetch(host + "tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Nueva tarea agregada:", data);
      // Puedes redirigir o hacer algo más después de agregar la tarea
    })
    .catch((error) => console.error("Error al agregar la tarea:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  fetch(host + "tasks")
    .then((data) => data.json())
    .then((lista) => cargarDom(lista));

  let enviar = document.getElementById("enviar_nuevo");
  enviar.addEventListener("click", enviar_nuevo);
});
