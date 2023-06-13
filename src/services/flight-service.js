const {FlightRepository, AirplaneRepository} =require('../repository/index');

class FlightService{
    async createFlight(data){
        try {
            
        } catch (error) {
            console.log("Something went wrong at flight-service layer");
            throw {error};
        }
    }
}

/**
 * {
 * flightNumber,airplaneId,departureAirportId,arrivalAirportId,arrivalTime,price,
 * totalSeats ->airline
 * }
 */

module.exports =FlightService;