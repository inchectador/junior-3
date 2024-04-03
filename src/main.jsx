import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import './styles/style.css'
import Inicio from './pages/Inicio'
import Mobiliario from './pages/Mobiliario'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Inicio/>} />
      <Route path='/Mobiliario' element={<Mobiliario/>} />
    </Routes>
  </Router>
)
