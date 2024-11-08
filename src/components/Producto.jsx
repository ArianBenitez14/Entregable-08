function Producto({ articulo, setCarrito, carrito, setAlerta }) {
  function agregarProducto() {
    if (
      (articulo.id === 20 || articulo.id === 21) &&
      carrito.find((objeto) => objeto.id === 20) >= 5
    ) {
      setAlerta(
        "Lo sentimos. No es posible comprar más unidades. Otras familias también necesitan abastecerse."
      );
      console.log("pepe");
      return undefined;
    } else if (
      carrito.some((articuloCarrito) => articulo.id === articuloCarrito.id)
    ) {
      const nuevoCarrito = carrito.map((articuloCarrito) => {
        if (articuloCarrito.id === articulo.id) {
          return {
            ...articuloCarrito,
            cantidad: articuloCarrito.cantidad + 1,
          };
        }
        return articuloCarrito;
      });
      setCarrito(nuevoCarrito);
    } else {
      setCarrito((valorActualDelCarrito) => [
        ...valorActualDelCarrito,
        { ...articulo, cantidad: 1 },
      ]);
    }
  }

  return (
    <>
      <li
        className="list-unstyled border p-2 "
        onClick={() => {
          agregarProducto();
        }}
      >
        <strong>
          <i className="bi bi-plus-circle"></i> {articulo.name}
        </strong>{" "}
        (${articulo.unitPrice} c/u)
      </li>
    </>
  );
}
export default Producto;
