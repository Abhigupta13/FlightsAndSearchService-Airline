const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');

const ApiRoutes = require('./routes/index');
// const{Airport ,City} = require("./models/index");
const db = require("./models/index");

const setupAndStartServer =async ()=>{
    // create an express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', ApiRoutes);

    app.listen(PORT , async ()=>{
        console.log(`Server started at ${PORT}`);

    // db / model synchronization
    if(process.env.SYNC_DB){

        db.sequelize.sync({alter :true})
    }
    // const city = await City.findOne({
    //     where:{
    //         id: 5
    //     }
    // });
    // const airports= await city.getAirports();
    // console.log(city,airports);
    });
}

setupAndStartServer();