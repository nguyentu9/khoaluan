const express = require("express");
const app = express();
const error = require("./middleware/error.mdw");

app.use(express.json());

const jobTitleRoute = require("./routers/jobtitle.route");
const degreeRoute = require("./routers/degree.route");

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/jobtitles", jobTitleRoute);
app.use("/api/degrees", degreeRoute);

app.use(error());

module.exports = app;
