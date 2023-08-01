// server.js
import { User } from './userModel.js'
const http = require('http');
const url = require('url');
const fetch = require('node-fetch');

const API_KEY = 'aUDMJHvbSIVusNoJ6uDzamHSz0CmwHV6tAX6T2S8'; // Replace this with your actual API key

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  if (req.method === 'POST' && pathname === '/astrology') {
    handleAstrologyRequest(req, res);
  } else {
    // Handle other routes or return a 404 Not Found response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

function handleAstrologyRequest(req, res) {
  let data = '';

  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', async () => {
    try {
      const userData = JSON.parse(data);

      const response = await fetch('http://json.freeastrologyapi.com/planets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          year: userData.birthdate.getFullYear(),
          month: userData.birthdate.getMonth() + 1,
          date: userData.birthdate.getDate(),
          hours: parseInt(userData.birthtime.slice(0, 2)),
          minutes: parseInt(userData.birthtime.slice(6, 8)),
          latitude: parseFloat(userData.latitude),
          longitude: parseFloat(userData.longitude),
          timezone: -8,
          settings: {
            observation_point: 'topocentric',
            ayanamsha: 'lahiri',
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Network request failed');
      }

      const result = await response.json();

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } catch (error) {
      console.error('Error fetching data', error);

      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Error fetching data' }));
    }
  });
}

const port = 3000; // Change the port if needed
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
