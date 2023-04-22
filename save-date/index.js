const express = require("express");
const dayjs = require("dayjs");
const server = express();
const port = 3000;

server.get("/", (req, res) => {
    res.status(200).send("Hello, Docker this is Home page")
})

server.get("/date", (req, res) => {
    let date;
    try {
        const format = "YYYY-MMM-DD, ddd hh:mmA";
        date = dayjs().format(format);
    } catch (error) {
        console.log("Error", error);
    }
    res.status(200).send(`Today is ${date}`)
})

server.listen(port, () => {
    console.log("Server is running on port 3000");
})
