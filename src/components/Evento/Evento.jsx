function Evento({numero}){

   function evento(){
      console.log(`ATIVADO! ${numero}`)
   }

   return(  
      <div>
         <p>CLIQUE PARA ATIVAR:</p>
         <button onClick={evento}>ATIVAR!</button>
      </div>
   )
}

export default Evento