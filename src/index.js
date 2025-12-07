const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use('/api/movies', movieRoutes);

app.get('/', (req, res) => {
  res.send('Hello from VexoStream backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});