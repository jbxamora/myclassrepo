const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Add comment on role of code below
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

// This code sets up an Express server and configures it to serve static files from the "../client/dist" directory using the express.static() middleware. 
// It also sets up middleware to parse incoming requests with URL-encoded payloads (express.urlencoded()) and JSON payloads (express.json()).

// The require('./routes/htmlRoutes')(app) line loads the route handlers defined in the "htmlRoutes.js" file located in the "./routes" directory and passes the app object to it to set up the routes.

    // Finally, the app.listen() method starts the server listening on the port specified in the PORT variable, which defaults to 3001 if no environment variable is set.