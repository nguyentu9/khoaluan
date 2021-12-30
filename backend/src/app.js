const express = require("express");
const app = express();
const error = require("./middleware/error.mdw");

app.use(express.json());

const jobTitleRoute = require("./routers/jobtitle.route");

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/jobtitle", jobTitleRoute);

app.use(error());

module.exports = app;
