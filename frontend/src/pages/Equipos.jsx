import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { EquipoContext } from "../context/EquipoContext";
import EquipoForm from "../components/EquipoForm";

function Equipos() {
  const { equipos, setEquipos } = useContext(EquipoContext);
  const [busqueda, setBusqueda] = useState("");

  // Cargar equipos desde el backend
  useEffect(() => {
    axios.get("http://localhost:4000/api/equipos")
      .then(res => setEquipos(res.data));
  }, [setEquipos]);

  // Nuevo equipo
  const agregarEquipo = (nuevo) => {
    axios.post("http://localhost:4000/api/equipos", nuevo)
      .then(res => {
        setEquipos([...equipos, res.data]);
        alert("Equipo registrado exitosamente.");
      });
  };

  // Contadores 
  const disponibles = equipos.filter(e => e.estado === "Disponible").length;
  const alquilados = equipos.filter(e => e.estado === "Alquilado").length;

  // Filtro de búsqueda 
  const equiposFiltrados = equipos.filter(e =>
    e.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
    e.estado.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Estilos 
  const cardStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    backgroundColor: "#fafafa"
  };

  const disponibleStyle = { color: "green", fontWeight: "bold" };
  const alquiladoStyle = { color: "red", fontWeight: "bold" };

  return (
    <div>
      <h2>Equipos Registrados</h2>

      {/* Dashboard simple */}
      <div style={{ marginBottom: "15px" }}>
        <strong>Total:</strong> {equipos.length} |{" "}
        <strong style={{ color: "green" }}>Disponibles:</strong> {disponibles} |{" "}
        <strong style={{ color: "red" }}>Alquilados:</strong> {alquilados}
      </div>

      {/* Formulario */}
      <EquipoForm onAdd={agregarEquipo} />

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar por marca o estado..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: "5px", width: "250px", marginBottom: "15px" }}
      />

      {/* Listado de equipos */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {equiposFiltrados.map(eq => (
          <li key={eq.id} style={cardStyle}>
            <h3>{eq.marca} {eq.modelo}</h3>
            <p><strong>Precio por día:</strong> ${eq.precioDia}</p>
            <p>
              <strong>Estado:</strong>{" "}
              <span style={eq.estado === "Disponible" ? disponibleStyle : alquiladoStyle}>
                {eq.estado}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Equipos;
