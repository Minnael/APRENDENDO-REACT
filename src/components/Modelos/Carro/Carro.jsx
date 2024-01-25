import PropTypes from 'prop-types'

function Carro({marca, cor}){
   return(
      <>
         <li> 
            {marca} - {cor}
         </li>
      </>
   )
}

Carro.propTypes = {
   marca: PropTypes.string.isRequired,
   cor: PropTypes.string.isRequired,
}

Carro.defaultProps = {
   marca: "FALTOU A MARCA",
   cor: "FALTOU A COR",
}

export default Carro