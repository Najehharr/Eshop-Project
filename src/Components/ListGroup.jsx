import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListGroup.css";
import { produits } from "../data/produits";
function ListGroup(props) {
  const villes = [
    "Tunis",
    "Sousse",
    "Tozeur",
    "Sfax",
    "Sidi Bouzid",
    "Tataouine",
  ];

  const cars = [
    "Marque : Asus",
    "Couleur : Noir",
    "Ram : 8G",
    "Disque : 512G SSD",
    "Processeur : IP 15",
    "Description : 15.6",
  ];

  const Zettas = ["Hella", "Mariem", "Najeh", "Bilel", "Yesser", "Amal"];
  const filtred = villes.filter((y) => {
    return y.startsWith("T");
  });

  // console.log(filtred);

  if (props.produit.type === "PC Portable") {
    return (
      <div className="common-height">
        <ul className="list-group">
          <li className="list-group-item">
            <b>Type</b>: {props.produit.type}
          </li>
          <li className="list-group-item">
            <b>Marque</b>: {props.produit.marque}
          </li>
          <li className="list-group-item">
            <b>Couleur</b>: {props.produit.couleur}
          </li>
          <li className="list-group-item">
            <b>Ram</b>: {props.produit.ram}
          </li>
          <li className="list-group-item">
            <b>Disque</b>: {props.produit.disque}
          </li>
          <li className="list-group-item">
            <b>Processeur</b>: {props.produit.processeur}
          </li>
          <li className="list-group-item">
            <b>Description</b>: {props.produit.description}
          </li>
        </ul>
      </div>
    );
  } else if (props.produit.type === "Réfrigérateur") {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Type:</b> {props.produit.type}
          </li>
          <li className="list-group-item">
            <b>Marque:</b> {props.produit.marque}
          </li>
          <li className="list-group-item">
            <b>Référence:</b> {props.produit.référence}
          </li>
          <li className="list-group-item">
            <b>Couleur:</b> {props.produit.couleur}
          </li>
          <li className="list-group-item">
            <b>Volume:</b> {props.produit.volume}
          </li>
          <li className="list-group-item">
            <b>Classe énergétique:</b> {props.produit.classeénergétique}
          </li>
          <li className="list-group-item">
            <b>Description:</b> {props.produit.description}
          </li>
        </ul>
      </div>
    );
  } else if (props.produit.type === "Microonde") {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Type:</b> {props.produit.type}
          </li>
          <li className="list-group-item">
            <b>Marque:</b> {props.produit.marque}
          </li>
          <li className="list-group-item">
            <b>Taille:</b> {props.produit.taille}
          </li>
          <li className="list-group-item">
            <b>Couleur:</b> {props.produit.couleur}
          </li>
          <li className="list-group-item">
            <b>Chaleur:</b> {props.produit.chaleur}
          </li>
        </ul>
      </div>
    );
  }
}

export default ListGroup;

// <div>
//   {villes.length === 0 ? (
//     <p>Liste vide</p>
//   ) : (
//     <ul className="list-group">
//       {filtred.map((ville) =>
//         ville.startsWith("S") ? (
//           <li key={ville} className="list-group-item">
//             {ville}
//           </li>
//         ) : null
//       )}

//     </ul>

//   )}
// </div>

// if (villes.length === 0) {
//   return (
//     <div>
//       <div>
//         <h1>Villes</h1>
//         <p>Liste vide</p>
//       </div>
//     </div>
//   );
// }
// if (villes.length != 0) {
//   return (
//     <ul className="list-group">
//       {villes.map((ville) => (
//         <li key={ville} className="list-group-item">
//           {ville}
//         </li>
//       ))}
//     </ul>
//   );
// }

/* <ul className="list-group">
        <li className="list-group-item">Type :{props.type}</li>
        <li className="list-group-item">Marque :{props.marque}</li>
        <li className="list-group-item">Couleur :{props.couleur}</li>
        <li className="list-group-item">Ram :{props.ram}</li>
        <li className="list-group-item">Couleur :{props.couleur}</li>
        <li className="list-group-item">processeur :{props.processeur}</li>
        <li className="list-group-item">descrption :{props.descrption}</li>
      </ul> */

/* <ul className="list-group">
        {villes.map((ville) => (
          <li key={ville} className="list-group-item">
            {ville}
          </li>
        ))}
      </ul>
      <div>
        Zetta
        <ul className="list-group">
          {Zettas.map((zetta) => (
            <li key={zetta} className="list-group-item">
              Bonjour {zetta}
            </li>
          ))}
        </ul>
      </div> */
