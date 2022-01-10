require("dotenv").config();
const express = require("express");
const session = require("express-session");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const app = express();
const sequelize = require("./src/config/db");
const MemoryStore = session.MemoryStore;
const compression = require("compression");

const notFound = require("./src/middlewares/notFound.mdw");
const error = require("./src/middlewares/error.mdw");

const jobTitleRoute = require("./src/routers/jobTitle.route");
const degreeRoute = require("./src/routers/degree.route");
const authRoute = require("./src/routers/auth.route");
const majorRoute = require("./src/routers/major.route");
require("./src/models/association");

// TODO: express rate limix
// TODO: hpp
// TODO: sequelize sesssion
// TODO: config helmet
app.use(helmet());
// app.use(hpp());
app.use(compression());
// app.use(xss());
app.set("trust proxy", 1); // trust first proxy

app.use(function (req, res, next) {
    res.header("Content-Type", "application/json;charset=UTF-8");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3001");
    next();
});

app.use(
    cors({
        origin: "http://localhost:3001",
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(
    session({
        secret: "1234567890QWERTY",
        resave: false,
        store: new MemoryStore(),
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
);

app.get("/", (req, res) => {
    req.session.authenticated = true;

    return res.status(200).send({ status: "success", user: req.session });
});

app.use("/api/auth", authRoute);
app.use("/api/jobtitles", jobTitleRoute);
app.use("/api/degrees", degreeRoute);
app.use("/api/majors", majorRoute);

app.use(notFound);
app.use(error);

sequelize
    // .sync({ force: true, logging: console.log })
    .sync()
    .then(() => console.log("Connection Successful!"))
    .catch((e) => console.log("Error: " + e));

const PORT = 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
