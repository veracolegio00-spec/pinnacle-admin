import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(userCredential.user);

      console.log(userCredential.user);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      {!user ? (
        <form
          onSubmit={handleLogin}
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            width: "350px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Panel Admin - Pinnacle</h2>

          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
            }}
          >
            Iniciar sesión
          </button>
        </form>
      ) : (
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            width: "450px",
            textAlign: "center",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h1>Panel Admin - Pinnacle</h1>

          <p>Bienvenido</p>

          <strong>{user.email}</strong>

          <br />
          <br />

          <button>Gestionar Clientes</button>

          <br />
          <br />

          <button>Gestionar Noticias</button>

          <br />
          <br />

          <button>Ver Turnos</button>

          <br />
          <br />

          <button onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
}

export default App;