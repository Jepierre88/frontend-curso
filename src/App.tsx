import { useState } from "react";
import "./App.css";
import AppListElements from "./AppListElements";
// Los componentes son funciones
// Con la primera letra mayúscula, React los reconoce como componentes
export function App() {
  // LOGICA
  const [name, setName] = useState("Eliana")


  // RENDER o PARTE GRAFICA
  return (
    <div>
      <h1>
        {name}
      </h1>
      <input value={name} onChange={ (event)=>{
        setName(event.target.value)
      }}/>
      <AppListElements/>
    </div>
  );
}


// CTRL + Espacio para autocompletar