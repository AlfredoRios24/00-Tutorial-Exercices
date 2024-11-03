import '../CoreConcepts/CoreConcepts.css';

// eslint-disable-next-line react/prop-types
export function CoreConcepts({imagePath, title, description}){ //desestructuración de los parámetros
    return <div>
        <img src={imagePath} alt="..." />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
}


        {/* FORMA DE USAR UN LISTADO PARA INVOCAR EL ARRYA DE CORECONCEPTS
        <CoreConcepts {...CORE_CONCEPTS[1]}/>
        <CoreConcepts {...CORE_CONCEPTS[2]}/>
        <CoreConcepts
            imagePath={CORE_CONCEPTS[3].imagePath}
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            />
            {[
            <h1>Hola!!</h1>, <p>Bienvenidos!!</p>
          ]} */}