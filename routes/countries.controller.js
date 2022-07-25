const axios = require("axios").default;

const countryURLByName = "https://restcountries.com/v3.1/name";
const countryURLByCapital = "https://restcountries.com/v3.1/capital";
const countryURLByLanguage = "https://restcountries.com/v3.1/lang";

async function httpGetAllCountriesByName(req, res) {
  try {
    const { name } = req.body;

    const result = await axios.get(`${countryURLByName}/${name}`);
    console.log("in function data", result.data);
    let CountriesArrayByName = result.data.map((data) => {
      let names = data.name.common;
      let capital = data.capital[0];
      let population = data.population;
      if (Math.floor(data.population / 1000000) < 1) {
        population = 1 + " m";
      } else {
        population = Math.floor(data.population / 1000000) + " m";
      }
      let currencies = data.currencies;
      let currencie = currencies[Object.keys(currencies)[0]];
      let currencieName = currencie[Object.keys(currencie)[0]];
      let symbol = currencie[Object.keys(currencie)[1]].trim();
      let languages = data.languages;
      let translations = data.translations.ara.official;
      return {
        names,
        capital,
        population,
        currencieName,
        symbol,
        languages,
        translations,
      };
    });
    return res.status(200).json({
      count: result.data.length,
      CountriesArrayByName,
    });
  } catch (error) {
    return res.status(404).json({
      error: "no country found",
      statusCode: 404,
    });
  }
}

async function httpGetAllCountriesByCapital(req, res) {
  try {
    const { capital } = req.body;
    // const result = await axios.get(`${countryURLByName}/${capital}`);
    const result = await axios.get(`${countryURLByCapital}/${capital}`);
    console.log("in function data", result.data);
    let CountriesArrayByCapital = result.data.map((data) => {
      let names = data.name.common;
      let capital = data.capital[0];
      let population = data.population;
      if (Math.floor(data.population / 1000000) < 1) {
        population = 1 + " m";
      } else {
        population = Math.floor(data.population / 1000000) + " m";
      }
      let currencies = data.currencies;
      let currencie = currencies[Object.keys(currencies)[0]];
      let currencieName = currencie[Object.keys(currencie)[0]];
      let symbol = currencie[Object.keys(currencie)[1]].trim();
      let languages = data.languages;
      let translations = data.translations.ara.official;
      return {
        names,
        capital,
        population,
        currencieName,
        symbol,
        languages,
        translations,
      };
    });
    return res.status(200).json({
      count: result.data.length,
      CountriesArrayByCapital,
    });
  } catch (error) {
    return res.status(404).json({
      error: "no country found",
      statusCode: 404,
    });
  }
}

async function httpGetAllCountriesByLanguage(req, res) {
  try {
    const { language } = req.body;
    const result = await axios.get(`${countryURLByLanguage}/${language}`);
    console.log("in function data", result.data);
    let CountriesArrayByLanguage = result.data.map((data) => {
      let names = data.name.common;
      let capital = data.capital[0];
      let population = data.population;
      if (Math.floor(data.population / 1000000) < 1) {
        population = 1 + " m";
      } else {
        population = Math.floor(data.population / 1000000) + " m";
      }
      let currencies = data.currencies;
      let currencie = currencies[Object.keys(currencies)[0]];
      let currencieName = currencie[Object.keys(currencie)[0]];
      let symbol = currencie[Object.keys(currencie)[1]];
      let languages = data.languages;
      let translations = data.translations.ara.official;
      return {
        names,
        capital,
        population,
        currencieName,
        symbol,
        languages,
        translations,
      };
    });
    return res.status(200).json({
      count: result.data.length,
      CountriesArrayByLanguage,
    });
  } catch (error) {
    return res.status(404).json({
      error: "no country found",
      statusCode: 404,
    });
  }
}

module.exports = {
  httpGetAllCountriesByName,
  httpGetAllCountriesByCapital,
  httpGetAllCountriesByLanguage,
};
