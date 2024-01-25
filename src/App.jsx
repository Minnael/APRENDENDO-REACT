import { useState } from 'react'
import './App.css'
import Nome from './components/Nome/Nome.jsx'
import Saudacao from './components/Nome/Saudacao.jsx'


function App() {

  const [nome, setNome] = useState()

  return (  
    <div className='App'> 
      <Nome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  )
}

export default App
