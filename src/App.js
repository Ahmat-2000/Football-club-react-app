import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Accueil from './components/Accueil';
import EquipeA from './components/EquipeA';
import EquipeB from './components/EquibeB';
import Contact from './components/Contact';
import Apropos from './components/Apropos';
  
class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul className="App-header">
            <li>
              <Link to="/Accueil">Accueil</Link>
            </li>
            <li>
              <Link to="/EquipeA">Equipe A</Link>
            </li>
            <li>
              <Link to="/EquipeB">Equipe B</Link>
            </li>
            <li>
              <Link to="/Apropos-du-club">Le club</Link>
            </li>
            <li>
              <Link to="/Contact">Contactez-nous</Link>
            </li>
          </ul>
        </nav>
        <main className="App">
        <Routes>
              <Route exact path='/Accueil' element={< Accueil />}></Route>
              <Route exact path='/EquipeA' element={< EquipeA />}></Route>
              <Route exact path='/EquipeB' element={< EquipeB />}></Route>
              <Route exact path='/Apropos' element={< Apropos />}></Route>
              <Route exact path='/Contact' element={< Contact />}></Route>
        </Routes>
        </main>
      </Router>
   );
  }
}
  
export default App;