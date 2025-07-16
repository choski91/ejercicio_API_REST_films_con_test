const fetchFilm = require('../utils/fetchFilms');

const getFilmByTitle = async (req, res) => {
    try {
        const title = req.params.title;
        let film = await fetchFilm(title); //{}
        if(!film){
            res.status(404).json({message:"Film not found"}); 
            return;
        }
           
        res.status(200).json(film);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(404).json({ msj: `ERROR: ${error.stack}` });
    }
}

const createFilm = (req, res) => {
    const movie = req.body;
    res.status(200).send({message: `Se ha guardado ${movie.Title}`});
};

const editFilm = (req, res) => {
    const movie = req.body;
    res.status(200).send({id: `${movie.Id}`, message: `Se ha actualizado ${movie.Title}`});
};

const deleteFilm = (req, res) => {
    const movie = req.body;
    res.status(200).send({id: `${movie.id}`, message: `Se ha borrado la película con ID: ${movie.id}`})
};


module.exports = {
    getFilmByTitle,
    createFilm,
    editFilm,
    deleteFilm
};