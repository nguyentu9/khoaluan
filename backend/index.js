require("dotenv").config();
const express = require("express");
const session = require("express-session");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const sequelize = require("./src/config/db");
const store = new session.MemoryStore();
const compression = require("compression");

const notFound = require("./src/middlewares/notFound.mdw");
const error = require("./src/middlewares/error.mdw");

const jobTitleRoute = require("./src/routers/jobTitle.route");
const degreeRoute = require("./src/routers/degree.route");
const authRoute = require("./src/routers/auth.route");
const majorRoute = require("./src/routers/major.route");
const topicRoute = require("./src/routers/topic.route");
const userRoute = require("./src/routers/user.route");
const statusRoute = require("./src/routers/status.route");
const topicRoleRoute = require("./src/routers/topicRole.route");
const facDeptRoute = require("./src/routers/facdept.route");
require("./src/models/association");

// TODO: express rate limix
// TODO: hpp
// TODO: sequelize sesssion
// TODO: config helmet
app.use(helmet());
app.use(morgan("dev"));
// app.use(hpp());
app.use(compression());
// app.use(xss());
app.set("trust proxy", 1); // trust first proxy

// app.use(function (req, res, next) {
// res.header("Content-Type", "application/json;charset=UTF-8");
// res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
// );
//     next();
// });

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
        preflightContinue: false,
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
        store,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
);

app.get("/", (req, res) => {
    return res.status(200).send({ status: "success", user: req.session });
});
app.use("/api/auth", authRoute);
app.use("/api/jobtitles", jobTitleRoute);
app.use("/api/degrees", degreeRoute);
app.use("/api/majors", majorRoute);
app.use("/api/topics", topicRoute);
app.use("/api/users", userRoute);
app.use("/api/statuses", statusRoute);
app.use("/api/topicroles", topicRoleRoute);
app.use("/api/facdepts", facDeptRoute);

app.use(notFound);
app.use(error);

sequelize
    // .sync({ force: true, logging: console.log })
    .sync()
    .then(() => console.log("Connection Successful!"))
    .catch((e) => console.log("Error: " + e));

const PORT = 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
