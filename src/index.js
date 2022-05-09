// Import express to index.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Initial express installation testing
app.get('/', (req, res) => {
    res.send(`<h2>The Express is working</h2>`);
});

app.listen(PORT, () => {
    console.log(`API is listening on PORT ${PORT}`);
})