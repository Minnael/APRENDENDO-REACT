import {FaFacebook, FaInstagram, FaLinkedin}  from 'react-icons/fa'
import './styles.css'

function Footer(){
   return (
      <footer>
         <ul className='social-list'>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
         </ul>
         <p>NOSSO RODAPÉ!</p>
      </footer>
   )
}
export default Footer