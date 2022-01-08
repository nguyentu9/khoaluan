require("dotenv").config();
const express = require("express");
const session = require("express-session");
const helmet = require("helmet");
const xss = require("xss-clean");
const app = express();
const error = require("./src/middlewares/error.mdw");
const sequelize = require("./src/config/db");

const jobTitleRoute = require("./src/routers/jobTitle.route");
const degreeRoute = require("./src/routers/degree.route");
const authRoute = require("./src/routers/auth.route");
require("./src/models/association");

// TODO: express rate limix
// TODO: hpp
// TODO: sequelize sesssion
// TODO: config helmet

app.use(helmet());
app.use(xss());
app.set("trust proxy", 1); // trust first proxy
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    })
);

app.use(function (req, res, next) {
    res.header("Content-Type", "application/json;charset=UTF-8");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/auth", authRoute);
app.use("/api/jobtitles", jobTitleRoute);
app.use("/api/degrees", degreeRoute);

app.use(error);

sequelize
    // .sync({ force: true, logging: console.log })
    .sync()
    .then(() => console.log("Connection Successful!"))
    .catch((e) => console.log("Error: " + e));

const PORT = 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
