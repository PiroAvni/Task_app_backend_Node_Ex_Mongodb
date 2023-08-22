 ## Installation

- Clone the repository to your local machine
- Install the required dependencies by running the following command: ```"npm install"```. This will download and install all the necessary packages and libraries specified in the package.json file.
 
## Environment Variables

Before running the application, you need to set up the following environment variables:

- `PORT`: The desired port number for running the server.
- `MONGODB_URL`: The URL for connecting to your MongoDB database.

To set up these variables, create a new file called `.env`. 

## How To run the server

- Execute the following command in your terminal to start the server: ```"npm run dev"```

## How To run the test

To run the tests, follow these steps:

- Ensure that all project dependencies are installed by running ```"npm install"```.
- Run the command ```"npm run test"``` in the terminal.
- The tests will be executed, and the results will be displayed in the terminal.

## Database

+------------------+     +-----------------+     +---------------------+
|      User        |     |     Trader      |     |       Service       |
+------------------+     +-----------------+     +---------------------+
| _id              |<---o| _id             |o--->| _id                 |
| username         |     | company         |     | name                |
| email            |     | location        |     | subtasks            |
| password         |     | services []     |     +---------------------+
| ...              |     | testimonials [] |
+------------------+     +-----------------+
          ^                    ^
          |                    |
          |                    |
   +------------------+  +------------------+
   |    Subtask       |  |      Task        |
   +------------------+  +------------------+
   | _id              |  | _id              |
   | name             |  | user (Ref: User) |
   | price            |  | trader (Ref: Trader) |
   +------------------+  | service (Ref: Service) |
                         | subtask (Ref: Subtask) |
                         | date              |
                         | status            |
                         +------------------+
                                   ^
                                   |
                                   |
                           +-------------------+
                           |     Payment       |
                           +-------------------+
                           | _id               |
                           | user (Ref: User)  |
                           | trader (Ref: Trader) |
                           | amount            |
                           | date              |
                           | status            |
                           +-------------------+
                                   ^
                                   |
                                   |
                           +-------------------+
                           |    Testimonial    |
                           +-------------------+
                           | _id               |
                           | trader (Ref: Trader) |
                           | user (Ref: User)  |
                           | comment           |
                           | rating            |
                           +-------------------+
                                   ^
                                   |
                                   |
                           +-------------------+
                           |     Booking       |
                           +-------------------+
                           | _id               |
                           | user (Ref: User)  |
                           | trader (Ref: Trader) |
                           | service (Ref: Service) |
                           | subtask (Ref: Subtask) |
                           | date              |
                           | status (enum: pending,   |
                           |         accepted,      |
                           |         completed)    |
                           | ...               |
                           +-------------------+
                                   ^
                                   |
                                   |
                           +-------------------+
                           |       Chat        |
                           +-------------------+
                           | _id               |
                           | user (Ref: User)  |
                           | trader (Ref: Trader) |
                           | booking (Ref: Booking) |
                           | messages []       |
                           +-------------------+
