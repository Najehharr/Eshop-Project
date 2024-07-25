import React from "react";

function Microonde(props) {
  if (props.type === "Microonde") {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Type:</b> {props.type}
          </li>
          <li className="list-group-item">
            <b>Marque:</b> {props.marque}
          </li>
          <li className="list-group-item">
            <b>Taille:</b> {props.taille}
          </li>
          <li className="list-group-item">
            <b>Couleur:</b> {props.couleur}
          </li>
          <li className="list-group-item">
            <b>Chaleur:</b> {props.chaleur}
          </li>
        </ul>
      </div>
    );
  }
  return null;
}

export default Fridge;
