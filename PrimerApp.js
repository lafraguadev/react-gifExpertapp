import React from 'react';
import PropTypes from 'prop-types';  //asi con maysuculas talcual para validad tipo de datos de las props

//functional component
const PrimeraApp = ( { saludo, subtitulo } ) => {  // se deben desestructurar las propiedades del props

  // const saludo = 'Hola mundo';  // uso de variable en el JSX
   
   // cuando la variables es booleano no se imprime en el html
  // const salulo = true;
   // tampoco se puede imprimir de forma directa un objeto {nombre: 'Fer',Edad: 40}
   

   return (
      // <> se llama fragment, para colocar muchas lineas de codigo dentro de el
      <>
         <h1>{ saludo }</h1>
         <p>{ subtitulo }</p>
      </> // se llama fragment, para colocar muchas lineas de codigo dentro de el

   );
}

//indicar a las props types, tipo de datos a recibir y si es o no olbligatorio
PrimeraApp.propTypes = {
   saludo: PropTypes.string.isRequired,
}

// valores por default para las props
PrimeraApp.defaultProps = {
   subtitulo: 'Soy un subtitulo',
}

export default PrimeraApp;


