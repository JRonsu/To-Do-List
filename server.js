// FOR THE LOVE OF GOD!!! DO NOT USE ANY BROWSER OTHER THAN CHROME!!!
// Sitting here all day troubleshooting and its just the browswer 
// was unable to link to link app.js

// Import the Express package
const express = require('express');

// Create a new Express app
const app = express();

// Import the mime-types package
const mime = require('mime-types');

// Serve static files from the 'public' directory, and set the MIME type for JS files
app.use(express.static(__dirname + '/public', {
  // This is the middleware for serving static files from the 'public' directory
  setHeaders: (res, path) => {
    const mimeType = mime.lookup(path);
    if (mimeType === 'application/javascript') {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Set the view engine to use EJS templates
app.set('view engine', 'ejs');

// Set up a route to render the to-do list page
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server and listen for incoming requests
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
