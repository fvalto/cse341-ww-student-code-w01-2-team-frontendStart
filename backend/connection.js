const { MongoClient } = require('mongodb');
require('dotenv').config();
const uri = process.env.URI;

require('dns').setServers(['8.8.8.8', '8.8.4.4']);

async function main() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = main;