import React from 'react';

function Criptomoneda({criptomoneda}){
    const { FullName, Name } = criptomoneda;
    return (
        <option value={Name}>{FullName}</option>
    );

}
export default Criptomoneda;