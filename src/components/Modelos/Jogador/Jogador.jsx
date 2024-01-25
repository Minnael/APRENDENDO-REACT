import "./styles.css"

function Jogador({foto, nome, esporte}){
   return(
      <div className="perfil">
         <img src={foto} alt={nome}/>
         <h1>NOME: {nome}</h1>
         <h1>ESPORTE: {esporte}</h1>
      </div>
   )
}

export default Jogador