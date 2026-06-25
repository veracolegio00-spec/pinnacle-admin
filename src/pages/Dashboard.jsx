import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Dashboard({ user }) {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Menú lateral */}
      <div style={{
        width: "200px",
        background: "#1e1e2f",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "20px"
      }}>
        <h2 style={{ marginBottom: "30px" }}>Pinnacle</h2>
        <button style={menuBtn}>Clientes</button>
        <button style={menuBtn}>Noticias</button>
        <button style={menuBtn}>Turnos</button>
        <button onClick={handleLogout} style={{ ...menuBtn, marginTop: "auto", background: "#e74c3c" }}>
          Cerrar sesión
        </button>
      </div>

      {/* Contenido principal */}
      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Dashboard</h1>
        <p>Bienvenido, {user?.email}</p>
      </div>

    </div>
  );
}

const menuBtn = {
  background: "none",
  border: "none",
  color: "white",
  textAlign: "left",
  padding: "10px 0",
  fontSize: "16px",
  cursor: "pointer",
  marginBottom: "10px"
};