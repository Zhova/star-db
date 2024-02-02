import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.sass';

import { HomePage } from './components/pages/HomePage'
import { PeoplePage } from './components/pages/PeoplePage'
import { PlanetsPage } from './components/pages/PlanetsPage'
import { ShipsPage } from './components/pages/ShipsPage'

import { Header } from './components/view/Header';

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/people' element={<PeoplePage />} />
          <Route path='/planets' element={<PlanetsPage />} />
          <Route path='/ships' element={<ShipsPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
