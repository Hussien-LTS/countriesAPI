const express = require("express");

const {
  httpGetAllCountriesByName,
  httpGetAllCountriesByCapital,
  httpGetAllCountriesByLanguage,
  httpGetAllCountries,
} = require("./countries.controller");

const countriesRouter = express.Router();

countriesRouter.get("/all", httpGetAllCountries);
countriesRouter.get("/capital", httpGetAllCountriesByCapital);
countriesRouter.get("/language", httpGetAllCountriesByLanguage);
countriesRouter.get("/name", httpGetAllCountriesByName);

module.exports = countriesRouter;
