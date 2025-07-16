const express = require('express')
const app = express()
const port = 3000

// Rutas
const filmsRoutes = require("./routes/films");

app.use(express.json()); //para parsear el body entrante a JSON


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Habilitar las rutas
app.use('/api/film',filmsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Film not found' });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;