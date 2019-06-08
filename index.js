const express = require('express');
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const todoRoutes = require('./routes/todos');

app.get('/', function(req, res) {
    res.send('Hello from the root route!!');
});

app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
    console.log("Server now listening on port 3000....");
});