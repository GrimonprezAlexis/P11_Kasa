require('dotenv').config(); // loads environment variables from a .env file into process.env

const express = require('express');
const app = express();

const router = express.Router(); // Invoke the Express Router
const apiRouter = require('./app/routes/router')(router); // Import the application end points/API
app.use('/api', apiRouter); // Assign name to end points

const PORT = process.env.PORT || 5000;
console.log('server started on port:',PORT);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));