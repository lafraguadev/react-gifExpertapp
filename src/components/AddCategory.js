
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

   const [inputValue, setInputValue] = useState(''); // aca inputValue toma el valor de 'hola mundo'
   // si en el  useState(); se deja en blanco pasa un error incontrolado 
   // eso pasa PORQUE : no se manda nada es undefined, si es un string poner '' para que sea un string vacio
   //Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components

   const handleInputChange = (evento) => {
      // console.log(evento.target.value); // valor de las teclas presionadas
      setInputValue(evento.target.value);

   }

   // manejo del enter en el input
   const handleSubmit = (e) => { // e = evento
      e.preventDefault();
      // console.log('Submit hecho');

      // validamos, para que no adicione valor en blanco, solo palabras con mas de 2 letras
      if (inputValue.trim().length > 2) {
         
         setCategories(categs => [ inputValue, ...categs]); // del array recibido, le adicionamos el del inputValue
         setInputValue(''); // lo pone de nuevo en blanco
      }

   }

   return (
      <form onSubmit={ handleSubmit }>
         <input
            type="text"
            value={ inputValue }
            onChange={ handleInputChange } //onChance evento ejecutado por cada tecla presionada
         />

      </form>
   );
   
};

// validamos que sea una funcion requeria en la prop
AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired,
}
