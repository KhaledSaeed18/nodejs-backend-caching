// Import the Express library to create a web server and handle HTTP requests
import express from 'express';

// Import the router module to define API routes
import { router } from './routes';

// Create an instance of an Express application
const app = express();

// Enable JSON request body parsing
app.use(express.json());

// Define the port number the server will listen on
const PORT = 3000;

// Use the imported router for routes starting with '/api'
// This means all routes in the router module will be prefixed with '/api'
app.use('/api', router);

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
    // Log a message to indicate that the server is running and ready to accept connections
    console.log(`Server is running on port ${PORT}`);
});
