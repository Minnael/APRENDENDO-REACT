function Carro({foto, marca, cor}){
   return(
      <div className="text-lg font-mono font-black">
         <img src={foto} alt={marca} className="w-2/6 mx-auto"/>
         <h1>COR: {cor}</h1>
         <h1>MARCA: {marca}</h1>
      </div>
   )
}

export default Carro