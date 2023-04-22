const express = require("express");
const server = express();

const port = 3000;

server.get("/", (req, res) => {
    res.status(200).send("Node app with docker");
})

server.listen(port, () => {
    console.log(`Server with docker is running on port ${port}`);
})