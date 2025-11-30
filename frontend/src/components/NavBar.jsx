import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ padding: "1rem", background: "#eaeaea" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Inicio</Link>
      <Link to="/equipos">Equipos</Link>
    </nav>
  );
}
export default NavBar;
