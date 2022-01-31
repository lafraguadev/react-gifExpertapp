

export const getGifs = async ( category ) => {

   // el encodeURI reemplaza espacios en blanco por % y &
   const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)  }&limit=10&api_key=AZ7Hzs2wfFeC65YMqRVTya9JrP6gffO6`;
   const resp = await fetch(url);
   const { data } = await resp.json();   // solo data el campo del json (console.log o postman)
   // console.log(data);

   const gifs = data.map(img => {  // se arma un arreglo nuevo img del arreglo de data
      return {
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url // el ? es por que alguna viene en blanco
      }
   });

   return gifs;

}
