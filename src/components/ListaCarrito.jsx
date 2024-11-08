import ProductoCarrito from './ProductoCarrito';

function ListaCarrito({ articulos, setCarrito, carrito }) {
  return (
    <>
      <div className="col">
        <h3 className="text-center">Carrito de compras</h3>
        {articulos.length === 0 ? (
          <p className="text-center">
            Por favor, seleccione uno o más productos para agregar al carrito.
          </p>
        ) : (
          <ul>
            {articulos.map((articulo) => (
              <ProductoCarrito
                key={articulo.id}
                articulo={articulo}
                setCarrito={setCarrito}
                carrito={carrito}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ListaCarrito;
