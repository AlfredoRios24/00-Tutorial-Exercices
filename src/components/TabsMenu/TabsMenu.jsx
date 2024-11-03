


export default function TabsMenu ({
    // eslint-disable-next-line react/prop-types
    buttons=  <li><button>Boton de ejemplo</button></li>,
    // eslint-disable-next-line react/prop-types
    children= <p>Contenido por defecto</p>,
    // eslint-disable-next-line react/prop-types
    ButtonsContainer = "div"
}){
//const ButtonsContainer = buttonsContainer;
// al tener buttonscontainer en mayuscula lo que creamos es un COMPONENT
    return(
        <>
            <ButtonsContainer>
                {buttons}BOTONES
            </ButtonsContainer>
            {children} CONTENIDO DINÁMICO
        </>
    );
}

// TabsMenu.defaultProps = {
//     buttons: <li><button>Boton de ejemplo</button></li>,
//     children: <p>Texto de ejemplo</p>,
//     ButtonsContainer: "menu"
// };