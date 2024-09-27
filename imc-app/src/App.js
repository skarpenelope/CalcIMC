import logo from './logo.svg';
import './App.css';
import fitimg from "./fitimg.svg"

//#6563FF


function App() {
  return (
    
    
    <div className="App">
      <header>

      </header>

      <main id="container">
        <section id="img">
          <img src={fitimg}/>

        </section>
        <div className="calculadora">
          <section id="calculator">
            <form>
              <div className="input-box">
                <label id="peso">
                  Peso em kg
                </label>

                <div className="icon-weight">
                  <span class="material-symbols-outlined">
                    weight
                  </span>
                  <input type="number" id="weight" required/>
                  <span>kg</span>
                </div>

                <label>Altura em metros</label>

                <div className="icon-height">
                <div className="icon-weight">
                  <span class="material-symbols-outlined">
                    weight
                  </span>
                  <input type="number" id="height" required/>
                  <span>M</span>
                  </div>
                </div>


              </div>

              <button id="botão"> calcular </button>
            </form>
            
          </section>
        </div>
      </main>
    </div>

    
  
  );
}


export default App;
