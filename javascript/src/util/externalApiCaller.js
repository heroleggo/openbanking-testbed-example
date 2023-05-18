const axios = require("axios");

const externalApiCaller = axios.create({
  baseURL: '',
});

module.exports = {
  externalApiCaller
};