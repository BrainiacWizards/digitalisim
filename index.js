const express = require('express');
const router = express.Router();
const app = express();

app.use(express.static('public')); // Serve static files from the 'public' directory

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname }); // Send the 'index.html' file
});

app.use('/', router); // Mount the router middleware

const port = 8080; // Specify the port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});