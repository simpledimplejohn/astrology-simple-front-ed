// server.js
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json()); // Parse JSON requests

// Enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/planets', async (req, res) => {
    const apiKey = process.env.API_KEY;
    const apiUrl = 'http://json.freeastrologyapi.com/planets';

    try {
        // res.json({ message: 'Server is working'})
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: apiKey,
            },
            body: JSON.stringify(req.body),
        });

        if (!response.ok) {
            throw new Error('Network request failed potato');
        }

        const result = await response.json();
        res.json(result);
        
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({error: 'An error occurred'});
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});