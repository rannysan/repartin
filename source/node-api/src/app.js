const express = require('express')
const app = express();
const port = 8080;
const data = require('./BD/connection');
const UserRouter = require('./routes/User');
var controller = require('./Controller/UserController.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => data.test(res))
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))