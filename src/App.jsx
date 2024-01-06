import './App.css'

import Carro from './components/Carro.jsx'
import Jogador from './components/Jogador/Jogador.jsx'

import bmwPreta from './assets/bmw-preta.png'
import ferrari from './assets/ferrari.webp'
import lebron from './assets/lebron-james.webp'

function App() {
  return (  
    <div className='App'>
      <Carro foto={bmwPreta} cor="ESCURA" marca="BMW"/>
      <Carro foto={ferrari} cor="AMARELA" marca="FERRARI"/>
     <Jogador foto={lebron} nome="LEBRON JAMES" esporte="BASQUETE"/>
    </div>
  )
}

export default App
