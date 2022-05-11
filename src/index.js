// Import express to index.js
const express = require('express');
// *** v1Router ***
const v1Router = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// *** v1Router hooked
app.use("/api/v1", v1Router);

app.listen(PORT, () => {
    console.log(`API is listening on PORT ${PORT}`);
})