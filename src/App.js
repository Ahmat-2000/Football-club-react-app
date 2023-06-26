import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Accueil from './components/Accueil';
import EquipeA from './components/EquipeA';
import EquipeB from './components/EquibeB';
import Contact from './components/Contact';
import Apropos from './components/Apropos';
import Nopage from './components/NoPage';
  
function App(){
  return (
    <Router>
      <nav className='nav-bar'>
        <ul className="nav-list">
          <li className='nav-li-items'>
            <Link to="/Accueil">Accueil</Link>
          </li>
          <li className='nav-li-items'>
            <Link to="/EquipeA">EquipeA</Link>
          </li>
          <li className='nav-li-items'>
            <Link to="/EquipeB">EquipeB</Link>
          </li>
          <li className='nav-li-items'>
            <Link to="/Apropos-du-club">Le Club</Link>
          </li>
          <li className='nav-li-items'>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main className="main">
      <Routes>
            <Route exact path='/' element={< Accueil />}></Route>
            <Route exact path='/Accueil' element={< Accueil />}></Route>
            <Route exact path='/EquipeA' element={< EquipeA />}></Route>
            <Route exact path='/EquipeB' element={< EquipeB />}></Route>
            <Route exact path='/Apropos-du-club' element={< Apropos />}></Route>
            <Route exact path='/Contact' element={< Contact />}></Route>
            <Route exact path='*' element={< Nopage />}></Route>
      </Routes>
      </main>
    </Router>);
}
  
export default App;