import {Link} from 'react-router-dom'
import "./styles.css"

function Navbar(){
   return (
   <ul>
      <li>
         <Link to="/">Home</Link>
      </li>
      <li>
         <Link to="/empresa">Empresa</Link>
      </li>
      <li>
         <Link to="/contato">Contato</Link>
      </li>
   </ul>
   )
}
export default Navbar