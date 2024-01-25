import { useState } from "react"

function Condicional(){

   const [email, setEmail] = useState()
   const [userEmail, setUserEmail] = useState()

   function enviarEmail(evento){
      evento.preventDefault()
      setUserEmail(email)
   }

   function limparEmail(){
      setUserEmail('')
   }

   return (
      <div>
         <h2>CADASTRE SEU E-MAIL:</h2>
         <form>
            <input 
               type="email" 
               placeholder="DIGITE SEU EMAIL..."
               onChange={(evento) => setEmail(evento.target.value)}  
            />
            <button onClick={enviarEmail}>ENVIAR E-MAIL!</button>
            {userEmail && (
               <div>
                  <p>O E-MAIL DO USUÁRIO É: {userEmail}</p>
                  <button onClick={limparEmail}>LIMPAR E-MAIL</button>
               </div>
            )}
         </form>
      </div>
   )

}

export default Condicional