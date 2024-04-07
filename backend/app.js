const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser())


// Router import
const product = require("./routes/productsRoutes");
const user = require('./routes/userRoute')
const order = require('./routes/orderRoute')
const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    next();
  });


app.use("/api/v1", product);
app.use('/api/v1', user)
app.use('/api/v1', order)

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
