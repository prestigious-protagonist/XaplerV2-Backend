const express = require("express")
const {PORT} = require('./config/server-config')
const app = express();
const apiV1Router = require("./routes/index");
const { Sequelize, sequelize } = require("./models");
const startServer = () => {
    app.use('/api', apiV1Router)
    app.listen(PORT, () => {
        console.log("Auth Service active on PORT: "+ PORT)
        
    })
}

startServer()