import { useState } from "react";

function App() {
  // 3 box 1. state , etat donnée 2.comportement 03.affichage;render

  const [compteur, setCompteur] = useState(1); // tableau qu'on va destructuré pour récuperer la valeur du 1 er index le compteur et la variable du state et on pourra le modifier quavec le set compteur

  const handleClick = () => {
    setCompteur(compteur + 1);
    console.log("compteur");
  };
  return (
    <div>
      <h1> {compteur} </h1>
      <button onClick={handleClick}>on augmente en cliquant ici</button>
    </div>
  );
}

export default App;
