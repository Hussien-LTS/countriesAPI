const express = require("express");

const api = express.Router();

const countriesRouter = require('./countries.router');

api.use("/countries", countriesRouter);

module.exports = api;
