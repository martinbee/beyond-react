import React from 'react';

function LiftType() {
  return (
    <select onChange={(evt) => console.log(evt.target.value)}>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  );
}

export default LiftType;
