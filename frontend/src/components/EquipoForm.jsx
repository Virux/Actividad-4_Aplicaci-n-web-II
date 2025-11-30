import { useReducer } from "react";

const initialState = {
  marca: "",
  modelo: "",
  estado: "Disponible",
  precioDia: ""
};

function formReducer(state, action) {
  return { ...state, [action.field]: action.value };
}

function EquipoForm({ onAdd }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Registrar Equipo</h3>

      <input
        type="text"
        placeholder="Marca"
        onChange={(e) => dispatch({ field: "marca", value: e.target.value })}
      />

      <input
        type="text"
        placeholder="Modelo"
        onChange={(e) => dispatch({ field: "modelo", value: e.target.value })}
      />

      <select
        onChange={(e) => dispatch({ field: "estado", value: e.target.value })}
      >
        <option>Disponible</option>
        <option>Alquilado</option>
      </select>

      <input
        type="number"
        placeholder="Precio por día"
        onChange={(e) => dispatch({ field: "precioDia", value: e.target.value })}
      />

      <button>Guardar</button>
    </form>
  );
}

export default EquipoForm;
