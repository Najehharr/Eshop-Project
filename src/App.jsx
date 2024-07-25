import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greetings from "./Greetings";
import React from "react";
import ListGroup from "./Components/ListGroup";
import Card from "./Components/Card";
import { produits } from "./data/produits";

// class App extends React.Component{
//   render(){
//     return(
//       <h1>Bonjour zetta</h1>
//     )
//   }
// }

function App() {
  return (
    <div>
      <h1 className="Eshop">Bienvenue chez Eshop</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {produits.map((prod) => (
          <Card key={prod.id} produit={prod} />
        ))}
        {/* <Card
          imgSrc="src/assets/acerpc.jpg"
          type="PC Portable"
          marque="ACER"
          couleur="Gris"
          ram="18G"
          disque="SSD"
          processeur="IP 15"
          description="15.6"
        />
        <Card
          imgSrc="src/assets/lenovopc.jpg"
          type="PC Portable"
          marque="Hp"
          couleur="Noir"
          ram="18G"
          disque="SSD"
          processeur="IP 15"
          description="15.6"
        />
        <Card
          imgSrc="src/assets/LG.jpg"
          type="Réfrigérateur"
          marque="LG"
          référence="C402RLCN"
          couleur="PLATINIUM/SILVER"
          volume="327L"
          classeénergétique="B"
          description="15.NO FROST"
        />
        <Card
          imgSrc="src/assets/microonde.jpg"
          type="Microonde"
          marque="LG"
          taille="Entre 27 et 40cm"
          couleur="PLATINIUM/SILVER"
          chaleur="pulsée"
        />
        <Card
          imgSrc="src/assets/RT40K500JS8.jpg"
          type="Réfrigérateur"
          marque="SAMSUNG"
          référence="C402RLCN"
          couleur="PLATINIUM/SILVER"
          volume="327L"
          classeénergétique="B"
          description="15.NO FROST"
        />
        <Card
          imgSrc="src/assets/OIP.jpeg"
          type="Microonde"
          marque="SAMSUNG"
          taille="Entre 27 et 40cm"
          couleur="Noir"
          chaleur="pulsée"
        /> */}
      </div>
    </div>
  );
}

export default App;
