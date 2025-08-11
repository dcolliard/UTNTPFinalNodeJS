# 🛍️ TP Final - Angular

Repositorio correspondiente al **Trabajo Práctico Final** del curso de **Angular** en la **Diplomatura en Professional Full-Stack Developer** del Centro de e-Learning **UTN FRBA**.

- 👨‍🎓 Alumno: **David Colliard Schneider**  
- 📧 Contacto: [carloscolliard@gmail.com](mailto:carloscolliard@gmail.com)

---

## 🌐 Demo en línea

Prueba la aplicación desplegada en Vercel:

👉 **[https://utntp-final-angular.vercel.app/](https://utntp-final-angular.vercel.app/)**

---
## 🧩 Funcionalidades principales

- 🛍️ Ver listado de productos.
- 🔍 Ver detalles de cada producto.
- 💳 Simular compra de un producto.
- 📬 Enviar mensaje a través del formulario de contacto.
- 🚫 Página personalizada para rutas no encontradas (404).

---

## 🛠️ Tecnologías utilizadas

- 🧱 **Angular 20** – Framework frontend
- 🎨 **Bootstrap 5** – Para estilos rápidos y responsivos
- 🔀 **Angular Router** – Manejo de rutas y navegación
- 📤 **Vercel** – Deploy y hosting

---
## 🚀 ¿Cómo correr el proyecto localmente?

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/BikeStoreApp.git
   ```
2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar servidor**
  
   ```bash
   npm run dev
   ```

4. **Acceder en navegador**

     http://localhost:4200


# 🎬 API CRUD de Películas con Node.js, Express y MongoDB

Este proyecto es una API REST desarrollada con **Node.js**, **Express** y **MongoDB** (a través de **Mongoose**), que permite gestionar un catálogo de películas.  
Incluye operaciones CRUD completas y está preparado para integrarse con **MongoDB Atlas** o una instancia local.

---

## 🚀 Características

- Conexión a **MongoDB Atlas** o local mediante Mongoose.
- CRUD de películas (`Create`, `Read`, `Update`, `Delete`).
- Rutas organizadas por recursos (`/api/movies`).
- Modelo Mongoose con validaciones básicas.
- Soporte para variables de entorno con `.env`.
- Compatible con **Postman** para pruebas rápidas.

---

## 📂 Estructura del proyecto

```
UTNTPFinalNodeJS/
├── controllers/        # Controladores de la lógica de negocio
│   └── movie.controller.js
├── database.config.js  # Configuración y conexión a MongoDB
├── models/             # Modelos de datos Mongoose
│   └── MovieModel.js
├── repositories/       # Acceso a datos (queries a MongoDB)
│   └── movie.repository.js
├── routes/             # Definición de rutas de la API
│   └── movie.route.js
├── services/           # Lógica de negocio intermedia
│   └── movie.service.js
├── server.js           # Punto de entrada principal
├── package.json
├── .env                # Variables de entorno (no subir a git)
└── README.md           # Este archivo
```

---

## ⚙️ Requisitos previos

- **Node.js** v18 o superior
- **npm** o **yarn**
- Cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (opcional, para usar en la nube)
- **Postman** o similar para pruebas

---

## 📦 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu_usuario/UTNTPFinalNodeJS.git
cd UTNTPFinalNodeJS
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la raíz con:
```
MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/test
PORT=8080
```
> **⚠️ Nota:** No incluyas comillas ni espacios. Ajusta `<usuario>`, `<password>` y `<cluster>` a tus credenciales reales.

4. Iniciar el servidor:
```bash
npm start
```
El servidor escuchará en:  
[http://localhost:8080](http://localhost:8080)

---

## 📚 Endpoints principales

### Listar todas las películas
```http
GET /api/movies
```

### Obtener película por ID
```http
GET /api/movies/:id
```

### Crear nueva película
```http
POST /api/movies
Content-Type: application/json

{
  "title": "Inception",
  "year": 2010,
  "genre": "Sci-Fi",
  "durationMin": 148
}
```

### Actualizar película
```http
PUT /api/movies/:id
Content-Type: application/json

{
  "title": "Inception (Director's Cut)"
}
```

### Eliminar película
```http
DELETE /api/movies/:id
```

---

## 🛠 Tecnologías usadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📌 Notas

- La colección utilizada es **`movies`** en la base definida por `MONGO_URI`.
- Para entornos de desarrollo, puedes usar [MongoDB Compass](https://www.mongodb.com/products/compass) para visualizar la base de datos.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.  
Puedes usarlo libremente para fines educativos o comerciales.
