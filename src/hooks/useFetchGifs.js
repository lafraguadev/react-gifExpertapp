// un custom hook deebe empesar con userXxxxx
// leccion https://www.udemy.com/course/react-cero-experto/learn/lecture/19759978#questions/11749754

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

   const [state, setState] = useState({
      data: [],
      loading: true
   });

   useEffect(() => {         // nunca los useEfect o efecto pueden ser Async
      getGifs(category) 
      .then(imgs => {

         //  setTimeout(() => {

         setState({
            data: imgs,
            loading: false
         });


         //   }, 3000);  // 3 segs. muestra las imgs

      })
   }, [category]); // hace el efecto cuando la categoria cambie

   // muestra solo para cambiar estado de data y loading
   // setTimeout(() => {
   //    setState({
   //       data: [1, 2, 3, 4, 5, 6],
   //       loading: false
   //    })
   // }, 3000);

   return state; // { date: []. loading: true }
}