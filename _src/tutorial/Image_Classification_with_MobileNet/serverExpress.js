let express = require('express');
let app = express();
let path = require('path');

const PORT = 8080

//static file
app.use(express.static('static'))

//html file
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

const server = app.listen(PORT,'0.0.0.0',() => {
    console.log(`Server running on port ${PORT}`)
})