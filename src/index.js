const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');

const ApiRoutes = require('./routes/index');

const setupAndStartServer =async ()=>{
    // create an express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', ApiRoutes);

    app.listen(PORT , ()=>{
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();

















