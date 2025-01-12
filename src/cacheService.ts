// Import the NodeCache library to provide in-memory caching functionality
import NodeCache from 'node-cache';

// Initialize a new NodeCache instance with a default TTL (time-to-live) of 300 seconds (5 minutes)
const cache = new NodeCache({
    stdTTL: 300 // 300 seconds (5 minutes)
});

// Define a generic type for the callback function used to fetch data if it's not in the cache
type CacheCallback<T> = () => T;

// Define the getOrSetCache function, which checks the cache for a value or calls the provided callback to fetch the value
export const getOrSetCache = <T>(key: string, cb: CacheCallback<T>): T => {
    // Attempt to retrieve the cached value associated with the provided key
    const value = cache.get<T>(key);

    // If the value exists in the cache, log a "Cache hit" and return the cached value
    if (value) {
        console.log('Cache hit');
        return value;
    }

    // If the value is not in the cache (cache miss), log a "Cache miss"
    console.log('Cache miss');

    // Call the provided callback to fetch the value, as it's not in the cache
    const result = cb();

    // Store the fetched result in the cache with the provided key
    cache.set(key, result);

    // Return the result, either from the cache or from the callback function
    return result;
};
