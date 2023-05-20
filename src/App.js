
import { useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import image_rm from "./img/rm.png"

function App() {

  const [characters, setCharacters] = useState(null)
  //al comenzar en null muestra la imagen y el boton.
  //al dar click muestra la lista de personajes

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()
    setCharacters(characterApi.results)
   

  }


  return (
    <div className="App " >
      <header className="d-flex flex-lg-column ">
        {
          characters ? (
            <Characters characters={characters} setCharacters={setCharacters} />
          ) : (
            < div id="app" className="d-flex align-items-center justify-content-center col-lg-6 offset-lg-3 col-md-10 offset-md-1 " >
              <h1 className="text-info" id="title">Rick & Morty</h1>
              <img src={image_rm} id="image"/>
              <button onClick={reqApi} className="btn btn-outline-info m-5">Buscar personajes</button>
            </div>
          )
        }


      </header>

    </div>
  );
}

export default App;
