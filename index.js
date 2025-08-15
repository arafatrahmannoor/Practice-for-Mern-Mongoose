const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));
require('dotenv').config();
const mongoose = require('mongoose');
const conn = mongoose.connect(process.env.MONGODB_URL); 



const apiRouter = require('./router/app');
app.use('/api', apiRouter);

const userRouter = require('./router/userRouter');
app.use('/users', userRouter);


if (conn){
    console.log('Connected to MongoDB');
}
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
