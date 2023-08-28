require('dotenv').config();
const express = require('express');
const notFoundMid = require('../middleware/notfound');

const app = express();

const connectDB = require('../db/connect')
const productsRouter = require('../src/router')

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Store Home')
});

// prodcuts route
app.use('/products', productsRouter)
app.use(notFoundMid);

const port = process.env.PORT || 3333
const start = async() => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log('Server Running...'))
    }
    catch(error){
        console.log(error)
    }
};

start();