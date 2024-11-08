function ProductoCarrito({ articulo, setCarrito, carrito }) {
  return (
    <>
      <li
        className="list-unstyled border p-2"
        onClick={() => {
          if (articulo.cantidad === 1) {
            setCarrito(
              carrito.filter(
                (articuloCarrito) => articuloCarrito.id !== articulo.id
              )
            );
          } else {
            const nuevoCarrito = carrito.map((articuloCarrito) => {
              if (articuloCarrito.id === articulo.id) {
                return {
                  ...articuloCarrito,
                  cantidad: articuloCarrito.cantidad - 1,
                };
              }
              return articuloCarrito;
            });
            setCarrito(nuevoCarrito);
          }
        }}
      >
        <strong>
          <i className="bi bi-dash-circle"></i> {articulo.name}
        </strong>{' '}
        (${articulo.unitPrice} c/u) (Cant. {articulo.cantidad})
      </li>
    </>
  );
}

export default ProductoCarrito;
