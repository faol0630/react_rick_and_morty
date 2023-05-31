
import './App.css';
import Characters from './components/Characters';
import Character from './components/Character';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (

    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/characters" element={<Characters />} />
          <Route exact path="/character/:id" element={<Character />} />

        </Routes>
      </BrowserRouter>


    </div>


  );
}

export default App;
