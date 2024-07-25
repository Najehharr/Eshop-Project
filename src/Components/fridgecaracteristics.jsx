import React from "react";

function Fridge(props) {
  if (props.type === "Réfrigérateur") {
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
            <b>Référence:</b> {(props.référence = "C402RLCN")}
          </li>
          <li className="list-group-item">
            <b>Couleur:</b> {props.couleur}
          </li>
          <li className="list-group-item">
            <b>Volume:</b> {props.volume}
          </li>
          <li className="list-group-item">
            <b>Classe énergétique:</b> {props.classeénergétique}
          </li>
          <li className="list-group-item">
            <b>Description:</b> {props.description}
          </li>
        </ul>
      </div>
    );
  }
  return null;
}

export default Fridge;
