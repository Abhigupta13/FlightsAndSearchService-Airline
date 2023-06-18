const {FlightRepository, AirplaneRepository} =require('../repository/index');
const {compareTime} = require('../utils/helper');

class FlightService{
    constructor (){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error :"Arrival time cannot be less than departure"};
            }
           const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            })
            return flight;
        } catch (error) {
            console.log("Something went wrong at flight-service layer");
            throw {error};
        }
    }

    async getAllFlightsData(data){
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
            
        } catch (error) {
            console.log("Something went wrong at flight-service layer");
            throw {error};
        }
    }

async getFlight(flightId) {
    try {
        const flight = await this.flightRespository.getFlight(flightId);
        return flight;
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
}

async updateFlight(flightId, data) {
    try {
        const response = await this.flightRepository.updateFlights(flightId,data);
       return response;
    } catch (error) {
        console.log("Something went wrong at service layer");
        
        throw {error};
    }
}
}

/**
 * {
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totalSeats ->airplane
 * }
 */

module.exports = FlightService;