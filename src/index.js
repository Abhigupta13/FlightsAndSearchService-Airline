const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');

const setupAndStartServer =async ()=>{
    // create an express object
    const app = express();
    app.listen(PORT , ()=>{
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();

















