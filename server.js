const express = require('express'); 
const axios = require('axios'); 
const app = express(); 
const port = 3000; 
require('dotenv').config();


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next(); 
});


app.get('/search', async (req, res) => {
    const query = req.query.q;
    const apiKey =process.env.API_KEY;

    console.log('Query:', query); 

    try {
      
        const response = await axios.get(`https://serpapi.com/search.json`, {
            params: {
                engine: 'google_shopping',
                q: query,
                api_key: apiKey
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching SerpAPI data:', error.message); 
        res.status(500).json({
            error: 'Error fetching product data',
            details: error.message 
        });
    }
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); 
});
