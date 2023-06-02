
import './App.css';
import Characters from './components/Characters';
import Character from './components/Character';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserContext } from './context/UserContext';
import { useState } from 'react';


function App() {


  const [page, setPage] = useState(1)


  return (

    <div className="App" >

      <UserContext.Provider value={
        { page, setPage}
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
