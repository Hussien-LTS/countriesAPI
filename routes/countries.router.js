const express = require("express");

const {
  httpGetAllCountriesByName,
  httpGetAllCountriesByCapital,
  httpGetAllCountriesByLanguage,
} = require("./countries.controller");

const countriesRouter = express.Router();

countriesRouter.get("/", httpGetAllCountriesByName);
countriesRouter.get("/capital", httpGetAllCountriesByCapital);
countriesRouter.get("/language", httpGetAllCountriesByLanguage);

module.exports = countriesRouter;
