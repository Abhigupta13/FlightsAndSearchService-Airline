const express = require('express');
const bodyParser = require('body-parser');

const setupAndStartServer =async ()=>{
    // create an express object
    const app = express();
    const PORT =3000;
    app.listen(PORT , ()=>{
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();

















