//leer fichero .env
const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.API_KEY;
// console.log(`https://www.omdbapi.com/?apikey=${API_KEY}`);


/* const fetchFilm = async (title="") => {
    let response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`); //{} o [{},{},{},{}]
    let film = await response.json(); //{} o [{},{},{},{}]
    
   return film
};
 */

const fetchFilm = async (title) => {
  try {    
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=7fb89ef6`);
    const data = await response.json();
    
    if (data.Response === 'False') {
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching film:', error.message);
    return null;
  }
};


module.exports = fetchFilm;
