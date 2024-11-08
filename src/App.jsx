import "./App.css";
import ListaArticulos from "./components/ListaArticulos";
import articulos from "./articulos.json";
import { useState } from "react";
import ListaCarrito from "./components/ListaCarrito";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [alerta, setAlerta] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ListaArticulos
            articulos={articulos}
            setCarrito={setCarrito}
            carrito={carrito}
            setAlerta={setAlerta}
          />
        </div>

        <div className="col">
          <ListaCarrito
            articulos={carrito}
            setCarrito={setCarrito}
            carrito={carrito}
          />
          {alerta && <div className="alert alert-warning mt-3">{alerta}</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
