import PropTypes from 'prop-types';
// En yarn hay que intalar este paquete en consola: yarn add prop-types 


export const PropsApp = ({title, subTitle, name}) => {
 
    return (
    <>
        <h1 data-testid="test-title">{title}</h1>
        <h2>{name}</h2>
        <h2>{subTitle}</h2>
    </>
    
  )
}

PropsApp.propTypes = {
  title: PropTypes.string.isRequired,
  //Agregandole isRequired esta obligando a que se mande un titulo
  subTitle: PropTypes.string.isRequired
}
//dato curioso: Primero se ejecuto los PropsApp.defaultProps antes de los PropsApp.propTypes
PropsApp.defaultProps = {
  name: 'Kevin Pernia',
  subTitle: 'No hay subtitulo',
  title: 'No hay titulo',
}
