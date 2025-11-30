import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Equipos from "./pages/Equipos";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/equipos" element={<Equipos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
