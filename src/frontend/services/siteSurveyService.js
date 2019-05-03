const axios = require('axios');

const dataUri = 'http://localhost:8080/api';

function siteSurveyService() {
  function LoadCategories() {
    axios.get(`${dataUri}/categories/`)
      .then((response) => {
        // handle success
        console.log(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }
  return { LoadCategories };
}

module.exports = siteSurveyService();
