const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors"); // Agrega esta línea

const app = express();
const port = 3000;

app.use(cors()); // Habilita CORS para todas las rutas

// Middleware para parsear el cuerpo de las peticiones como JSON
app.use(bodyParser.json());

// Ruta para obtener la lista de tareas
app.get("/tasks", (req, res) => {
  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error interno del servidor");
    } else {
      const tasks = JSON.parse(data);
      res.json(tasks);
    }
  });
});

// Ruta para agregar una nueva tarea
app.post("/tasks", (req, res) => {
  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error interno del servidor");
    } else {
      const tasks = JSON.parse(data);
      const newTask = req.body;
      newTask.id = tasks.length + 1;
      tasks.push(newTask);

      fs.writeFile(
        "tasks.json",
        JSON.stringify(tasks, null, 2),
        "utf8",
        (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error interno del servidor");
          } else {
            res.json(newTask);
          }
        }
      );
    }
  });
});

// Ruta para actualizar una tarea
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id, 10);

  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error interno del servidor");
    } else {
      const tasks = JSON.parse(data);
      const updatedTaskIndex = tasks.findIndex((task) => task.id === taskId);

      if (updatedTaskIndex === -1) {
        res.status(404).send("Tarea no encontrada");
      } else {
        tasks[updatedTaskIndex] = req.body;

        fs.writeFile(
          "tasks.json",
          JSON.stringify(tasks, null, 2),
          "utf8",
          (err) => {
            if (err) {
              console.error(err);
              res.status(500).send("Error interno del servidor");
            } else {
              res.json(tasks[updatedTaskIndex]);
            }
          }
        );
      }
    }
  });
});

// Ruta para eliminar una tarea
app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id, 10);

  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error interno del servidor");
    } else {
      const tasks = JSON.parse(data);
      const deletedTaskIndex = tasks.findIndex((task) => task.id === taskId);

      if (deletedTaskIndex === -1) {
        res.status(404).send("Tarea no encontrada");
      } else {
        const deletedTask = tasks.splice(deletedTaskIndex, 1)[0];

        fs.writeFile(
          "tasks.json",
          JSON.stringify(tasks, null, 2),
          "utf8",
          (err) => {
            if (err) {
              console.error(err);
              res.status(500).send("Error interno del servidor");
            } else {
              res.json(deletedTask);
            }
          }
        );
      }
    }
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

/**
 * GET /tasks: Obtiene la lista de tareas.
POST /tasks: Agrega una nueva tarea.
PUT /tasks/:id: Actualiza una tarea existente por su ID.
DELETE /tasks/:id: Elimina una tarea por su ID.
 */
