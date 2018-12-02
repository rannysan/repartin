const express = require('express')
const app = express();
const port = 3000;
const data = require('./bd/connection');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

data.connectionOpen();

app.use(require('./routes/User'));
app.use(require('./routes/House'));
app.use(require('./routes/Pallete'));
app.use(require('./routes/Payment'));
app.use(require('./routes/Task'));
app.use(require('./routes/Expense'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))