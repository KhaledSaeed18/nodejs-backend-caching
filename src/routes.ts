// Import the Router class from the Express library to define modular route handlers
import { Router } from 'express';

// Import mock user data to simulate a dataset for demonstration purposes
import { users } from './mockData';

// Import the caching service function to handle caching logic
import { getOrSetCache, deleteCache } from './cacheService';

// Create a new Router instance to define and manage routes for this module
const router = Router();

// Define a GET route for fetching user data
router.get('/users', (req, res) => {
    try {
        // Use the caching service to either get cached data or fetch and cache new data
        const data = getOrSetCache('users', () => {
            // If cache is missed, return the users dataset
            return users;
        });

        // Send the fetched or cached data as a JSON response to the client
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Define a POST route for creating new users
router.post('/users', (req, res) => {
    try {
        const newUser = req.body;
        
        // Add validation if needed
        if (!newUser.name || !newUser.email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        // Add new user to the data source
        users.push(newUser);
        
        // Delete the existing cache to force a refresh
        deleteCache('users');
        
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// Export the router so it can be imported and used in the main application
export { router };
