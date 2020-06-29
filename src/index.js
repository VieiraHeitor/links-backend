const express = require('express');
const { json } = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json('API is running...')
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
});
