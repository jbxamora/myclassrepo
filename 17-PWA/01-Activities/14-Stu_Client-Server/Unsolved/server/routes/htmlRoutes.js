const path = require('path');

// TODO: Add comment explaining role of route below
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );


  // exports a function that takes an Express app as an argument and sets up a route handler for the root URL ("/"). When a client makes a GET request to this URL, 
  // the server responds by sending the index.html file located in the "../client/dist" directory.

// The path module is used to construct the absolute path to the index.html file using the __dirname global variable, which refers to the directory of the current module
// (i.e., the file where this code is located), and the relative path "../client/dist/index.html".