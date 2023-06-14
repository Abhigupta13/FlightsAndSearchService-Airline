const {Flights} = require('../models/index');
const {Op} = require('sequelize');
class FlightRepository{

    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        if(data.minPrice && data.maxPrice) {
            Object.assign(filter, {
                [Op.and]: [
                    { price: {[Op.lte]: data.maxPrice} }, 
                    { price: {[Op.gte]: data.minPrice} }
                ]
            })
        }
        return filter;
    }
    async createFlight(data){
        try {
            const flight =await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight-repository layer");
            throw{error};
            
        }
    }
    async getFlight(flightId){
        try {
            const flight =await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight-repository layer");
            throw{error};
            
        }
    }
    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
/**
 * {
 *  where :{
 *      arrivalAirportId: 2,
 *      departureAirportId: 4,
 *      price : {[Op.gte]: 4000}
 *  }
 * }
 */
}
module.exports = FlightRepository;