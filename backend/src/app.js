const express = require("express");
const app = express();
const error = require("./middleware/error.mdw");
const sequelize = require("./config/db");

app.use(express.json());

const jobTitleRoute = require("./routers/jobtitle.route");
const degreeRoute = require("./routers/degree.route");

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/jobtitles", jobTitleRoute);
app.use("/api/degrees", degreeRoute);

app.use(error);

sequelize
    .sync()
    .then(() => console.log("Connection Successful!"))
    .catch((e) => console.log("Error: " + e));

module.exports = app;
