const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const API_KEY = 'Ot28mMZlv6k4ttzYvKAA0Q==gsjSjZUAsL2qGe3O'; // Replace with your actual API key from API Ninjas

app.get('/rhyme', async (req, res) => {
    const word = req.query.word;

    if (!word) {
        return res.status(400).json({ error: 'Please provide a word query parameter.' });
    }

    try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/rhyme?word=${word}`, {
            headers: { 'X-Api-Key': API_KEY }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching rhymes.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
