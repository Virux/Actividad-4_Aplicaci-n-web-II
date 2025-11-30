import { createContext, useState } from "react";

export const EquipoContext = createContext();

export function EquipoProvider({ children }) {
  const [equipos, setEquipos] = useState([]);

  return (
    <EquipoContext.Provider value={{ equipos, setEquipos }}>
      {children}
    </EquipoContext.Provider>
  );
}
