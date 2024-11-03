import '../ExamplesSection/ExamplesSection.css';

import Section from "../Section/Section.jsx";
import TabButton from "../TabButton/TabButton";
import TabsMenu from '../TabsMenu/TabsMenu.jsx';

import { useState } from "react";
import { EXAMPLES } from '../../data.js';



export default function ExamplesSection (){
    //selectedTopic (tiene el valor inicial del useState: "Por favor...") y el setSelectedTopic (siempre será una funcion)= tendrà el nuevo valor que le asignemos
const [selectedTopic, setSelectedTopic] = useState(null); //solo se puede llamar en la parte mas superior del componente
function handleClickMenu(selectedButton){
    setSelectedTopic(selectedButton);
  console.log(`Ey! Estas pulsando el boton ${selectedTopic}`); //se ejecuta justo antes de la nueva renderización del estado.
}
console.log("El componente App esta siendo renderizado y ejecutado!");

let tabContent = <p>
Aquí se va a mostrar información sobre una característica de React,
para ello, elige una opción del menú
</p>;

if (selectedTopic){
    tabContent = (<div id='tab-content'>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
    <code>
        {EXAMPLES[selectedTopic].code}
    </code>
    </pre>
</div>
    );
}

const buttons = Object.values(EXAMPLES).map((button, index) =>
<TabButton key = {index} onClick={() => handleClickMenu(button.key)}>{button.title}</TabButton>
);

    return (
        <Section title ="Ejemplos React" id="reactExamples" className="miClase">
            <TabsMenu  ButtonsContainer= "menu" buttons= {<> {buttons} </> }>
                {tabContent}
            </TabsMenu>
            <menu></menu>
        </Section>
    );
}

//Se puede optmizar este tipo de referencia:
//<TabButton isSelected={selectedTopic === 'state'} onClick={()=>handleClickMenu("state")}>Estados</TabButton>
// para ello hay que crear un nuevo componente PLANTILLA