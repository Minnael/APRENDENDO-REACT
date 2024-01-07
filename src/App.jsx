import './App.css'

import Carro from './components/Carro.jsx'
import Jogador from './components/Jogador/Jogador.jsx'

import bmwPreta from './assets/bmw-preta.png'
import ferrari from './assets/ferrari.webp'
import audi from './assets/audi.jpg'

import lebron from './assets/lebron-james.webp'
import curry from './assets/curry.jpg'
import kobe from './assets/kobe.jpg'

function App() {
  return (  
    <div className='App'> 
      <ul className='carros'> 
        <li>
          <Carro foto={bmwPreta} cor="ESCURA" marca="BMW"/>
        </li>
        <li>  
          <Carro foto={ferrari} cor="AMARELA" marca="FERRARI"/>
        </li>
        <li>
          <Carro foto={audi} cor="AZUL" marca="AUDI"/>
        </li>
        <li>
          <Jogador foto={lebron} nome="LEBRON JAMES" esporte="BASQUETE"/>
        </li>
        <li>
          <Jogador foto={curry} nome="STEPHEN CURRY" esporte="BASQUETE"/>
        </li>
        <li>
          <Jogador foto={kobe} nome="KOBE BRYANT" esporte="BASQUETE"/>
        </li>
      </ul>
    </div>
  )
}

export default App
