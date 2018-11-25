const express = require('express')
const app = express();
const port = 3000;
const data = require('./BD/connection');
const UserRouter = require('./routes/User');
var controller = require('./Controller/UserController.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

data.connectionOpen();

app.get('/', (req, res) =>{})
app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
});

app.post('/user/create', controller.create);
app.get('/user/:id', controller.getById)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))