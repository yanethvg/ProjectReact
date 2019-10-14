import React, { useState, Fragment } from "react";

function Formulario({ crearCita }) {
  const citaInicial = {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  };
  const [cita, guardarCita] = useState(citaInicial,);
  const actualizarState = e => {
    guardarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  const enviarCita = e => {
    e.preventDefault();
    //console.log(cita);
    // Pasar la cita hacia el componente principal
    crearCita(cita);
    //Reiniciar el state(reiniciar el form)
    guardarCita(citaInicial);
  };
  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form onSubmit={enviarCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={cita.mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          onChange={actualizarState}
          value={cita.propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          name="fecha"
          onChange={actualizarState}
          value={cita.fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          name="hora"
          onChange={actualizarState}
          value={cita.hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={cita.sintomas}
        ></textarea>

        <button type="submit" className="button-primary u-full-width">
          Agregar
        </button>
      </form>
    </Fragment>
  );
}

export default Formulario;
