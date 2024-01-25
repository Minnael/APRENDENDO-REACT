import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Pages/Home/Home.jsx'
import Empresa from './components/Pages/Empresa/Empresa.jsx'
import Contato from './components/Pages/Contato/Contato.jsx'
import Navbar from './components/Pages/Navbar/Navbar.jsx'
import Footer from './components/Layout/Footer.jsx'

function App() {
  return (  
    
    <Router>  
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/empresa" element={<Empresa/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
