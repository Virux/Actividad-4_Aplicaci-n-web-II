import { useReducer } from "react";

const initialState = {
  marca: "",
  modelo: "",
  estado: "Disponible",
  precioDia: "",
  descripcion: ""
};

function formReducer(state, action) {
  return { ...state, [action.field]: action.value };
}

function EquipoForm({ onAdd }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ VALIDACIÓN BÁSICA (PUNTO 3)
    if (!state.marca || !state.modelo || !state.precioDia) {
      alert("Por favor complete todos los campos obligatorios.");
      return;
    }

    onAdd(state);

    // Limpiar formulario después de guardar
    dispatch({ field: "marca", value: "" });
    dispatch({ field: "modelo", value: "" });
    dispatch({ field: "precioDia", value: "" });
    dispatch({ field: "descripcion", value: "" });
    dispatch({ field: "estado", value: "Disponible" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Registrar Equipo</h3>

      <input
        type="text"
        placeholder="Marca *"
        value={state.marca}
        onChange={(e) =>
          dispatch({ field: "marca", value: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Modelo *"
        value={state.modelo}
        onChange={(e) =>
          dispatch({ field: "modelo", value: e.target.value })
        }
      />

      <select
        value={state.estado}
        onChange={(e) =>
          dispatch({ field: "estado", value: e.target.value })
        }
      >
        <option>Disponible</option>
        <option>Alquilado</option>
      </select>

      <input
        type="number"
        placeholder="Precio por día *"
        value={state.precioDia}
        onChange={(e) =>
          dispatch({ field: "precioDia", value: e.target.value })
        }
      />

      <textarea
        placeholder="Descripción del equipo"
        value={state.descripcion}
        onChange={(e) =>
          dispatch({ field: "descripcion", value: e.target.value })
        }
      />

      <button type="submit">Guardar</button>
    </form>
  );
}

export default EquipoForm;
