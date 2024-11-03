
import "./App.css";
import { Header } from './components/Header/Header.jsx';
import { SelectedConcepts } from "./components/SelectedConcepts/SelectedConcepts.jsx";
import ExamplesSection from "./components/ExamplesSection/ExamplesSection.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection/CoreConceptsSection.jsx";


//template literals ``(comillas invertidas y concatenar el ${}...)
function App() {
  return (
    <>
      <SelectedConcepts/>
      <Header/>
      <CoreConceptsSection/>
      <ExamplesSection/>
      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </>
  );
}
export default App;