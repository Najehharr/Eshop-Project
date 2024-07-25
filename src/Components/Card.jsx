import React from "react";
import ListGroup from "./ListGroup";
import { produits } from "../data/produits";
import { useState } from "react";
import propTypes from "prop-types";
function Card(props) {
  const { type, couleur, marque, prix, solde, qtedispo } = props.produit;
  Card.defaultProps = {
    solde: "0",
  };
  Card.propTypes = {
    prix: propTypes.number.isRequired,
    qtedispo: propTypes.number.isRequired,
  };
  // [khater objet]
  const [over, setOver] = useState(false);
  return (
    <div
      className="common-height"
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      <div
        className="card"
        style={{
          paddingLeft: "30px",
          width: "15rem",
          color: "#212F3D",
          fontFamily: "Arial",

          verticalAlign: "middle",
        }}
      >
        <h2>
          {type} <br />
          {marque}
        </h2>

        <img
          style={{ width: "10rem", height: "15rem" }}
          src={props.produit.imgSrc}
          className="card-img-top"
          alt="..."
        />
      </div>
      <ListGroup produit={props.produit} />

      <ul className="list-group">
        <li key={prix} className="list-group-item">
          {solde > 0 ? (
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <p style={{ color: "gray" }}>
                    <strong>
                      <del>{prix} DT</del>
                    </strong>
                  </p>
                </div>
                <div className="col">
                  <p style={{ color: "red" }}>
                    <strong>{prix - (prix * solde) / 100} DT</strong>
                  </p>
                </div>
                <div className="col">{solde}%</div>
              </div>
            </div>
          ) : (
            <p>{prix} DT</p>
          )}
        </li>
      </ul>
      {over ? (
        <button style={{ width: "15rem" }}>Ajouter au panier</button>
      ) : null}
    </div>
  );
}

export default Card;
