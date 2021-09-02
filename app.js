const express = require("express");
const app = express();
const router = express.Router();

app.set("view engine", "ejs");


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", express.static("public"), router);

//App Routes
const userRoute = require("./app/routes/user-route");
const customerRoute = require("./app/routes/customer-route");

//Pages Routes
const indexRoutePage = require("./routes/index-route");
const userRoutePage = require("./routes/user-route");
const dashboardRoutePage = require("./routes/dashboard-route");
const { config } = require("dotenv-safe");

app.use("/", indexRoutePage);
app.use("/", userRoutePage);
app.use("/", dashboardRoutePage);
app.use("/v1/user", userRoute);
app.use("/v1/customers", customerRoute);

app.listen(3000);
