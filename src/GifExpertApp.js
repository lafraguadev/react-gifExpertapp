// snipper rafc para crear componentes
import React, { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   // const [categories, setCategories] = useState(['Uvas', 'Bananas', 'Peras', 'Manzanas']);
   const [categories, setCategories] = useState(['thundercats']);

   // // adicionar un elemento a lista, extraemos con el operador spread (...) las que tenemos y le adicionamos HunterXPRO
   // const handleAdd = () => {
   //    // forma 1 de hacerlo
   //    // setCategories([...categories, 'HunterXPRO']);
   //    //otra forma de hacer es con un callback
   //    setCategories( categs => [...categs, 'HunterXPRO']);

   // }

   return <>
      <h2>Images GifExpertApp</h2>
      
      <AddCategory setCategories={setCategories}/> 

      <hr></hr>


      <ol>
         {
            //recorrer el arreglo categories, importante el indice key
            // categories.map(category => {
            //    return <li key={ category }>{ category }</li>
            // })

            // usando componente GifGrid
            categories.map(category => (
               <GifGrid
                  key = { category }
                  category={category}
               />
            ))
         }
      </ol>

   </>
}