import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ProductoLista({ producto, guardarRecargar }) {
  const eliminarProducto = id => {
    console.log("eliminando", id);
    //TODO: ELIMINAR LOS REGISTROS
    Swal.fire({
      title: "Estas Seguro?",
      text: "Un Platillo Eliminado no se puede recuperar!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async result => {
      if (result.value) {
        try {
          //const url = `http://localhost:4000/restaurant/${id}`;
          const url =`https://my-json-server.typicode.com/yaneth94/ProjectReact/restaurant/${id}`;
          const resultado = await axios.delete(url);
          if (resultado.status === 200) {
            Swal.fire("Eliminado!!", "El producto se ha eliminado.", "success");
            //Consultar la API nuevamente
            guardarRecargar(true);
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            type: "error",
            title: "Error",
            text: "Hubo un error Vuelve a intentarlo!",
          });
        }
      }
    });
  };
  return (
    <li
      className="list-group-item d-flex justify-content-lg-between"
      data-categoria={producto.categoria}
    >
      <p>
        {producto.nombrePlatillo}{" "}
        <span className="font-weight-bold">${producto.precioPlatillo}</span>
      </p>
      <div>
        <Link
          to={`/productos/editar/${producto.id}`}
          className="btn btn-success mr-2"
        >
          Editar
        </Link>
        <button
          type="button"
          className="btn btn-danger "
          onClick={() => eliminarProducto(producto.id)}
        >
          Eliminar &times;
        </button>
      </div>
    </li>
  );
}

export default ProductoLista;
