const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const app = express();

app.use(require('./routes/index'));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

module.exports = app;