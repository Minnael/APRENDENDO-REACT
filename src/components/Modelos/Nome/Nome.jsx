function Nome({setNome}){
   return (
      <div>
         <p>DIGITE SEU NOME:</p>
         <input 
            type="text" 
            placeholder="QUAL É O SEU NOME?" 
            onChange={(evento) => setNome(evento.target.value)}
         />
      </div>
   )
}

export default Nome