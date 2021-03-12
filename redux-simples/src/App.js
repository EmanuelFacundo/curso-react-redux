import logo from './logo.svg';
import './App.css';
import Intervalo from './components/Intervalo';
import Sorteio from './components/Sorteio';
import Media from './components/Media';
import Soma from './components/Soma';


function App() {


  return (
    <div className="App">
      <h1>Exercicio React-Redux(simples)</h1>

      <div className="linha">
        <Intervalo/>
      </div>

      <div className="linha">
        <Media/>
        <Soma/>
        <Sorteio/>
      </div>
      
    </div>
  );
}

export default App;
