const express = require("express");
const mongoose = require("mongoose");
const Course = require("./course"); // Asegura que el modelo Course esté cargado

// Cadena de conexión usando el puerto correcto (27018)
const connectionString =
  "mongodb://admin:admin123@localhost:27018/espe-mongoose?authSource=admin";

mongoose.connect(connectionString)
  .then(() => {
    console.log("✅ Conexión exitosa a MongoDB en Docker (puerto 27018)");
  })
  .catch((error) => {
    console.error("❌ Error de conexión a MongoDB:", error);
  });

const app = express();

app.use(express.json()); // <-- Permite recibir JSON

app.get("/", (req, res) => {
  res.send("Hello, World desde Docker + MongoDB!");
});

app.post("/courses", async (req, res) => {
  Course.create(req.body) // <-- Usa los datos enviados por el usuario
    .then((doc) => {
      res.status(201).json(doc);
    })
    .catch((error) => {
      console.error("❌ Error al crear el curso:", error);
      res.status(400).json({ error: error.message });
    });
});

app.get("/courses", async (req, res) => {
  Course.find()
    .then((courses) => {
      res.json(courses);
    })
    .catch((error) => {
      console.error("❌ Error al obtener los cursos:", error);
      res.status(500).json({ error: "Error al obtener los cursos" });
    });
});

app.get("/courses/:id", (req, res) => {

  const courseId = req.params.id;

  Course.findById(courseId )
    .then((course) => {
      res.json(course);
    }).catch((error) => {
      console.error("❌ Error al obtener el curso:", error);
      res.status(500).json({ error: "Error al obtener el curso" });
    });

});

app.put("/courses/:id", (req, res) => {
  const id = req.params.id;
  Course.findByIdAndUpdate(
    id, // <-- Solo el id
    req.body, // <-- Actualiza con los datos enviados por el usuario
    { new: true, runValidators: true } // <-- Devuelve el documento actualizado y valida
  )
    .then((course) => {
      res.json(course);
    })
    .catch((error) => {
      console.error("❌ Error al actualizar el curso:", error);
      res.status(500).json({ error: "Error al actualizar el curso" });
    });
});

app.delete("/courses/:id", (req, res) => {
  const courseId = req.params.id;
  Course.findByIdAndDelete(courseId)
    .then((course) => {
      if (!course) {
        return res.status(404).json({ error: "Curso no encontrado" });
      }
      res.json({ message: "Curso eliminado exitosamente" });
    })
    .catch((error) => {
      console.error("❌ Error al eliminar el curso:", error);
      res.status(500).json({ error: "Error al eliminar el curso" });
    });
});

app.listen(8080, () => console.log("🚀 Servidor iniciado en http://localhost:8080"));

