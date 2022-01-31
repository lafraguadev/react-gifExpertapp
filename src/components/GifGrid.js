import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
   
   // const [count, setCount] = useState(0);
   // const [images, setImages] = useState([]);
   
   /* nuetro custom hooks , se rombra data a images*/
   const { data:images, loading } = useFetchGifs( category );

   // // const textSearch = 'bon jovi';
   

   // peticion http se saca de aca y se pasa el helper
   // const getGifs = async () => {
 
   //    // el encodeURI reemplaza espacios en blanco por % y &
   //    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)  }&limit=10&api_key=AZ7Hzs2wfFeC65YMqRVTya9JrP6gffO6`;
   //    const resp = await fetch(url);
   //    const { data } = await resp.json();   // solo data el campo del json (console.log o postman)
   //    // console.log(data);

   //    const gifs = data.map(img => {  // se arma un arreglo nuevo img del arreglo de data
   //       return {
   //          id: img.id,
   //          title: img.title,
   //          url: img.images?.downsized_medium.url // el ? es por que alguna viene en blanco
   //       }
   //    });

   //    // console.log(gifs);

   //    setImages( gifs);

   // }


   
   //llamar funcion para ver el resultado
   //getGifs();
   return (
      <>
         <h3 className="animate__animated animate__flipInX"> {category} </h3>

         { loading && <p className="animate__animated animate__flash">'Cargando....'</p> } {/* si es loading = true, solo ejecuta la parte verdadero*/}

         <div className="card-grid">

            {
               images.map(img => (
                  <GifGridItem
                     key={img.id}
                     {...img}
                  />
               ))
            }
         </div>
      </>
   )
};
