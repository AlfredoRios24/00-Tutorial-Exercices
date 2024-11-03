import { useState } from "react";
import "./SelectedConcepts.css"
import { content } from "../../constants";
import reactImage from '../../assets/react-image1.png';


export function SelectedConcepts (){
    const [activeContentIndex, setActiveContentIndex] = useState(0);
    //EJERCICIO: COMO PODRIA AÑADIR UN NUEVO ESTADO PARA QUE AL REENDERIZAR LA WEB NO ME SALGA NADA SELECCIONADO
        //Custom Hooks??
    
    return <div>
            <header>
                <img src={reactImage} alt="React logo" />
    <div>
        <h1>React.js</h1>
        <p>
            Utilizamos la librería React para el desarrollo de esta interfaz de
            usuario web.
        </p>
    </div>
</header>

    <div id="tabs">
        <menu>
            <button
        className={activeContentIndex === 0 ? "active" : ""}
        onClick={() => setActiveContentIndex(0)}
            >
        ¿Por qué React?
            </button>
            <button
        className={activeContentIndex === 1 ? "active" : ""}
        onClick={() => setActiveContentIndex(1)}
            >
        Características Principales
        </button>
        <button
        className={activeContentIndex === 2 ? "active" : ""}
        onClick={() => setActiveContentIndex(2)}
        >
        Recursos Relacionados
        </button>
        <button
        className={activeContentIndex === 3 ? "active" : ""}
        onClick={() => setActiveContentIndex(3)}
        >
        JavaScript vs React
        </button>
    </menu>
    <div id="tab-content">
        <ul>
        {content[activeContentIndex].map((item) => (
            <li key={item}>{item}</li>
        ))}
        </ul>
    </div>
    </div>
    </div>
    
}

export default SelectedConcepts;
