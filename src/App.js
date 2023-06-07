
import './App.css';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserContext } from './context/UserContext';
import { useRef, useState } from 'react';


function App() {

  const [page, setPage] = useState(1)

  const [characters1, setCharacters] = useState([])

  const [character, setCharacter] = useState([])

  const [search, setSearch] = useState("")

  const [noCharactersFound, setNoCharactersFound] = useState(false);

  const inputRef = useRef(null);
  
  return (

    <div className="App" >

      <UserContext.Provider value={
        { page, setPage, characters1, setCharacters, character, setCharacter, search, setSearch, noCharactersFound, setNoCharactersFound, inputRef }
      }>

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/characters" element={<Characters />} />
            <Route exact path="/character/:id" element={<Character />} />

          </Routes>
        </BrowserRouter>

      </UserContext.Provider>

    </div>


  );
}

export default App;
