const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 100 requests per windowMs
});

app.use("/users/login", authLimiter);
app.use("/users/signup", authLimiter);

/* app.get("/test/*", (req, res, next) => {
    // res.send("The test route was called");
    // res.redirect("/test/potofgold");
    console.log("Does this wildcard get called?")
    next();
});
app.get("/test/potofgold", (req, res) => {
    res.send("This is a pot of gold");
}); */

// router imports
const usersRoute = require('./routes/usersRoute');

app.use(usersRoute);

const Knex = require('knex');
const knexConfig = require('./knexfile');
const Model = require('objection').Model;

const knex = Knex(knexConfig.development);
Model.knex(knex);

const server = app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port ", server.address().port);
})