import Button from './Button.jsx'

function Evento(){

   function evento(){
      console.log("ATIVANDO PRIMEIRO EVENTO!")
   }

   function eventoDois(){
      console.log("ATIVANDO SEGUNDO EVENTO!")
   }

   return(  
      <div>
         <p>CLIQUE PARA ATIVAR:</p>
         <Button event={evento} text="PRIMEIRO EVENTO!"/>
         <Button event={eventoDois} text="SEGUNDO EVENTO!"/>
      </div>
   )
}

export default Evento