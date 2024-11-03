import '../TabButton/TabButton.css'

//la propiedad children se establece por defecto: ya que no se dela
// component composition

//prop de eventos ...on+(evento)

/*
puedes elegir una prop propia y llamarla igual a la PROP DE EVENTO, en este caso onClick:
    <button onClick ¡EVENT DE REACT¡={onClick !NOMBRE DE UNA PROP!}>{children}</button>
        En la App.jsx
    <TabButton onClick={handleClickMenu}>Componentes</TabButton>
        Aqui podemos observar que el onClick es el NOMBRE DE LA PROP, ya que el del EVENT DE REACT esta dentro
        de la funciuon TabButton con un valor de retorno en el componente hijo o CHILDREN.
*/
// eslint-disable-next-line react/prop-types
export default function TabButton ({children, title, ...events}){

    return (
        <li title={title}>
        <button {...events}>{children}</button>
        </li>
    );
    }
//..................................................................

/*
import '../TabButton/TabButton.css'
export function TabButton ({children, onClick, }){

    return (
    React.createElement(
        'li',
        null,
            React.createElement(
                'button',
                {onClick: onClick},
                children
            )
        )
    )
}

*/