import Producto from "./Producto";

function ListaArticulos({ articulos, setCarrito, carrito, setAlerta }) {
  return (
    <>
      <div className="col">
        <h3 className="text-center">Productos disponibles</h3>
        <ul>
          {articulos.map((articulo) => (
            <Producto
              key={articulo.id}
              articulo={articulo}
              setCarrito={setCarrito}
              carrito={carrito}
              setAlerta={setAlerta}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
export default ListaArticulos;
