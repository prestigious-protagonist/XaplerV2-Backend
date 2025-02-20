const express = require("express")
const {PORT} = require('./config/server-config')
const app = express();

const startServer = () => {
    
    app.listen(PORT, () => {
        console.log("Auth Service active on PORT: "+ PORT)
    })
}

startServer()