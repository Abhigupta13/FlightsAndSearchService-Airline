const express = require('express');
const { PORT } = require('./config/serverConfig');
const { City } = require('./models/index')
const bodyParser = require('body-parser');
const CityRepository = require('./repository/city-repository')

const setupAndStartServer =async ()=>{
    // create an express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT , ()=>{
        console.log(`Server started at ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({name :"Patna"});
    });
}

setupAndStartServer();

















