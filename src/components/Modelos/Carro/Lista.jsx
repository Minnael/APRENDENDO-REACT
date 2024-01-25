import Carro from './Carro.jsx'

function Lista(){
   return(
      <>
         <h1>MINHA LISTA</h1>
         <ul>
            <Carro marca="FERRARI" cor="AMARELA"/>
            <Carro marca="AUDI" cor="AZUL"/>
            <Carro marca="BMW" cor="ESCURA"/>
            <Carro marca="LAMBORGUINI" cor="LARANJA"/>
            <Carro/>
         </ul>
      </>
   )
}

export default Lista