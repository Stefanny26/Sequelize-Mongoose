


## 🧪 INFORME DE LABORATORIO


### **Título:**

Desarrollo de una API RESTful con arquitectura limpia usando Mongoose y MongoDB en Docker


### **Nombre del estudiante:**

Stefanny Mishel Hernández


### **RESUMEN**

En esta práctica se construyó una API RESTful desde cero aplicando el patrón de arquitectura limpia, utilizando tecnologías modernas como Express, Mongoose y Docker. Se creó un modelo de datos llamado “Curso”, se implementaron operaciones CRUD y se organizó el código en capas separadas para asegurar un desarrollo ordenado y escalable. La base de datos MongoDB fue ejecutada en un contenedor Docker y se accedió mediante una conexión segura usando Mongoose como ORM. Finalmente, se verificó el funcionamiento correcto a través de Postman. Esta experiencia permitió afianzar conceptos fundamentales de desarrollo backend y gestión de bases de datos NoSQL de forma profesional.

**Palabras clave:**
API REST, Mongoose, Arquitectura Limpia


### 1. **INTRODUCCIÓN**

Durante esta práctica se desarrolló una API RESTful en Node.js siguiendo los principios de la arquitectura limpia, con el objetivo de crear una estructura de proyecto escalable, clara y fácil de mantener. Para ello, se utilizó el framework Express para el servidor web, y Mongoose como puente entre la aplicación y MongoDB. Se aplicaron buenas prácticas como la separación de responsabilidades entre modelo, rutas y controladores. Además, se utilizó Docker para ejecutar MongoDB en un entorno virtualizado y Postman como herramienta de prueba. Esta práctica permitió experimentar el flujo completo de desarrollo backend desde el diseño del modelo hasta las pruebas finales.


### 2. **OBJETIVOS**

**2.1 Objetivo General:**

Aplicar principios de arquitectura limpia en el desarrollo de una API RESTful con conexión a una base de datos MongoDB en Docker utilizando Mongoose.

**2.2 Objetivos Específicos:**

* Organizar el proyecto en capas: modelo, controlador y rutas.
* Implementar validaciones de datos con Mongoose.
* Configurar y ejecutar MongoDB en un contenedor Docker.
* Verificar el correcto funcionamiento de la API con Postman.


### 3. **MARCO TEÓRICO**

**Node.js y Express:**
Node.js es un entorno de ejecución para JavaScript que permite crear aplicaciones del lado del servidor. Express es un framework minimalista que simplifica la creación de servidores HTTP y la gestión de rutas. Su combinación permite construir APIs rápidas y flexibles.

**Arquitectura limpia:**
Consiste en organizar el código en capas independientes:

* **Modelos** definen la estructura de los datos.
* **Controladores** contienen la lógica de negocio.
* **Rutas** gestionan las solicitudes del cliente.
  Esta separación mejora la legibilidad y mantenibilidad del proyecto.

**MongoDB y Mongoose:**
MongoDB es una base de datos NoSQL orientada a documentos. Mongoose es un ODM (Object Data Modeling) que proporciona una interfaz más estructurada para interactuar con MongoDB, permitiendo validar, modelar y consultar datos de forma segura y eficiente.

**Docker:**
Docker permite crear entornos virtualizados y portables. Se utilizó para levantar una base de datos MongoDB sin necesidad de instalarla en el sistema. Esto garantiza un entorno limpio y reproducible para pruebas y desarrollo.

**Postman:**
Postman es una herramienta para probar APIs de forma visual. Permite enviar solicitudes HTTP y verificar las respuestas. Se usó para comprobar el correcto funcionamiento de todos los endpoints de la API.


### 4. **DESCRIPCIÓN DEL PROCEDIMIENTO**

**Herramientas utilizadas:**

* Node.js y NPM
* Express.js
* Mongoose
* MongoDB en contenedor Docker
* Postman

**Pasos realizados:**

**1. Configuración del entorno:**

* Se creó el proyecto con `npm init` y se instalaron las dependencias (`express`, `mongoose`, `nodemon`, etc.).
* Se creó el archivo `docker-compose.yml` para levantar un contenedor MongoDB (puerto 27018).

**2. Estructura del proyecto:**

* `models/course.js`: define el esquema del curso con validaciones.
* `controllers/courseController.js`: contiene la lógica para manejar operaciones CRUD.
* `routes/courseRoutes.js`: define las rutas y las enlaza con el controlador.
* `server.js`: configura el servidor y la conexión con MongoDB.

![Figura 1](/screenshots/Arquitectura_limpia.png)

**3. Conexión a la base de datos:**

* Se configuró Mongoose para conectarse a MongoDB usando credenciales definidas en `.env`.

