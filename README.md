# Actividad-4_Aplicaci-n-web-II
Actividad 4 - Tecnología front end en la construcción de una aplicación web II

Aplicación Web II – Gestión de Alquiler de Equipos de Cómputo

La aplicación permite **registrar, consultar y gestionar equipos de cómputo** que se encuentran disponibles o alquilados dentro de una organización. Fue desarrollada utilizando tecnologías modernas tanto en el **front-end** como en el **back-end**, integrando comunicación mediante una **API REST**.

** Características principales

✔ Registro de equipos de cómputo  
✔ Consulta de equipos registrados  
✔ Manejo de estados: Disponible / Alquilado  
✔ API REST documentada con Swagger  
✔ Comunicación front–back mediante Axios  
✔ Manejo de estado global con Context API  
✔ Formulario controlado con useReducer  
✔ Navegación con React Router  
✔ Proyecto organizado en frontend y backend

---

**  Tecnologías utilizadas

### **Frontend**
- ReactJS
- React Router DOM
- Context API
- Hooks (useState, useEffect, useContext, useReducer)
- Axios
- JavaScript ES6+

### **Backend**
- Node.js
- Express.js
- CORS
- Swagger (swagger-jsdoc + swagger-ui-express)

# Cómo ejecutar el proyecto

A continuación se explican los pasos para correr **backend** y **frontend**.

---

# 1. Ejecución del Backend (Node.js + Express)

### Paso 1 — Ir a la carpeta del backend

El backend estará disponible en:

API REST → http://localhost:4000/api/equipos

Documentación Swagger → http://localhost:4000/api-docs

El frontend estará disponible en:

http://localhost:3000

```bash
cd backend

----
Instalar dependencias

npm install

----
Iniciar el servidor

node server.js
