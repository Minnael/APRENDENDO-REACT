function Saudacao({nome}){
   function gerarSaudacao(algumNome){
      return `OLÁ, ${algumNome}, TUDO BEM?` 
   }

   return(
      <div>
         {nome && (<p>{gerarSaudacao(nome)}</p>)}
      </div>
   )
}
export default Saudacao