**4. Pruebas con Postman:**

* Se realizaron pruebas para cada endpoint: crear curso, obtener todos, obtener uno por ID, actualizar y eliminar.
* Se verificaron errores como validaciones fallidas (descripción corta, número negativo).


### 5. **ANÁLISIS DE RESULTADOS**

Los resultados fueron los esperados. Todos los endpoints funcionaron correctamente y retornaron respuestas acordes a cada caso:

| Operación           | Endpoint              | Resultado         |
| ------------------- | --------------------- | ----------------- |
| Crear curso         | POST `/courses`       | ✅ 201 Created     |
| Obtener todos       | GET `/courses`        | ✅ 200 OK          |
| Obtener por ID      | GET `/courses/:id`    | ✅ 200 OK          |
| Actualizar curso    | PUT `/courses/:id`    | ✅ 200 OK          |
| Eliminar curso      | DELETE `/courses/:id` | ✅ 200 OK          |
| Validación negativa | POST descripción < 10 | ❌ 400 Bad Request |


### 6. **GRÁFICOS O FOTOGRAFÍAS**

**Figura 2. Código del modelo `Course.js`**
Se muestra el esquema del curso con validaciones:

```js
const courseSchema = new Schema({
    title: { type: String, required: true },
    description: {
        type: String,
        minlength: 10,
        maxlength: 200
    },
    numberOfTopics: {
        type: Number,
        required: true,
        min: 0,
        max: 40
    },
    publishedAt: Date
});
```

**Figura 3. Docker funcionando correctamente**
![Figura 3](/screenshots/Docker1.png)
En esta figura se visualiza el contenedor `mongo_container` corriendo correctamente en el puerto 27018.

**Figura 4. Prueba en Postman (GET /courses)**
![Figura 4](/screenshots/Conexion.png)
Se muestra una solicitud GET a la API y la respuesta con el listado de cursos en formato JSON.

**Figura 5. Error de validación controlado**
![Figura 5](/screenshots/Error.png)
Aquí se ve cómo el sistema responde con un error cuando se envía una descripción muy corta, lo que demuestra que las validaciones funcionan correctamente.


### 7. **DISCUSIÓN**

El uso de arquitectura limpia facilitó la organización del código y la comprensión del proyecto. Separar el modelo, las rutas y el controlador permite trabajar de forma más clara y facilita futuras ampliaciones. Mongoose brindó una interfaz robusta para trabajar con MongoDB, reduciendo la probabilidad de errores y ofreciendo validaciones integradas. Docker demostró ser una herramienta poderosa para crear entornos de desarrollo aislados y portables, ideal para pruebas. Finalmente, Postman fue esencial para validar cada endpoint de la API.

---

### 8. **CONCLUSIONES**

A través del desarrollo de esta práctica se evidenció la importancia de aplicar principios de arquitectura limpia en proyectos backend, lo cual permitió mantener una separación clara entre responsabilidades y facilitó la organización del código. Implementar una API RESTful con Express y Mongoose brindó una experiencia práctica sobre cómo diseñar sistemas escalables y mantenibles, donde el modelo de datos (Course), el controlador y las rutas trabajan de forma independiente pero integrada.

La conexión con MongoDB, gestionada mediante Mongoose, simplificó la manipulación de datos al proporcionar una capa de abstracción sobre las operaciones de base de datos, permitiendo además implementar validaciones robustas directamente desde el esquema. Este enfoque redujo el riesgo de errores en tiempo de ejecución y aumentó la confiabilidad de la aplicación.

El uso de Docker para contenerizar la base de datos trajo ventajas en cuanto a portabilidad y facilidad de despliegue, demostrando que los entornos virtualizados son una herramienta clave en el desarrollo moderno. Además, Postman fue esencial para validar la correcta funcionalidad de los endpoints, permitiendo simular interacciones reales con la API de forma sencilla y eficiente.

En síntesis, esta práctica no solo fortaleció conocimientos sobre tecnologías específicas como Node.js, Express, MongoDB y Docker, sino que también permitió interiorizar buenas prácticas de desarrollo de software profesional, lo que es clave para enfrentar proyectos reales en entornos colaborativos o productivos.



---

### 9. **BIBLIOGRAFÍA**

* MongoDB Inc. (2024). *MongoDB Manual*. [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)
* Express.js Foundation. (2024). *Express Documentation*. [https://expressjs.com/](https://expressjs.com/)
* Mongoose Ltd. (2024). *Mongoose API Docs*. [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/)
* Docker Inc. (2024). *Docker Documentation*. [https://docs.docker.com/](https://docs.docker.com/)
* Postman. (2024). *Postman API Tool*. [https://www.postman.com/](https://www.postman.com/)

