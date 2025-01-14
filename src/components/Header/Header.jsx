import reactImage from '../../assets/react-image1.png';
import '../Header/Header.css';

const reactTitles = ['React Fundamentos', 'React Bases', 'React Principios'];

function getRandomIntInRange(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function Header() {
    const titleWinner = reactTitles[getRandomIntInRange(0, 2)];
    console.log("El componente Header esta siendo renderizado y ejecutado!");
    return (
    <header>
        <img src={reactImage} alt="React logo" />
        <h1>{titleWinner}</h1>
        {/* De esta forma podríamos hacerlo directamente en una línea
        <h1>{reactTitles[getRandomIntInRange(0, 2)]}</h1> */}
        <p>
        ¡Conceptos fundamentales de React que necesitas conocer para desarrollar
        cualquier app con esta famosa librería!
        </p>
    </header>
    );
}