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
const userRoute = require('./app/routes/user-route');

//Pages Routes
const indexRoutePage = require('./routes/index-route');
const userRoutePage = require('./routes/user-route');

app.use('/',indexRoutePage);
app.use('/',userRoutePage);
app.use('/v1/user',userRoute);



app.listen(3000);
