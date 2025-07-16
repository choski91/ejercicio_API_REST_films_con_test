const filmsController = require('../controllers/film.controller');
const router = require('express').Router();


// GET http://localhost:3000/api/film/:title 
router.get("/:title", filmsController.getFilmByTitle);


//POST http://localhost:3000/api/film/ 
router.post("/", filmsController.createFilm);

//PUT http://localhost:3000/api/film/ 
router.put("/", filmsController.editFilm);

//DELETE http://localhost:3000/api/film/ 
router.delete("/", filmsController.deleteFilm);


module.exports = router;

