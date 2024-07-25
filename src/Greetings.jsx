import React from "react";

function Greetings(){
 
    return (<div> 
        <h1>Bonjour Najeh</h1>
        <p>La date et l'heure actuelles sont : {new Date().toLocaleDateString()}</p>
        </div>
    
)}
export default Greetings;