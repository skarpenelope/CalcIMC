import logo from './logo.svg';
import './App.css';
import fitimg from "./fitimg.svg"
import React, {useState} from 'react';

//#6563FF


function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [emoji, setEmoji] = useState('')

  const calcularImc = (e) => {
    e.preventDefault();
    if(peso && altura) {
      const alturaEmMetros = parseFloat(altura);
      const pesoemkg = parseFloat(peso);

      const imc = (pesoemkg/(alturaEmMetros*alturaEmMetros)).toFixed(2);

      setResultado(imc)
      setEmoji(EmojiForImc(imc))

    }
  };
  return (
    
    
    <div className="App">
      <header></header>

      <main id="container">
        <section id="img" alt="fitness">
          <img src={fitimg}/>

        </section>
        <div className="calculadora">
          <section id="calculator">
            <form id="forms" onSubmit={calcularImc}>
              <h1>Calculadora - IMC</h1>
              <div className="input-box">
                <label htmlFor="pesox">
                  Peso em kg
                </label>

                <div className="icon-weight">
                  <span class="material-symbols-outlined">
                    weight
                  </span>
                  <input type="number" id="weight" value={peso} onChange={(e) => setPeso(e.target.value)} required/>
                  <span>kg</span>
                </div>

                <label htmlFor="alturay">Altura em metros</label>

                <div className="icon-height">
                <div className="icon-weight">
                  <span class="material-symbols-outlined">
                    straighten
                  </span>
                  <input type="number" id="height" value={altura} onChange={(e) => setAltura(e.target.value)} required/>
                  <span>M</span>
                  </div>
                </div>


              </div>

              <button id="botão"> calcular </button>

              
            </form>

            
            <div id='resultadoTexto'>
              <h2> Seu IMC: {resultado} </h2>

            </div>
            
            
          </section>
        </div>
      </main>
    </div>

    
  
  );
}


export default App;
