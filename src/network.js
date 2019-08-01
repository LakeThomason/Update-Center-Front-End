const axios = require("axios");

module.exports.getBanks = function(context) {
  axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}/findAllDoc`, {})
    .then(function(response) {
      if (response.data) {
        context.setState({ banks: response.data.flat() });
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};
