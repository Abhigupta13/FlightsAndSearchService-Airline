# Welcome to Flight Search Service for Airline project

## Project Setup

### Clone the Repository
To set up the project on your local machine, start by cloning the repository:

```bash
git clone https://github.com/Abhigupta13/FlightsAndSearchService-Airline.git
cd FlightsAndSearchService-Airline
```

### Install Dependencies
Navigate to the root directory of the project and install the necessary dependencies:

```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=3000
DB_USERNAME=<YOUR_DB_LOGIN_NAME>
DB_PASSWORD=<YOUR_DB_PASSWORD>
DB_NAME=Flights_Search_DB_DEV
DB_HOST=127.0.0.1
DB_DIALECT=mysql
```

### Database Configuration
Inside the `src/config` folder, create a new file `config.json` and add the following JSON configuration:

```json
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### Database Setup
Once you've configured your database settings, go to the `src` folder from your terminal and execute the following commands to set up the database:

```bash
npx sequelize db:create
npx sequelize db:migrate
```

## DB Design
The database design includes the following tables:

- **City**: Stores city information.
  - Fields: id, name, created_at, updated_at
- **Airport**: Stores airport information.
  - Fields: id, name, address, city_id, created_at, updated_at
  - Relationship: A city has many airports, and an airport belongs to a city (one-to-many).
- **Airplane**: Stores airplane information.
  - Fields: id, name, created_at, updated_at
- **Flight**: Stores flight information.
  - Fields: id, airplane_id, departure_airport_id, arrival_airport_id, departure_time, arrival_time, price, created_at, updated_at
  - Relationships: 
    - A flight belongs to an airplane, but one airplane can be used in multiple flights (one-to-many).
    - An airport can have many flights, but a flight belongs to one airport (one-to-many).

### Creating Models
To generate the Airport model, use the following command:

```bash
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```

Continue generating models for the other entities (City, Airplane, Flight) as needed. 

For detailed implementation and additional setup, please look at the service's codebase.
