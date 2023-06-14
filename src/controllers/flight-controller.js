const {FlightService} = require('../services/index');


const flightService = new FlightService();

const create =async (req,res)=>{
    try {
        const flight = await flightService.createFlight(req.body);
        
        return res.status(201).json({
            data: flight,
            success :true,
            err: {},
            messege: "Successfully created a flight"
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success : false,
            messege : "not able to create a flight",
            err : error
        }) 
    }

}

const getAll = async (req,res)=>{
    try {
        const flights = await flightService.getAllFlightsData(req.query);
        
        return res.status(201).json({
            data: flights,
            success :true,
            err: {},
            messege: "Successfully fetched all flights"
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success : false,
            messege : "not able to fetch the flights",
            err : error
        }) 
    }
}
module.exports ={
    create,
    getAll

}