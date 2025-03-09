# 📦 API de gestión de pedidos - NestJS

🚀 **API RESTful** desarrollada con **NestJS, Prisma y MongoDB Atlas** para la gestión de pedidos y autenticación de usuarios mediante **JWT**.

---

## 📌 **Características**
✅ **Autenticación con JWT** (Registro e inicio de sesión).  
✅ **Gestión de usuarios** (registro y autenticación).  
✅ **Creación y administración de órdenes** con paquetes asociados.  
✅ **Base de datos MongoDB Atlas** con Prisma ORM.  
✅ **Validación de datos con DTOs y Class-Validator**.  


## 📌 **Características extras**
✅ **Endpoint para la obtención de las ordenes registradas** Retorna la información pertinente de todas las ordenes en un array.
---

## 🛠 **Tecnologías utilizadas**
| Tecnología | Descripción |
|------------|------------|
| **NestJS** | Framework para construir APIs escalables en Node.js. |
| **Prisma ORM** | Manejo eficiente de base de datos con MongoDB. |
| **MongoDB Atlas** | Base de datos NoSQL en la nube. |
| **JWT** | Autenticación segura basada en tokens. |
| **Passport.js** | Middleware de autenticación. |
| **Bcrypt** | Hashing seguro de contraseñas. |
| **Postman** | Pruebas de endpoints de la API. |

---

## 📦 **Instalación**
### **1️⃣ Clonar el repositorio**
```sh
git clone https://github.com/CHERNANDEZ-DEV/package-manager-server.git
cd package-manager-server
```

### **2️⃣ Instalar dependencias**
```sh
npm install
```

### **3️⃣ Configurar variables de entorno**
Crear un archivo .env en la raíz del proyecto y agregar:
```sh
DATABASE_URL="mongodb+srv://usuario:password@cluster.mongodb.net/nestjsDB?retryWrites=true&w=majority"
JWT_SECRET=""
PORT=3001
```
🔹 Reemplazar usuario y password con las credenciales de MongoDB Atlas.

### **4️⃣ Configurar la base de datos**

Ejecutar los siguientes comandos para sincronizar Prisma con MongoDB Atlas:

```sh
npx prisma generate
npx prisma db push
```
### **5️⃣ Iniciar el servidor**

```sh
npm run start:dev
```
🔹 El servidor estará disponible en http://localhost:3001.

---

## 🛠 **Endpoinsts de la API**

### 📌 Autenticación (`/auth`)

| Método | Ruta            | Descripción                              |
|--------|----------------|------------------------------------------|
| `POST` | `/auth/register` | Registra un nuevo usuario.              |
| `POST` | `/auth/login`    | Inicia sesión y devuelve un token JWT.  |


### 📌 Órdenes (`/orders`)

| Método | Ruta            | Descripción                              |
|--------|----------------|------------------------------------------|
| `POST` | `/orders` | Registra una nueva orden.              |
| `GET` | `/orders`    | Obtiene todas las ordenes  |


🔹Nota: Para acceder a las rutas protegidas /orders, se debe autenticar primero y enviar el JWT en los headers de la petición.

---

## 📧 Contacto

📮 **Carlos Hernández**  

[![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?logo=github)](https://github.com/CHERNANDEZ-DEV)  

 [📩 chernandez-27@outlook.com](mailto:chernandez-27@outlook.com)
