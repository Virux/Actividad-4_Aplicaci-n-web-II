// backend/server.js
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();
app.use(cors());
app.use(express.json());

// Swagger config
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Equipos de Cómputo en Alquiler",
      version: "1.0.0",
      description: "API para gestionar equipos de cómputo alquilados",
    },
    servers: [{ url: "http://localhost:4000" }],
  },
  apis: ["./server.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// "Base de datos" en memoria
let equipos = [
  { id: 1, marca: "Dell", modelo: "Latitude 5420", estado: "Disponible", precioDia: 15 },
  { id: 2, marca: "HP", modelo: "Pavilion 15", estado: "Alquilado", precioDia: 18 },
];

/**
 * @swagger
 * components:
 *   schemas:
 *     Equipo:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         marca:
 *           type: string
 *         modelo:
 *           type: string
 *         estado:
 *           type: string
 *         precioDia:
 *           type: number
 */

/**
 * @swagger
 * /api/equipos:
 *   get:
 *     summary: Obtener todos los equipos
 */
app.get("/api/equipos", (req, res) => {
  res.json(equipos);
});

/**
 * @swagger
 * /api/equipos:
 *   post:
 *     summary: Registrar un nuevo equipo
 */
app.post("/api/equipos", (req, res) => {
  const { marca, modelo, estado, precioDia } = req.body;
  const nuevoEquipo = {
    id: equipos.length + 1,
    marca,
    modelo,
    estado,
    precioDia
  };
  equipos.push(nuevoEquipo);
  res.status(201).json(nuevoEquipo);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend en http://localhost:${PORT}`);
  console.log(`Swagger docs en http://localhost:${PORT}/api-docs`);
});
