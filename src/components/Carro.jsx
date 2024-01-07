function Carro({foto, marca, cor}){
   return(
      <div>
         <img src={foto} alt={marca}/>
         <h1>COR: {cor}</h1>
         <h1>MARCA: {marca}</h1>
      </div>
   )
}

export default Carro