const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

var configData = require("./config/connection");
var connectionInfo = await configData.getConnectionInfo();
mongoose.connect(connectionInfo.DATABASE_URL);

const routes = require('./src/routes/routes');

const app = express()
    .use(express.json())
    .use(cors())
    .use(routes);

app.listen(PORT, () => {
    console.log('Servidor em execução na porta' + PORT);
});