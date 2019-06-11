const express = require('express');
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

const todoRoutes = require('./routes/todos');

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
    console.log("Server now listening on port 3000....");
});