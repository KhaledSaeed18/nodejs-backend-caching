
# Node Cache Service

A lightweight and efficient caching solution built with Node.js and TypeScript using the `node-cache` package. This project provides an in-memory caching service to improve application performance by storing and reusing frequently accessed data.

## Overview

This project is designed to demonstrate how to use caching to optimize data retrieval in a Node.js application. The caching layer allows repeated requests for the same data to be handled quickly by leveraging in-memory storage, significantly reducing database or API calls.

### Key Features

- Implements caching using the `node-cache` library.
- Provides data retrieval via cached data or fresh data.
- Automatically refreshes cache when new data is inserted.
- Supports expiration and TTL (Time-to-Live) for cached data.

## Installation

To set up the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/node-cache.git
   cd node-cache
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### 1. Run the Development Server

To start the development server, use:

```bash
npm run dev
```

This will start the server and automatically restart on file changes using `nodemon`.

### 2. Endpoints

- **GET /users**: Fetches user data with caching.
  
  Request URL:

  ```bash
  GET http://localhost:3000/api/users
  ```

- **POST /users**: Adds a new user to the mock data collection and refreshes the cache.

  Request URL:

  ```bash
  POST http://localhost:3000/api/users
  ```

  Request Body:

  ```json
    {
      "id": 11,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "age": 30,
      "role": "developer",
      "country": "USA"
    }
  ```

## Project Structure

```bash
/src
    /cacheService.ts       // Caching logic using node-cache
    /mockData.ts           // Mock data for demonstration
    /routes.ts             // API routes for users
    /server.ts             // Server initialization
/package.json
/tsconfig.json
```

## About `node-cache`

The `node-cache` package is an in-memory caching solution for Node.js applications. It provides fast and simple caching with features such as:

- Time-to-live (TTL) and expiration handling
- Ability to store different types of data (strings, objects, etc.)
- Automatic cleanup of expired cache entries
- Keys with individual TTL settings
- Event handling for expired keys

### Key Functions

- `set(key, value, [ttl])`: Store a value with optional TTL
- `get(key)`: Retrieve a value by key
- `del(key)`: Delete a key from cache
- `has(key)`: Check if key exists
- `keys()`: Get all existing keys
- `getStats()`: Retrieve cache statistics
- `flushAll()`: Clear entire cache
- `close()`: Clean up and shutdown the cache

### Advanced Features

- `mset()`: Set multiple keys at once
- `mget()`: Get multiple keys at once
- `mdel()`: Delete multiple keys
- `getTtl()`: Get remaining TTL for a key

### Events

- `expired`: Triggered when a key expires
- `flush`: Triggered when cache is cleared
- `del`: Triggered when a key is deleted

This caching solution is perfect for reducing database load and improving application response times.
