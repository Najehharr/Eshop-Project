import React from "react";

function Pc(props) {
  if (props.type === "PC Portable") {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">Marque: {props.marque}</li>
          <li className="list-group-item">Couleur: {props.couleur}</li>
          <li className="list-group-item">Ram: {props.ram}</li>
          <li className="list-group-item">Disque: {props.disque}</li>
          <li className="list-group-item">Processeur: {props.processeur}</li>
          <li className="list-group-item">Description: {props.description}</li>
        </ul>
      </div>
    );
  }
  return null;
}

export default Pc;
