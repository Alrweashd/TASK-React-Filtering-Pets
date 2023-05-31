import React from "react";

function Type({ type }) {
  return (
    <>
      <select className="form-select" onChange={type}>
        <option value="" selected>
          All
        </option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>
    </>
  );
}
export default Type;
