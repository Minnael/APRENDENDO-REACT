import { useState } from 'react'

function Form(){

   function cadastrar(e){
      e.preventDefault()
      console.log(`USUÁRIO ${name} FOI CADASTRADO COM A SENHA ${password}`)
   }

   const [name, setName] = useState()
   const [password, setPassword] = useState()

   return (
      <div>
         <h1>MEU CADASTRO:</h1>
         <form onSubmit={cadastrar}>
            <div>
               <label htmlFor="name">NOME:</label>
               <input 
                  type  ="text" 
                  id="name"
                  name="name" 
                  placeholder="DIGITE SEU NOME"
                  value={name}
                  onChange={(evento) => setName(evento.target.value)}
               />
            </div>
            <div>
               <label htmlFor="password">SENHA:</label>
               <input 
                  type="password" 
                  id="password" 
                  password="password" 
                  placeholder="DIGITE SUA SENHA"
                  onChange={(evento) => setPassword(evento.target.value)}
               />
            </div>
            <div>
               <input type="submit" value="CADASTRAR"/>
            </div>
         </form>
      </div>
   )
}

export default Form