function Lista({itens}){
   return (
      <div>
         <h3>LISTA DE COISAS BOAS:</h3>
         {
            itens.length > 0 ? (
               itens.map((item, index) => <p key={index}>{item}</p>)
            ):(
               <p>LISTA VAZIA!</p>
            )
         }
      </div>
   )
}

export default Lista