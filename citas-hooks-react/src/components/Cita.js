import React  from "react";

function Cita ({cita, eliminarCita,index}){
    return(
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Propietario: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button onClick={() => eliminarCita(index)} type="button" className="eliminar button u-full-width">Eliminar X</button>
        </div>
    )
}
export default Cita;