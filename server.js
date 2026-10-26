
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from my new Node.js server!");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is healthy"
    });
});

module.exports = app;

if (require.main === module) {
    const PORT = 3000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
