
// eslint-disable-next-line react/prop-types
export default function Section ({title, children, ...props }){
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

/*
REST => es el objeto de resto de propiedades
SPRIT => esparcir el resto de propiedades agrupadas en el prop (REST) en mi elemento Section para que se asignen de forma automatica
*/