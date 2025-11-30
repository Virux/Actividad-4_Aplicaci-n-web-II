import { useEffect, useContext } from "react";
import axios from "axios";
import { EquipoContext } from "../context/EquipoContext";
import EquipoForm from "../components/EquipoForm";

function Equipos() {
  const { equipos, setEquipos } = useContext(EquipoContext);

  useEffect(() => {
    axios.get("http://localhost:4000/api/equipos")
      .then(res => setEquipos(res.data));
  }, []);

  const agregarEquipo = (nuevo) => {
    axios.post("http://localhost:4000/api/equipos", nuevo)
      .then(res => setEquipos([...equipos, res.data]));
  };

  return (
    <div>
      <h2>Equipos Registrados</h2>

      <EquipoForm onAdd={agregarEquipo} />

      <ul>
        {equipos.map(eq => (
          <li key={eq.id}>
            {eq.marca} {eq.modelo} — {eq.estado} — ${eq.precioDia}/día
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Equipos;
